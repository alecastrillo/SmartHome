const graphql = require('graphql') 

import User from "../models/user"
import UserType from './user-type.js'
import Room from "../models/room"
import RoomType from './room-type.js'
import Light from "../models/light"
import LightType from './light-type.js'

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema
} = graphql

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {
                return User.findById(args.id)
            }
        },
        room: {
            type: RoomType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {
                return Room.findById(args.id)
            }
        },
        light: {
            type: LightType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {
                return Light.findById(args.id)
            }
        },
    }
})

export default new GraphQLSchema({
    query: RootQuery
})