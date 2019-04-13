const graphql = require('graphql') 

const { GraphQLObjectType, GraphQLString } = graphql

const LightType = new GraphQLObjectType({
    name: 'Light',
    fields: () => ({
        id: { type: GraphQLString },
        lightName: { type: GraphQLString },
        state: { type: GraphQLString },
        brightness: { type: GraphQLString },
        url: { type: GraphQLString }
    })
})

export default LightType