import { GraphQLServer } from 'graphql-yoga'
import axios from 'axios'


const server = new GraphQLServer({
    typeDefs: `
        type Query {
            agent: User!
            agents: [User!]!
            multiply( value:Int! ): Int
        }
        type User {
            id: ID!
            name: String!
            age: Int
            married: Boolean
            average: Float
        }
    `,
    resolvers: {
        Query: {
            agent: async () => {
                const response = await axios.get('http://localhost:3000/users/1')
                return response.data
            },
            agents: async () => {
                const response = await axios.get('http://localhost:3000/users')
                return response.data
            },
            multiply: async (parent, args, context, info) => {
               return args.value * 10
           } 
        }
    }
})

server.start(() => {
    console.log('Woo Woo Woo')
})