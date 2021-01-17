import axios from 'axios'
const db = 'http://localhost:3000'



export const Mutation = {
    createAgent: async (parent, args, context, info) => {
        const response = await axios.post(`${db}/users`, {
            name: args.name,
            age: args.age,
            married: args.married,
            average: 0
        })
        return response.data
    },
    createPost: async (parent, args, context, info) => {
        // Get token from user id (token = userId)
        // Go to store picture === get id of the picture
        const response = await axios.post(`${db}/posts`, {
            title: args.title,
            content: args.content,
            author: 1,  // Instead userId
            picture: 1  // Instead pictureId
        })
        return response.data
    },
    deletePost: async (parent, args, context, info) => {
        const response = await axios.delete(`${db}/posts/${args.id}`)
        if (Object.keys(response.data).length === 0) {
            return true
        }
        return false
    }
}