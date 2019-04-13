const graphql = require('graphql') 

const { GraphQLObjectType, GraphQLString } = graphql

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLString },
        username: { type: GraphQLString },
        url: { type: GraphQLString },
        password: { type: GraphQLString },
    })
})

export default UserType