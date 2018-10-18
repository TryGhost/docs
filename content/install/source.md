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


#### The install these global packages

```bash
yarn global add knex-migrator grunt-cli ember-cli bower
```


## Create Github forks

First you'll need to make forks of both the [Ghost](https://github.com/tryghost/ghost) and [Ghost-Admin](https://github.com/tryghost/ghost-admin) respositories. Click on the fork button right at the top, wait for a copy to be created over on your personal Github account, and you should be all set!


![Fork](/images/setup/fork.gif)


## Configure repositories

### Ghost Core

```bash
# First clone Ghost and make it your working dir
git clone git@github.com:TryGhost/Ghost.git && cd Ghost
```

#### Properly rename your references

```bash
# Rename origin to upstream
git remote rename origin upstream

# Ensure it has the correct path
git remote set-url upstream git@github.com:TryGhost/Ghost.git

# Add your fork as an origin, editing in <YourUsername>!
git remote add origin git@github.com:<YourUsername>/Ghost.git
```

### Ghost Admin

Ghost-Admin is a submodule repository of the main Ghost repository, so we need to repeat the same steps to get git working correctly.

```bash
# Switch to Ghost-Admin dir
cd core/client
```

#### Properly rename your references again

```bash
# Rename origin to upstream
git remote rename origin upstream

# Ensure admin also has the correct path
git remote set-url upstream git@github.com:TryGhost/Ghost-Admin.git

# Add your fork as an origin, editing in <YourUsername>!
git remote add origin git@github.com:<YourUsername>/Ghost-Admin.git
```

#### Bring Ghost-Admin up to date

```bash
# Quick check that everything is on latest
git checkout master && git pull upstream master

# Then return to Ghost root directory
cd ../../
```


## Run setup & installation

```bash
# Only ever run this once
yarn setup
```
The `setup` task will install dependencies, initialise the database, set up git hooks & initialise submodules and run a first build of the admin. The very first build generally takes **a while**, so now's a good time to re-open that Reddit tab.


## Start Ghost

```bash
# Run Ghost in development mode
grunt dev
```

Visit your new site at http://localhost:2368/


## Stay up to date

When your working copies become out of date due to upstream changes, this is the command always brings you back up to latest `master`

```bash
# Update EVERYTHING
grunt master
```

That's it, you're done with the install! The rest of this guide is about working with your new development copy of Ghost.

---


## Commands

### Running Ghost

```bash
grunt dev
# Default way of running Ghost in development mode
# Builds Admin files on start & then watches for changes

grunt dev --server
# Ignores admin changes

grunt dev --no-server-watch
# Ignores server changes

grunt build
# Build admin client manually

grunt prod
# Build full Ghost package for production
```

### Database tools

Ghost uses it's own tool called `knex-migrator` to manage database migrations

```bash
knex-migrator reset
# Wipe the database

knex-migrator init
# Populate a fresh database
```

### Test suite

Tests run with SQlite. To use MySQL, prepend commands with `NODE_ENV=testing-mysql`

```bash
grunt test-all
# Run all tests

grunt test-unit
# Run unit tests

grunt test-integration
# Run integration tests

grunt test-functional
# Run functional tests

grunt test:path/to/test.js
# Run a single test

grunt lint
# Make sure your code doesn't suck
```
