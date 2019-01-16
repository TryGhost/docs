#!/usr/local/bin/node

/**
 * This is a script that configures our indexes
 *
 * Usage:
 *
 * NODE_ENV=production node utils/algolia-settings.js
 */

// Load config
require(`dotenv`).config({
    path: `.env.${process.env.NODE_ENV}`,
})

const algoliasearch = require(`algoliasearch`)
const client = algoliasearch(`6RCFK5TOI5`, process.env.ALGOLIA_ADMIN_KEY)

const REQUIRED_SETTINGS = [
    {
        distinct: true,
        attributeForDistinct: `slug`,
        customRanking: [`desc(customRanking.heading)`, `asc(customRanking.position)`],
        searchableAttributes: [`title`, `headings`, `html`, `url`, `tags.name`],
    },
]

const getIndexByName = name => client.initIndex(name)

const setSettingsForIndex = (name) => {
    const index = getIndexByName(name)

    index
        .setSettings(REQUIRED_SETTINGS[0])
        .then(() => index.getSettings())
        .then(settings => console.log(name, settings))
}

client
    .listIndexes()
    .then(({ items }) => {
        items.forEach(item => setSettingsForIndex(item.name))
    })
