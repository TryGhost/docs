# Docs

*WIP*

## Installation
1. Make sure that `gstenv` is green. See [Dev Environment](https://hq.ghost.org/dev-environment/) for docs.
2. `git clone` this repo & `cd` into it as usual
3. Run `npm i -g gatsby@2.0.0-rc.15`
3. Run `yarn` to install top-level dependencies.

## Run
- Build Spirit (temporary): `cd node_modules/ghost-spirit/ && yarn && cd components/SearchInput && yarn && cd ../../ && NODE_ENV=production yarn build && cd ../../`
- Use: `GH_CLIENT_SECRET='<ghost site client secret>' yarn dev`
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

## Ghost Content

--> https://docs-2.ghost.io

## Test
- `yarn lint` run just eslint --> not setup yet completely
- `yarn test` run lint && tests --> not tests yet

# Copyright & License

Copyright (c) 2018 Ghost Foundation - Released under the [MIT license](LICENSE).
