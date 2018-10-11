---
title: "Redirects"
meta_title: "Core Concepts - Redirects"
meta_description: "Redirects can be created and edited within a single, accessible file in Ghost. Read more about working with URL direction."
keywords:
    - redirects
    - concepts
    - ghost
    - publishing 
sidebar: "concepts"
---
Redirects can be created and edited within a single, accessible file.

## Accessing the redirects file

The redirects.json file is located in `content/data/redirects.json` and can also be downloaded and uploaded in the settings in Ghost admin.

## File structure

This file always starts with a `[` and ends with a `]`. A new ghost publication will have an empty redirect file containing `[]`. It can be edited in any source code editor.

Entries to the redirects file follow this structure: 
```
{
  "from": "/url/" ,
  "to":  "/url/",
  "permanent": true | false
}
```

* The from field you defines the incoming URL or pattern (regex)
* The to field defines where the incoming traffic should be redirected to, which can be a static URL, or a dynamic value using regex (example: "to": "/$1/").
* The permanent field can be defined with true for a permanent 301 redirect, or false for a temporary 302 redirect. 

Multiple entries are separated by `,` and the last entry does not have the `,`. Regular expressions can be used to implement redirect patterns. 

## Implementation

Upload your new `redirects.json` file in Ghost admin in the settings. This is the recommended method. 

To replace the JSON file on the server, ensure it exists in `content/data/redirects.json` and run ghost restart for your changes to take effect.

## When not to use `redirects.json` 

There are some instances where it is not recommended to use the `redirects.json` file: 

* Page rules for www or HTTP/HTTPS redirection should always be implemented with your DNS provider.
* Ghost automatically forces trailing slashes, so you do not need to write any page rules to accommodate for duplicate content caused by this.
* If you're trying to change the URL structure of your publication, the recommended way to do this is with dynamic routing and the `routes.yaml` file. (However, you may still need to redirect existing content using `redirects.json`).
