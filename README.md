# Docs

**For the most up to date Ghost documentation, please visit: https://docs.ghost.org**

---

## Installation
1. `git clone` this repo & `cd` into it as usual
1. `npm install --global gatsby-cli` to install Gatsby
1. `yarn` to install top-level dependencies.
1. Copy `.env.example` to `.env.development` and insert Ghost API key


## Run
- `yarn dev`
- View: [http://localhost:8000](http://localhost:8000)

## Production build (to test locally)
- `yarn serve`
- View: [http://localhost:9000](http://localhost:9000)


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
```jsx
<div className="flex justify-between pa10"></div>
```

#### 2. SpiritStyle
- `import { SpiritStyle } from '/src/components/spirit-brand/spirit-styles.js'` in components
- The properties of `SpiritStyle` object are predefined combinations of Spirit CSS classes. Use it for all the reusable styles (e.g. links, headings etc.).
- _TODO: needs to be outsourced to a gatsby plugin or external react module. (The Ghost admin client is using the [ember-cli-ghost-spirit](https://github.com/TryGhost/ember-cli-ghost-spirit) addon to access Spirit/Product helpers.)_

_Example:_
```jsx
<h1 className={ SpiritStyle.heading.h1 }></h1> <!-- Returns "f1 fw5 bb b--lightgrey pb3 mb7 mt10" -->
```

#### 3. Styled Components + CSS classes or SpiritStyle
Use [styled-components](https://next.gatsbyjs.org/docs/styled-components/) combined with Spirit styles to inject custom CSS within the context of the given component.

_Example:_
```jsx
const Header = () => (
    <Container>...</Container>
)

const Container = styled.div.attrs({
        className: { SpiritStyle.box } " shadow-2"
})`
    margin: 10px;
`
```
## Helpers
### Tags
Returns tags for a post as HTML or simple string. Will fallback to generate a tag `General` if no tag applicable is found.

**Options:**
  - `post`                [required, the post object]
  - `internal`            [optional, bool, default false, returns internal tags if set to true]
  - `limit`               [optional, number, default 1, limits the number of tags to be returned]
  - `separator`           [optional, string, default ", ", sets the separator to concat the tags]
  - `html`                [optional, bool, default false, returns tags and separators in `span` elements when set to true]
  - `classes`             [optional when html is used, string, default "darkgrey fw5", classNames used for the html tags]
  - `separatorClasses`    [optional when html is used, string, default "mr1 ml1 f8 midgrey", classNames used for the html separator tags]

**Example usage HTML**:

```jsx
<div>
    <Tags
        post={post}
        separator=" / "
        html={true}
    />
</div>
```

will render:

```html
<div>
    <span class="darkgrey fw5">Tag</span>
</div>
```

---

```jsx
<div>
    <Tags
        post={post}
        separator=" / "
        html={true}
        internal={true}
        limit={5}
    />
</div>
```

will render:

```html
<div>
    <span class="darkgrey fw5">#internal</span>
    <span class="mr1 ml1 f8 midgrey"> / </span>
    <span class="darkgrey fw5">Tag</span>
</div>
```

**Example usage string**:

```jsx
<span>
    <Tags
        post={post}
        limit={5}
    />
</span>
```

will render:

```html
<span>Tag, Tag2, Tag3, Tag4, Tag5</span>
```


## Ghost Content

--> https://docs-2.ghost.io

## Test
- `yarn lint` run just eslint --> not setup yet completely
- `yarn test` run lint && tests --> not tests yet

# Copyright & License

Copyright (c) 2018 Ghost Foundation - Released under the [MIT license](LICENSE).
