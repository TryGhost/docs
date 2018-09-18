# Docs

_[Note: This project is in active early development and is not suitable for public use]_

**For the most up to date Ghost documentation, please visit: https://docs.ghost.org**

---

## Installation
1. Make sure that `gstenv` is green. See [Dev Environment](https://hq.ghost.org/dev-environment/) for docs.
2. `git clone` this repo & `cd` into it as usual
3. Run `npm i -g gatsby@2.0.0`
3. Run `yarn` to install top-level dependencies.
4. Copy the existing `.env.example` file as `.env.development` and insert your API key (`client_secret`)

## Run
- Use: `yarn dev`
- View: [http://localhost:8000](http://localhost:8000)
- GraphiQL in-browser GraphQL IDE: [http://localhost:8000/___graphql](http://localhost:8000/___graphql)

## Markdown content

The folder structure in the content directory reflects how the URL is generated.
e. g.
    - `/content/setup/ubuntu/index.md` will be generated as `https://docs.ghost.org/setup/ubuntu`
    - `/content/concepts/introduction.md` will be generated as `https://docs.ghost.org/concepts/introduction`

### API

- v0.11 --> branch `v0.11`
- v2 --> branch `master`

See --> [API docs repo](https://github.com/TryGhost/docs-api)

### Concepts & setup

## Spirit
Ghost Docs uses [Spirit/Brand](https://github.com/TryGhost/Spirit) as its design system. For development, it's recommended to `yarn link` the local Spirit repo to docs ([`yarn link` how to](https://yarnpkg.com/lang/en/docs/cli/link/)).

### Using Spirit

There are multiple ways you can use Spirit:

#### 1. Inline Spirit (Tachyons) CSS classes
You can use Spirit CSS classes directly in `className` attribute. Typically for non-reusable, custom components where Spirit classes are sufficiently let you style the component.

_Example:_
```
<div className="flex justify-between pa10"></div>
```

#### 2. SpiritStyle
- `import { SpiritStyle } from '/src/components/spirit-brand/spirit-styles.js'` in components
- The properties of `SpiritStyle` object are predefined combinations of Spirit CSS classes. Use it for all the reusable styles (e.g. links, headings etc.).
- _TODO: needs to be outsourced to a gatsby plugin or external react module. (The Ghost admin client is using the [ember-cli-ghost-spirit](https://github.com/TryGhost/ember-cli-ghost-spirit) addon to access Spirit/Product helpers.)_

_Example:_
```
<h1 className={ SpiritStyle.heading.h1 }></h1> <!-- Returns "f1 fw5 bb b--lightgrey pb3 mb7 mt10" -->
```

#### 3. Styled Components + CSS classes or SpiritStyle
Use [styled-components](https://next.gatsbyjs.org/docs/styled-components/) combined with Spirit styles to inject custom CSS within the context of the given component.

_Example:_
```
const Header = () => (
    <Container>...</Container>
)

const Container = styled.div.attrs({
        className: { SpiritStyle.box } " shadow-2"
})`
    margin: 10px;
`
```

## Ghost Content

--> https://docs-2.ghost.io

## Test
- `yarn lint` run just eslint --> not setup yet completely
- `yarn test` run lint && tests --> not tests yet

# Copyright & License

Copyright (c) 2018 Ghost Foundation - Released under the [MIT license](LICENSE).
