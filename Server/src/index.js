'use strict';

import Hapi from 'hapi';
import mongoose, {
  mongo
} from 'mongoose';
import { graphqlHapi, graphiqlHapi } from 'apollo-server-hapi'

import createUserRoutes from './api/v1/user'
import createRoomRoutes from './api/v1/rooms'
import createLightRoutes from './api/v1/lights'

import schema from './graphql/schema'

const server = Hapi.server({
  host: '192.168.43.174',
  port: 8000
});

createUserRoutes(server);
createRoomRoutes(server);
createLightRoutes(server);


const start = async function () {

  try {
    console.log('connecting to database');
    mongoose.connect(
      'mongodb+srv://p1_SOA_usr:proyecto1soa@soa-p1-cluster-uwgwr.mongodb.net/test?retryWrites=true', {useNewUrlParser: true}
    )
    mongoose.connection.once( 'open', () => {
      console.log('connected to database');
    })

    await server.register({
      plugin: graphiqlHapi,
      options: {
        path: '/graphiql',
        graphiqlOptions: {
          endpointURL: '/graphql'
        },
        route: {
          cors: true
        }
      }
    })

    await server.register({
      plugin: graphqlHapi,
      options: {
        path: '/graphql',
        graphqlOptions: { schema },
        route: { cors: true }
      }
    })

    await server.start()
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log('Server running at:', server.info.uri);
};

start();
