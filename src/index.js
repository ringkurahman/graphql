import { GraphQLServer } from 'graphql-yoga'


const server = new GraphQLServer({
    typeDefs: `
        type Query {
            agent: User
            agents: [User]
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
            agent() {
                return {
                    id: 1,
                    name: "Ringku Rahman",
                    age: 36,
                    married: true,
                    average: 62.5
                } 
            },
            agents() {
                return [
                    {
                        id: 1,
                        name: "Ringku Rahman",
                        age: 36,
                        married: true,
                        average: 62.5
                    },
                    {
                        id: 2,
                        name: "Raiyaan Rahman",
                        age: 30,
                        married: true,
                        average: 58.5
                    },
                ]
            }
        }
    }
})

server.start(() => {
    console.log('Woo Woo Woo')
})