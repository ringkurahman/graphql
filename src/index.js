import { GraphQLServer } from 'graphql-yoga'
import { Query } from './graphql/resolvers/query'
import { Post } from './graphql/resolvers/post'
import { User } from './graphql/resolvers/user'  
import { Picture } from './graphql/resolvers/picture' 
import { Mutation } from './graphql/resolvers/mutation'




const server = new GraphQLServer({
    typeDefs: './src/graphql/schema.graphql',
    resolvers: {
        Query,
        Mutation,
        Post,
        User,
        Picture
    }
})


server.start(() => {
    console.log('Woo Woo Woo')
})