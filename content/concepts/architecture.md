---
title: "Architecture"
sidebar: "concepts"
---

Ghost is structured as a modern, decoupled web application with a sensible service-based architecture.


1. **A robust core JSON API**
2. **A beautiful admin client app**
3. **A simple, powerful front-end theme layer**

These three areas work together to make every Ghost site function smoothly, but because they're decoupled there's plenty of room for customisation.


## How things fit together

[TODO: Diagram]

Physically, the Ghost codebase is structured in two main directories:

- `core` - Contains the core files which make up Ghost
- `content` - Contains the files which may be added or changed by the user such as themes and images


### Data & Storage

Additionally, the database and file storage layers can be easily customised to suit individual preferences and environments.

### Ghost-CLI

Orchestrating these different components is done via a comprehensive CLI and set of utilities to keep everything running and up to date.


## Philosophy

Ghost is architected to be familiar and easy to work with for teams who are already used to working with JavaScript based codebases, whilst still being accessible to a broad audience. It's neither the most bleeding-edge structure in the world, nor the most simple, but strives to be right balance between the two.
