const { GraphQLString } = require(`gatsby/graphql`)

module.exports = ({ type, store, pathPrefix, getNode, getNodesByType, cache, reporter },
    pluginOptions
) => {
    const allGhostPosts = getNodesByType(`GhostPost`)
    // console.log(`​allGhostPosts`, allGhostPosts)
    console.log(`​pluginOptions`, pluginOptions)

    if (type.name === `GhostPost`) {
        return {
            newField: {
                type: GraphQLString,
                args: {
                    myArgument: {
                        type: GraphQLString,
                    },
                },
                resolve: (source, fieldArgs) => `Id of this node is ${source.id}.
                  Field was called with argument: ${fieldArgs.myArgument}`,
            },
        }
    }

    // by default return empty object
    return {}
}
