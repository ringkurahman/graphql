import { GraphQLServer } from 'graphql-yoga'
import axios from 'axios'


const server = new GraphQLServer({
    typeDefs: `
        type Query {
            agent(id:ID!): User!
            agents: [User!]!
            cars: [String]
            msg(values:[String!]!):String
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
            agent: async (parent, args, context, info) => {
                const response = await axios.get(`http://localhost:3000/users/${args.id}`)
                return response.data
            },
            agents: async () => {
                const response = await axios.get('http://localhost:3000/users')
                return response.data
            },
            cars: async () => {
                return ['Ford', 'Mazda', 'Toyota', 'BMW']
            },
            msg: async (parent, args, context, info) => {
                if (args.values.length === 0) {
                    return `Sorry no values`
                }
                return `Hello ${args.values[0]} ${args.values[1]}`
            }
        }
    }
})

server.start(() => {
    console.log('Woo Woo Woo')
})