---
title: "Styling"
cover: "https://unsplash.it/400/300/?random?BoldMage"
next:
    url: "/concepts/posts/"
template:
keywords:
    - design
---

## UI styles

Use Spirit for styling the overall UI of Ghost Docs. If you need a new style declaration which is not available in Spirit and it can be standardized (i.e. could become part of Spirit) then add it to Spirit. If you need a custom, one-off style then you _can_ add it to [`custom.css`](https://github.com/TryGhost/docs/blob/master/src/components/css/custom.css).

### UI style helpers

For most common styles you can retrieve Spirit class combinations from the `Spirit` object in [`spirit-styles.js`](https://github.com/TryGhost/docs/blob/master/src/components/spirit-styles.js).
```html
<h1 class={ Spirit.h1 }>This is a heading</h1>

// Renders:
<h1 class="f1 lh-h1 fw3 ma0 pa0 measure--0-2">This is a heading</h1>
```

If you need further styles you can simply concatenate them to the style helpers.

```html
<h1 class={ Spirit.h1 + `pt2` }>This is a heading</h1>

// Renders:
<h1 class="f1 lh-h1 fw3 ma0 pa0 measure--0-2 pt2">This is a heading</h1>
```

Feel free to extend style helpers with new reusable class combinations.

## Content styles

The content source of a doc post can be either a Ghost post or a Markdown file stored in a Github repo. Neither of these sources will have Spirit classes when they are rendered, so Spirit can't be used for styling them. Instead we declared global post content styles in [`post-content.css`](https://github.com/TryGhost/docs/blob/master/src/components/css/post-content.css) - to apply post content styles, add the `post-content` class to the container element of the post.