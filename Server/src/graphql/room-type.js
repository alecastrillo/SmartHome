const graphql = require('graphql') 

const { GraphQLObjectType, GraphQLString } = graphql

const RoomType = new GraphQLObjectType({
    name: 'Room',
    fields: () => ({
        id: { type: GraphQLString },
        roomName: { type: GraphQLString },
        url: { type: GraphQLString }
    })
})

export default RoomType