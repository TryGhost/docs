/**
 * Demo Generator
 *
 * This file generates all examples in this folder. Rerun to re-generate with latest output from demo.ghost.io
 * Requires dev dependencies. Is currently independent of gatsby build.
 *
 * Usage:
 *  node generator.js
 *
 */

const fs = require('fs').promises;
const path = require('path');

const GhostContentAPI = require('@tryghost/content-api');
const api = new GhostContentAPI({
    url: 'https://demo.ghost.io',
    key: '22444f78447824223cefc48062',
    version: 'v2'
  });


const requests = [];

function writeFile(name, content) {
    return fs.writeFile(path.join(__dirname, name), JSON.stringify(content, null, 2));
}

// At the moment our API clients reduce the response, need to re-wrap them
function writeFileFromResponse(res, type, shortName) {
    let wrapped = { [type]: [res] };

    return writeFile(`${shortName || type}.json`, wrapped);
}

function handleError(typeString, err) {
    if (err.response && err.response.status === 404) {
        console.error(`Unable to fetch ${typeString} - Resource Not Found (404)`);
    } else {
        console.error(`Unable to fetch ${typeString} - Unknown error`, err);
    }
}

// Generate post example
requests.push(api.posts
    .read({ slug: 'welcome-short' })
    .then(res => {
        return writeFileFromResponse(res, 'posts')
    })
    .catch(err => handleError('Post "welcome-short"', err))
);

// Generate post example with tags and authors
requests.push(api.posts
    .read({ slug: 'welcome-short', include: 'tags,authors' })
    .then(res => writeFileFromResponse(res, 'posts', 'posts-tags-authors'))
    .catch(err => handleError('Post "welcome-short"', err))
);

// Generate tag example
requests.push(api.tags
    .read({ slug: 'getting-started' })
    .then(res => writeFileFromResponse(res, 'tags'))
    .catch(err => handleError('Tag "getting-started"', err))
);

// Generate author example
requests.push(api.authors
    .read({ slug: 'cameron' })
    .then(res => writeFileFromResponse(res, 'authors'))
    .catch(err => handleError('User "cameron"', err))
);

return Promise.all(requests);
