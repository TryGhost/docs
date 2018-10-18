---
title: "Ghost Security"
meta_title: "Core Concepts - Security"
meta_description: "Ghost is committed to developing secure, reliable products utilising all modern security best practices. Find out more!"
keywords:
    - concepts
    - ghost
    - publishing
    - security
sidebar: "concepts"
---

Ghost is committed to developing secure, reliable products utilising all modern security best practices and processes.

The Ghost security team is made up of full time staff employed by the Ghost Foundation as well as volunteer open source contributors and security experts. We do both consultation and penetration testing of our software and  infrastructure with external security researchers and agencies.

We take security very seriously at Ghost and welcome any peer review of our completely [open source codebase](https://github.com/tryghost/ghost) to help ensure that it remains completely secure.


## Security features

### SSL

Letsencrypt integration, non-support of SSL in 2019

### Password hashing

bcrypt

### XSS prevention

Embeds not available in trusted environment (Editor)

### CSRF

- Tokens on HTTP requests? When? For what?
- What about API calls?
- Any considations for caching?

### DDoS

TLDR use Caching/HAProxy


## Security risks

### Privelige escalation

Install admin / frontend on different domains

### Server hardening

Ensure proper user permissions, or just use Ghost-CLI


## Privacy

Ghost as an organisation is profitable, wholly independent, and only makes revenue directly from its customers. It has zero business interests of any kind predicated on selling private user data to third parties.

In addition the Ghost software itself contains [a plainly written summary](https://github.com/TryGhost/Ghost/blob/master/PRIVACY.md) of every privacy-affecting feature within Ghost, along with detailed configuration options allowing any and all of them to be disabled at will.

We take user privacy extremely seriously.

## WIP

- XSS Prevention: enable inbuilt handlebars HTML escape & ensure we return safe/escaped strings for any custom handlebars helpers
- Brute Force Protection: e.g. for user login (5 attempts per hour+ip), same for password reset
- Knex+Bookshelf (ORM + Query Builder) prevent SQL Injections, because Ghost itself does not build up raw SQL statements. Ghost never interpolate variables directly to SQL strings.
- Authentication standards followed by owasp (https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication)
    - including strong password validation
    - strong hashed passwords using salted hashed functions 
- base64 encode/decode tokens in url for invites + password reset (attacker needs the secret from the server to decode tokens from urls)
    - server makes use of token expiry AND one time usages of tokens only (!)
- NSP check (https://github.com/nodesecurity/nsp) to ensure we don't use 3rd party deps which are vulno
   - runs randomly time by time, but don't tell anybody
- strong data validation and serialisation to ensure that attackers can't just insert what they want to the db (data types etc)
- filesystem symlink protection for theme uploads
- Ghost-CLI
    - default ssl support
    - does not use root user
    - standardised read+write permissions on the OS for a web application (https://www.owasp.org/index.php/File_System)
