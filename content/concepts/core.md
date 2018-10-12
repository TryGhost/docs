---
title: "Core API"
sidebar: "concepts"
---

One sentence introduction

Expanded introduction explaining how Ghost's core API is designed to provide content-as-a-service and be similar to working with stripe or similar. Better than a headless CMS, deliver content anywhere. 

## Content API

Ghost's public Content API is what delivers published content to the world and can be accessed in a read-only manner by any client to render in a website, app or other embedded media.

[Basic details of caching, usage, authentication, limits]


## Admin API

Managing content is done via Ghost's Admin API, which has both read and write access used to create and update content. 

[Basic details of usage, authentication, limits]


## Preview API

The Preview API allows for unpublished content to be accessed independently of published content in orded to deliver data within the context of a front end and see what it will look like after publication.


## JavaScript SDK

Ghost core comes with an accompanying JavaScript SDK for working with API data to accomplish common use cases such as returning a list of tags for a post, rendering meta data in the `<head>`, and outputting data with sensible fallbacks.


## Webhooks

Notify an external service when content has changed or been updated by calling a configured HTTP endpoint. This makes it a breeze to do things like trigger a rebuild in a static site generator, or notify Slack that something happened.

[Any other details about webhooks]
