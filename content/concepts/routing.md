---
title: "Dynamic Routing"
meta_title: "Dynamic Routing Configuration in Ghost - Core Concepts"
meta_description: "Configure your site in almost any way you want by mapping content and templates to URL patterns with Dynamic Routing. Read more 👉"
keywords:
    - routing
    - concepts
    - ghost
    - publishing
sidebar: "concepts"
---

Dynamic routing is a flexible configuration layer which allows you to control the structure of your site in almost any way you want by mapping content and templates to URL patterns.

## Overview
The Dynamic Routing configuration layer unlocks many custom publication options such as custom home pages and content collections.

This article walks you through the core concepts of Dynamic Routing with Ghost. At the end you’ll have an understanding of how it works. For more specific configuration guides, check out the [tutorials](/tutorials/).

### When to use dynamic routing

When building a custom publication using Ghost’s theme layer on the front end, you can utilise Dynamic Routing to configure your site in pretty much any way you want. If you're interested using a different front end on your Ghost publication such as a static site generator or a custom front end check out the [front end](/concepts/front-end/) documentation.

---

## Routing configurations

The routes configuration file is a YAML file, which is located in: `content/settings/routes.yaml`.

The `routes.yaml` file is divided into three sections: `routes`, `collections`, and `taxonomies`. The default file looks like this:

```yaml
routes:

collections:
  /:
    permalink: /{slug}/
    template:
      - index

taxonomies:
  tag: /tag/{slug}/
  author: /author/{slug}/
```

The rest of this article explains how `routes`, `collections` and `taxonomies` function, followed by how all of the available `YAML` properties can be used. 

> **Strict indentation**
> YAML files use whitespace indentation to denote structure - using tabs is invalid. Having mismatched indentation is the most common reason for a YAML file not being valid.

---

## Routes

A route is a single URL that is assigned a specific template and/or set of data. Routes allow you to create custom content and templates such as a home page, an about page or a custom RSS feed.

Routes are configured as follows:

```yaml
routes:
  /custom-slug/: # index URL
    controller:   # type of route, 'channel' is the only supported value (optional)
    filter:       # a filter string (optional)
    data:         # a data object (optional)
    rss:          # true/false (optional, default: true)
    content_type: # content type, eg 'rss' for RSS (optional, default: html)
  ```


For example, to set a custom home page on `/` as well as about pages at `about/careers` and `about/team`, you'd use routes to define the URL routing. 
```yaml
routes:
  /: home
  /about/careers/: about-careers
  /about/team/: about-team
  ```

For more information about custom pages, check out the [custom pages](/tutorials/custom-home-page/) tutorial.

---

## Collections

Collections allow you to create groups of posts that match a filter, and alters the URL for all posts. Each collection has an index URL where all posts in that collection are listed and paginated and posts can only belong to one collection. 

Use a collection when you want to create distinct areas on your site, where posts belong explicitly to one group or another. If you're building a content hub that does not affect the URL of posts, check out the `controller: channel` [property](/concepts/routing/#controller-channels). 

### Content structure

It's possible to have a single collection that contains all posts - like the default `index` collection. Alternatively you can use multiple collections to split your site into distinct areas such as `/blog/` and `/podcast/`. Example structure:

```yaml
collections:
  /blog/: # index URL
    permalink: # post URL (required)
    rss:       # true/false (optional, default: true)
    filter:    # a filter string (optional)
    data:      # a data object (optional)
    template:  # template or list of templates to use (optional)
  ```

Ordering collections in the `routes.yaml` file is important. Posts that match the filters of multiple collections appears within the first collection listed with a match, and not in other collections. Read more about [creating custom collections](/tutorials/creating-content-collections/) in this tutorial.

---

## Taxonomies

Taxonomies are used to group posts based on a common relation. In Ghost, this is always the author of the post, or using tags.

Using taxonomies, Ghost will automatically generate URLs like `/tag/getting-started/` which will render a list of posts that have this tag. Posts can appear in multiple taxonomies and the URL of the post is not affected. 

Taxonomies are structured like this:
```yaml
taxonomies:
  type: /url/{slug}/
  ```

* The `type` is one of `tag` or `author`,
* the `/url/{slug}/` is the permalink for that taxonomy,
* and `{slug}` represents the URL value of the `tag` or the `author`.

In the Ghost theme layer, template files can be used to specify how a particular tag or author’s posts are rendered at the permalink. Taxonomies also allow you to amend the taxonomy permalink to something more appropriate for your publication. Read more about [custom taxonomies](/tutorials/change-url-for-tags-authors/) in this tutorial.

---

## Properties

Now you have a concept of how routes, collections and taxonomies work at a high level, it’s time to dig into the properties that you can utilise in the `routes.yaml` file for ultimate flexibility in configuring your Ghost publication.


### controller (channels)

The `controller` property has one supported value: `channel`. A channel is a paginated index of posts that match a specified filter. This allows you to create subsets and supersets by combining or dividing existing posts into content hubs. 

Unlike collections, creating a channel doesn't change a posts individual URL and posts can belong to multiple channels. For example, you can have a channel for all featured posts, and another for all featured posts with a particular tag or author. 

**A channel is similar to a search results page** - it's a filtered view of your site content along with pagination. Here's an example of some channels filtering by tag in the `routes.yaml` file: 

```yaml
routes:
  /rumours/mobile/:
    controller: channel
    filter: tag:[iphone,ipad]
  /rumours/desktop/:
    controller: channel
    filter: tag:[imac,mac-pro]
```

A `filter` must be used in combination with the `controller: channel` configuration to select a specific list of posts for display using the `{{posts}}` template variable. Read more about creating [channels and content hubs](/tutorials/building-a-content-hub/) in this tutorial. 

### filter

A filter is used to select a specific group of posts that belong to a collection or a channel.

The `filter` property follows the same syntax as the API’s filter parameter and is used to restrict which posts appear in a collection or channel.

Some examples for filtering posts are:

```yaml
filter: tag:x+tag:y # must have both "x" and "y" tags (+ = AND)
filter: tag:x,tag:y # can have either "x" or "y" tags (, = OR)
filter: tag:-x+tag:y # must have tag "y" but not tag "x" (- = NOT)
filter: tag:[x,y,z] # must have either "x", "y", or "z" tags ([] = IN)
filter: tag:-[x,y,z] # must not have any one of "x", "y", or "z" tags (-[] = NOT IN)
filter: author:steve+tag:x # must be written by "steve" and have tag "x"
```

### data

The `data` property is used to fetch resources using Ghost’s API for use in the template. This property can fetch arbitrary posts, pages, tags and authors to be made available in a handlebars template, avoiding the need to use `{{get}}` everywhere.

Another important use for the `data` property is to associate resources with particular URLs so that accessing a resource from a different URL automatically redirects, avoiding duplicate content and confusing site structures.

**Longform structure:**
```yaml
data:
  name: # variable name in the template - {{name}}
    resource:   # tags/users/posts (required)
    type:       # read/browse (required)
    limit:      # number of resources to fetch (optional)
    order:      # how to order the fetched resources (optional)
    include:    # relationships to include when fetching (optional)
    filter:     # API filter param to select specific resources (optional)
    status:     # draft/scheduled/published - posts specific (optional)
    visibility: # visible/hidden - tags specific (optional)
    slug:       # URL value of a single resource to select (optional)
    redirect:   # true/false (optional, default: true)
```

**Shorthand structure:**
```yaml
routes:
  /:
    data: resource-type.slug

collections:
  /:
    permalink: /games/{slug}/
    data:
        data-name: resource-type.slug
        data-name: resource-type.slug
```

Where `resource-type` is one of `tag`, `author`, `post`, or `page` - this sets the variable name in the template, e.g. `{{tag}}`, `{{post}}`. The `slug` part matches the URL field of the resource that you want to make available in the rendered template.

### rss

The `rss` property can be set to `true` or `false`. It defaults to `true` and if set to `false` the RSS feed is disabled for that collection.

When set to `true`, find the `rss` URLs linked inside the `<head>` element. For example:

* https://example.com/blog/rss/ default RSS generator (no template)

Custom `rss` feeds can be set with the `content_type` property and a template.

### content_type

Use this property this to specify a route returns something other than HTML. For example to create a custom RSS feed:
```yaml
routes:
  /podcast/rss/:
    template: podcast/rss
    content_type: rss
```

`content-type` can be a short version that matches a typical file extension for a mime-type, or it can be set to the full mime-type.

### index URL

The index URL property (or collection "key") determines where the archive pages for a collection appear.

For example, in the following example, the index URL is `/blog/`:
```yaml
collections:
  /blog/:
    permalink: /blog/{slug}/
```

The trailing slash is required, so `/blog/:` is valid, but `/blog:` is not. The index URL will also include archive URLs:

* https://example.com/blog/
* https://example.com/blog/page/2

Ghost will use the default template to render these routes. For example, `index.hbs` for `/blog:/` and `home.hbs` for `/:` - unless specific templates are set using the [template](http://docs.ghost.org/concepts/routing/#template/) property.


### permalink

The `permalink` property determines the URL for any post that is matched by a collection's filter.

Available permalink variables:
```
{id} - unique series of characters, e.g. "5982d807bcf38100194efd67"
{slug} - value set in the URL field in post settings menu
{year} - 4-digit representation of publish date, e.g. "2018"
{month} - 2-digit representation of publish date, e.g. "08"
{day} - 2-digit representation of publish date, e.g. "14"
{primary_tag} - slug of the first tag in the post's tags list
{primary_author} - slug of the first author in the post's author list
```

### template

The `template` property is optional but if specified can be a single value or an array. When not specified, the template defaults to the name of the collection or `home` for the `/` root collection. The specified template(s) are added to the beginning of the template lookup queue, with the first template in the queue that exists in theme being be used to render the collection.

Here's an example of how to use `template` to specify which template will be rendered:

```yaml
collections:
  /podcast/:
    permalink: /podcast/{slug}/
  /vlog/:
    permalink: /vlog/{slug}/
    template: archives/video
  /:
    permalink: /{slug}/
```

## Further reading

There are infinite ways to configure a Ghost publication, but some of the most popular examples have been documented over at the [tutorials](/tutorials/) page.

Since Dynamic Routing is so flexible with endless configuration possibilities, errors can sometimes occur. Try searching this site or using the [FAQs](/faq/) if you encounter any issues configuring your publication.
