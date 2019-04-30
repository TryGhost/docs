const fs = require(`fs`)
const normalizePath = require(`normalize-path`)
const visit = require(`unist-util-visit`)

// This map tracks languages that don't match their extension.
var FILE_EXTENSION_TO_LANGUAGE_MAP = {
    js: `jsx`,
    md: `markup`,
    sh: `bash`,
    rb: `ruby`,
}

var getLanguage = function getLanguage(file) {
    if (!file.includes(`.`)) {
        return `none`
    }

    var extension = file.split(`.`).pop()
    return FILE_EXTENSION_TO_LANGUAGE_MAP.hasOwnProperty(extension) ? FILE_EXTENSION_TO_LANGUAGE_MAP[extension] : extension.toLowerCase()
}

module.exports = function (_ref, _temp) {
    var markdownAST = _ref.markdownAST

    var _ref2 = _temp === void 0 ? {} : _temp,
        directory = _ref2.directory

    if (!directory) {
        throw Error(`Required option "directory" not specified`)
    } else if (!fs.existsSync(directory)) {
        throw Error(`Invalid directory specified "` + directory + `"`)
    } else if (!directory.endsWith(`/`)) {
        directory += `/`
    }

    visit(markdownAST, `code`, function (node) {
        if (node.file) {
            var path = normalizePath(`` + directory + node.file)
            if (!fs.existsSync(path)) {
                throw Error(`Invalid snippet specified; no such file "` + path + `"`)
            }

            node.lang = node.lang || getLanguage(node.file)
            node.value = fs.readFileSync(path, `utf8`).trim()
        }
    })

    return markdownAST
}

const C_NEWLINE = `\n`
const C_FENCE = `|`
const snippetRegex = new RegExp(`\\[\\[Snippet(?: *\\| *(.*))?\\]\\]\n`)
const embedRegex = new RegExp(`embed://(.*)`)

function snippetTokenizer(eat, value) {
    const now = eat.now()
    const keep = snippetRegex.exec(value)
    if (!keep) {
        return
    }
    if (keep.index !== 0) {
        return
    }

    const [eaten, blockTitle] = keep
    const linesToEat = []
    const contents = []

    let idx = 0
    while ((idx = value.indexOf(C_NEWLINE)) !== -1) {
        const next = value.indexOf(C_NEWLINE, idx + 1)
        // either slice until next NEWLINE or slice until end of string
        const lineToEat = next !== -1 ? value.slice(idx + 1, next) : value.slice(idx + 1)
        if (lineToEat[0] !== C_FENCE) {
            break
        }
        // remove leading `FENCE ` or leading `FENCE`
        const line = lineToEat.slice(lineToEat.startsWith(`${C_FENCE} `) ? 2 : 1)
        linesToEat.push(lineToEat)

        if (!embedRegex.test(line)) {
            contents.push({ code: line, lang: `text`, type: `code` })
        } else {
            const lineData = embedRegex.exec(line)[1]
            const [file, title, lang] = lineData.split(`|`).map(x => x.trim())
            contents.push({ file, title, lang, type: `code` })
        }

        value = value.slice(idx + 1)
    }

    const stringToEat = eaten + linesToEat.join(C_NEWLINE)
    const add = eat(stringToEat)
    const exit = this.enterBlock()

    if (contents.length === 1) {
        exit()

        if (blockTitle) {
            const titleNode = {
                type: `singleSnippetTitle`,
                data: {
                    hName: `div`,
                    hProperties: {
                        className: `gatsby-code-title`,
                    },
                },
                children: this.tokenizeInline(blockTitle, now),
            }

            contents.unshift(titleNode)
        }

        add({
            type: `singleSnippetBlock`,
            children: contents,
        })
        return
    }

    const blockChildren = []

    contents.forEach((content, i) => {
        blockChildren.push({
            type: `multiSnippetRadio`,
            data: {
                hName: `input`,
                hProperties: {
                    name: `tabs`,
                    type: `radio`,
                    id: `tab-${i}`,
                    checked: i === 0,
                },
            },
        })

        blockChildren.push({
            type: `multiSnippetTitle`,
            data: {
                hName: `label`,
                hProperties: {
                    for: `tab-${i}`,
                },
            },
            children: this.tokenizeInline(content.title, now),
        })

        blockChildren.push({
            type: `multiSnippetItem`,
            children: [content],
            data: {
                hProperties: {
                    className: `code-panel panel`,
                },
            },
        })
    })

    exit()

    add({
        type: `multiSnippetBlock`,
        children: blockChildren,
        data: {
            hProperties: {
                className: `code-tabs`,
            },
        },
    })
    return
}

function snippetCompiler() {
    let embed
    let title

    return {
        block(node) {
            embed = ``
            title = ``
            this.all(node)

            if (title) {
                return `[[snippet | ${title}]]\n| ${embed}`
            } else {
                return `[[snippet]]\n| ${embed}`
            }
        },
        blockItem(node) {
            return this.all(node).map(s => s.replace(/\n/g, `\n| `)).join(`\n|\n| `)
        },
    }
}

function snippetBlockPlugin() {
    const Parser = this.Parser

    // Inject blockTokenizer
    const blockTokenizers = Parser.prototype.blockTokenizers
    const blockMethods = Parser.prototype.blockMethods

    blockTokenizers.snippetBlocks = snippetTokenizer

    blockMethods.splice(blockMethods.indexOf(`fencedCode`) + 1, 0, `snippetBlocks`)

    const Compiler = this.Compiler
    if (Compiler) {
        const visitors = Compiler.prototype.visitors
        if (!visitors) {
            return
        }
        const compiler = snippetCompiler()
        visitors.snippetBlock = compiler.block
        visitors.snippetBlockItem = compiler.blockItem
    }

    // Inject into interrupt rules
    const interruptParagraph = Parser.prototype.interruptParagraph
    const interruptList = Parser.prototype.interruptList
    const interruptBlockquote = Parser.prototype.interruptBlockquote
    interruptParagraph.splice(interruptParagraph.indexOf(`fencedCode`) + 1, 0, [`snippetBlocks`])
    interruptList.splice(interruptList.indexOf(`fencedCode`) + 1, 0, [`snippetBlocks`])
    interruptBlockquote.splice(interruptBlockquote.indexOf(`fencedCode`) + 1, 0, [`snippetBlocks`])
}

module.exports.setParserPlugins = options => [[snippetBlockPlugin, options]]
