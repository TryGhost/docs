---
title: "Install from Source"
keywords:
    - Developer install
    - Contribution
    - Contribute to Ghost
---

This guide is for installing a local development copy of Ghost from source, primarily for the purpose of modifying Ghost core


## Pre-requisites

Before getting started, you'll need these global packages to be installed:

- **A [supported version](/faq/node-versions/) of [Node.js](https://nodejs.org)** - Ideally installed via [nvm](https://github.com/creationix/nvm#install-script)
- **[Yarn](https://yarnpkg.com/en/docs/install#alternatives-tab)** - to manage all the packages


## Initial Setup

These commands only need to be run once to get your Ghost install up and running

#### 1. Clone Ghost and make it your working directory:

```bash
git clone git@github.com:TryGhost/Ghost.git && cd Ghost
```

#### 2. Install global packages

```bash
yarn global add knex-migrator grunt-cli ember-cli bower
```

#### 3. Run the first-time setup & install tasks:

```bash
yarn setup
```

The `setup` task will install dependencies, initialise the database, set up git hooks & initialise submodules and run a first build of the admin (which can often take a **very** long time ⏳). It should only ever be run **once**!
  
#### Once you see a "done" message, start Ghost with:

```bash
grunt dev
```
- Visit your new site at http://localhost:2368/
- See the list of development commands below for other options
