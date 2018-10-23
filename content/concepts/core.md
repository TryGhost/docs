---
title: "Ghost Core API"
meta_title: "Ghost Core API - Concepts"
meta_description: "At it's heart Ghost is a RESTful JSON API. Find out how to work with the Ghost API to retrieve publication content with ease."
keywords:
    - concepts
    - ghost
    - publishing
    - API
sidebar: "concepts"
---

At its heart, Ghost is a RESTful JSON API — designed to create, manage and retrieve publication content with ease.

Ghost's API is split by function into two parts: Content and Admin. Each has its own authentication methods, structure and extensive tooling so that common publication usecases are solved with minimal effort.

Whether you want to publish content from your favourite desktop editor, build a custom interface for handling editorial workflow, share your most recent posts on your marketing site, or use Ghost as a full headless CMS, Ghost has the tools to support you.


## Content API

Ghost's public Content API is what delivers published content to the world and can be accessed in a read-only manner by any client to render in a website, app or other embedded media.

Access control is managed via an API key, and even the most complex filters are made simple with our SDK. The Content API is designed to be fully cachable, meaning you can fetch data as often as you like without limitation.


## Admin API

Managing content is done via Ghost's Admin API, which has both read and write access used to create and update content.

The Admin API provides secure role-based authentication so that you can publish from anywhere with confidence, either as a staff user via session authentication or via an integration with a third-party service.

When authenticated with the **admin** or **owner** role, the Admin API provides full control for creating, editing and deleting all data in your publication, giving you even more power and flexibility than the standard Ghost admin client.


## JavaScript SDK

Ghost core comes with an accompanying JavaScript SDK designed to remove pain around authentication and data access.

It provides tools for working with API data to accomplish common use cases such as returning a list of tags for a post, rendering meta data in the `<head>`, and outputting data with sensible fallbacks.

Leveraging FLOSS & npm, an ever-increasing amount of Ghost's JavaScript tooling has been made available via our SDK. If you're working in JavaScript, chances are you won't need to code anything more than wiring.


## Webhooks

Notify an external service when content has changed or been updated by calling a configured HTTP endpoint. This makes it a breeze to do things like trigger a rebuild in a static site generator, or notify Slack that something happened.

By combining Webhooks and the API it is possible to integrate into any aspect of your content lifecycle, to enable a wide range of content distribution and workflow automation use cases.


## Versioning

Each version of Ghost ships with three versions of the API: **active** (v2), **stable** (-) & **deprecated** (v0.1).

- **active** (v2) has the same major version as Ghost and receives new backwards compatible features as we release them.
- **stable** (new in Ghost 3.0) is one major version behind, and doesn't change.
- **deprecated** is two majors behind (currently our old v0.1 API), and scheduled for removal in the next major release.

Ghost major versions ship every 8-12 months, meaning code you write against our API today will be stable for a minimum of 2 years.
