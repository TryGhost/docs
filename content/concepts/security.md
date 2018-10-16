---
title: "Ghost Security"
sidebar: "concepts"
---

Ghost is committed to developing secure, reliable products utilising all modern security best practices and processes.

The Ghost security team is made up of full time staff employed by the Ghost Foundation as well as volunteer open source contributors and security experts. We do both consultation and penetration testing of our software and  infrastructure with external security researchers and agencies.

We take security very seriously at Ghost and welcome any peer review of our completely [open source codebase](https://github.com/tryghost/ghost) to help ensure that it remains completely secure.


## Security Features

### SSL

Letsencrypt integration, non-support of SSL in 2019

### Password Hashing

bcrypt

### XSS Prevention

Embeds not available in trusted environment (Editor)

### CSRF

- Tokens on HTTP requests? When? For what?
- What about API calls?
- Any considations for caching?

### DDoS

TLDR use Caching/HAProxy


## Security Risks

### Privelige Escalation

Install admin / frontend on different domains

### Server Hardening

Ensure proper user permissions, or just use Ghost-CLI


## Privacy

Ghost as an organisation is profitable, wholly independent, and only makes revenue directly from its customers. It has zero business interests of any kind predicated on selling private user data to third parties.

In addition the Ghost software itself contains [a plainly written summary](https://github.com/TryGhost/Ghost/blob/master/PRIVACY.md) of every privacy-affecting feature within Ghost, along with detailed configuration options allowing any and all of them to be disabled at will.

We take user privacy extremely seriously.
