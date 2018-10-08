---
title: "Installing Ghost Locally"
date: "2018-10-01"
meta_title: "Installing Ghost Locally"
meta_description: "Want to give Ghost a try? With local installs you can test the platform or develop a Ghost theme. Read the full guide here 👻"
image: "https://unsplash.it/400/300/?random?BoldMage"
keywords:
    - setup
    - local
    - install
    - development
sidebar: handlebars
---

A complete guide to install an instance of Ghost locally for development

## Overview

Welcome to the Ghost local install guide! If you’re here to test Ghost locally or develop a theme, this is the guide for you. 

By the end of this tutorial you will have completed a local Ghost install that runs in development mode using sqlite3. 

If you would like to customise Ghost core, or contribute to the upstream repository, use the contribution guide.

> Local installs aren’t suitable for production — head to [this install guide](https://docs.ghost.org/setup/ubuntu/) if you want to deploy to production.

## Prerequisites

We officially recommend following this local installation. However, `ghost install` is flexible, so if you want to skip parts of the process read through the install reference. 

To install Ghost locally use the following:


* Mac, Windows or Linux
* Node.js LTS versions (read more about versioning in troubleshooting)
* Ghost CLI
* A clean, empty directory on your machine

### Using nvm?

If you’re using nvm on your local machine, ensure you’re using the same environment when you install ghost-cli and when you run ghost commands. Read the troubleshooting guide for more information.

---

## Install Ghost CLI

The Ghost CLI is a fully loaded tool to help you get Ghost installed. With a local install, the CLI enables you to install a Ghost instance with a single command. 

`ghost-cli` is an npm module that can be installed with `npm` or `yarn` on a local machine. There is no requirement to use a non-root user for a local install. Installing on the root user removes the need to use `sudo`.

Use:
```
npm i -g ghost-cli@latest
```

`@latest` ensures the latest version of the  `ghost-cli` is installed.

Using yarn, adjust this to:  
```
yarn global add ghost-cli@latest
```

Ghost CLI requires no configuration or setup. Once you've got it installed as a global module, you'll have the full suite of `ghost` commands ready at your disposal. Use `ghost help` for a list of commands.

---

## Install Ghost

It’s time to Install Ghost.

Following the prerequisites, have a clean empty directory ready for Ghost to be installed to on your machine. 

In your terminal, `cd` into the empty directory and run the install command:
```
ghost install local
```

This command won’t ask for further information but may take a few minutes. `ghost-cli` outputs information so that you can see what is running in the background. 

✨ Once the install is finished you the CLI shows you where to visit your local site, where you can setup a new publication. This is usually on `http://localhost:2368` and `http://localhost:2368/ghost` to access Ghost admin.

### Install Information

Here are the key bits of info about `ghost install local`:


* Your publication is setup in `development` mode with less caching
* Logs only go to stdout
* The local install uses SQLite3 as the database, which helps with a seamless local install for theme development
* No additional setup steps run. There’s no attempt to configure `nginx`, or `systemd` or SSL setup (this is for production installs only)


### Starting and stopping Ghost

Ghost runs in a separate process and remains running until you stop it or restart your machine. 

Useful commands: 

* Use `ghost stop` to stop Ghost
* Use `ghost start` to start Ghost (cd into the directory first)
* `ghost log` views logs
* Run `ghost ls` from anywhere – lists all running Ghost blogs

---

## Developing Themes

When using Ghost CLI, your custom themes need to exist in the top-level directory: `/content/themes/`. They should not exist inside the `current` or `versions` folders.

Use the following steps for theme development, live reloading and theme validation. For more detailed guides on the building blocks of Handlebars.js Ghost themes, read the concepts guide. 


### Live reloading

Theme development requires the ability to restart Ghost to pick up changes that won’t be applied automatically. This is accomplished using nodemon.


### Install nodemon

Ensure Ghost is stopped inside your local directory run:
```
ghost stop
```

Install nodemon globally:

```
npm install -g nodemon@latest
```

Before starting Ghost with nodemon, consider the following: 


* Ensure your theme folder is ready in `content/themes`. 
* If you’re running the Casper (Ghost’s default theme), some additional tools to process the CSS and transform it to be fully browser compatible. Use the Casper readme to get started.
* If you base your theme on Casper, update the name in package.json.
* To use an empty folder for your theme, you'll need to create a `post.hbs`,  `index.hbs` and a valid `package.json` in that folder before starting Ghost. These are the minimum requirements for a valid theme.

Start Ghost with nodemon using:
```
nodemon current/index.js --watch content/themes/[your-theme-name] --ext hbs,js,css
```

This starts Ghost, watching all hbs, js and css files inside of the [your-theme-name] folder. When you add new templates or make changes, Ghost restarts.


### Validating with GScan

GScan is a tool that validates Ghost themes for the latest versions of Ghost. 

Ghost automatically runs this tool when a theme is uploaded or activated. For development purposes, run these checks yourself by globally installing the `gscan` npm package:
```
npm install -g gscan
```

Once this is installed you can run `gscan <file path>` anywhere to run the checks against a folder on your computer, for example: 
```
gscan /path/to/ghost/content/themes/casper
```

To run GScan on a zip file, pass the `-z` flag
```
gscan -z /path/to/downloads/theme.zip
```

GScan can also be accessed at [gscan.ghost.org](https://gscan.ghost.org/), where you can sign up for the latest updates as a Ghost theme developer. 

## Whats next 👉

To summarise, in this section you installed the Ghost CLI and installed Ghost locally — congrats! You can now put Ghost through it’s paces and see what it’s all about, or jump right into developing a custom Ghost theme. 

Remember, local installs are not suitable for production. If you decide to deploy to production, [follow this guide](https://docs.ghost.org/install/ubuntu/).

---

## Troubleshooting

Find solutions to common issues when installing Ghost locally. If you can’t find a solution using this guide, plenty more solutions can be found in the docs by using the search function at the top of the page.


#### Supported Node versions

Ghost supports Node versions 8.9+ and 6.9+ only. The recommended version of Node is Node v8 LTS. 

| Version                        | Support Level |
| ------------------------------ | ------------- |
| <6.9                           | Unsupported   |
| >=6.9 <7.* (Node v6 boron LTS) | Supported     |
| 7.*                            | Unsupported   |
| >=8.0 <8.9                     | Unsupported   |
| >=8.9 (Node v8 carbon LTS)     | Recommended   |
| 9.*                            | Unsupported   |
| 10.*                           | Unsupported   |


We use the recommended version of Node in production on Ghost(Pro) which means it’s heavily tested and issues are actively fixed by the Ghost core team. Running Ghost on the latest version of node is not guaranteed to work, and we’re unable to offer support for any issues. Ghost is a small team so we keep node versioning to a minimum to give us time to build new features 🏃‍♀️

Compatible versions of Node.js can be downloaded from the Node.js releases page. It’s also possible to install multiple node versions using nave or nvm.


#### Using nvm

If you run into problems during a local install, it could be due to your installation of nvm (Node Version Manager).

**Ensure nvm is installed correctly**

☑️ Ensure that nvm is not installed in the root folder `/root/.nvm`. If nvm is installed in the root folder, uninstall nvm, and reinstall it using a non-root user. 


☑️ Set your nvm default version to the one you will use for Ghost before installing `ghost-cli`. If your default is different, you should switch to the correct version each time you start a new session and run any `ghost` commands.


**Ensure `ghost-cli` is installed in the correct environment**

On a machine with nvm configured correctly, you should see:
```
which ghost -> /Users/[username]/.nvm/versions/node/[node version]/bin/ghost
npm root -g -> /Users/[username]/.nvm/versions/node/[node version]/lib/node_modules
```

If these paths aren’t in the same `[node version]`, it means you've installed `ghost-cli` in a different environment than the active node environment.  `ghost-cli` needs to be installed and run in the same environment. 

To resolve this choose one of the following:

1. Run `npm install ghost-cli -g` in the current environment to get the right sqlite3 node module into the environment and go through `ghost setup` process again.

2. If you remember which nvm node environment you've installed `ghost-cli` under, run `nvm use <node version>`.

