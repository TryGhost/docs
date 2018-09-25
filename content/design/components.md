---
title: "Components"
cover: "https://unsplash.it/400/300/?random?BoldMage"
next: "/concepts/posts/"
template:
tags:
    - design
---

## Headers

- [Hairline header](/design/components/hairline-header/)
- [Shadow header](/design/components/shadow-header/)
- [Custom header](/design/components/custom-header/)


## Boxes

Use the [box.js](https://github.com/TryGhost/docs/blob/master/src/components/layouts/partials/box.js) react component to create uniform boxes. Example:

```javascript
import Box from 'src/components/layouts/partials/box'

<Box elevation="2" radius="5" href="https://ghost.org" onWhite="false" className="pa10">
    Ghost
</Box>
```

###### Parameters
- `elevation="1|2|3"` - sets the shadow of the box. The higher the number, the higher the box is from the background. Default value: `2`
- `radius="0|1|2|3|4|5"` - sets the border radius property of the box. The higher the bigger the radius is. Default value: `4`
- `href="[url]"` - sets up the box as a link to the specified URL. Default: none
- `onWhite="true|false"` - sets up the box shadows for a white background. Default: `false`
- `className` - additional CSS classes

[Boxes demo page](/design/components/boxes/)

## Navigation

- [Left sidebar]()
- [TOC sidebar]()