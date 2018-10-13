---
title: "Posts"
sidebar: "concepts"
---

Posts are the primary entry-type within Ghost, and generally represent the majority of stored data.

By default Ghost will return a reverse chronological feed of posts in the traditional format of a blog, however a great deal of customisation is available for this behaviour.

## Data

Posts house content and associated data.

```JSON
{
  "posts":[{
    "id": "59711abc12d3ab0bd61c3abc",
    "title": "Welcome to Ghost",
    "slug": "welcome-to-ghost",
    "mobiledoc": "{\"version\":\"0.3.1\",\"atoms\":[],\"cards\":[],\"markups\":[],\"sections\":[[1,\"p\",[[0,[],0,\"You're live, nice!\"]]]]}",,
    "html": "<p>You're live! Nice.</p>",
    "plaintext": "You're live! Nice.",
    "feature_image": "/content/images/2014/12/my-image.png",
    "featured": false,
    "page": false,
    "status": "published",
    "locale": null,
    "visibility": "public",
    "meta_title": null,
    "meta_description": null,
    "author_id": "59711abc78f1ab0bd61c3efg",
    "created_at": "2014-04-15T12:36:28.353Z",
    "created_by": "59711abc78f1ab0bd61c3efg",
    "updated_at": "2014-04-15T12:36:28.353Z",
    "updated_by": "59711abc78f1ab0bd61c3efg",
    "published_at": "2014-04-15T12:36:28.363Z",
    "published_by": "59711abc78f1ab0bd61c3efg",
    "custom_excerpt": null,
    "codeinjection_head": null,
    "codeinjection_foot": null,
    "og_image": null,
    "og_title": null,
    "og_description": null,
    "twitter_image": null,
    "twitter_title": null,
    "twitter_description": null
    "comment_id": "59711abc12d3ab0bd61c3abc"
  }
}
```
