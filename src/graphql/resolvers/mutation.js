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
    updateAgent: async (parent, args, context, info) => {
        let data = {}
        if (args.name !== undefined) {
            data.name = args.name
        }
        if (args.age !== undefined) {
            data.age = args.age
        }
        if (args.married !== undefined) {
            data.married = args.married
        }
        if (args.average !== undefined) {
            data.average = args.average
        }

        const response = await axios.patch(`${db}/users/${args.id}`, data)
        return response.data
    },
    deleteAgent: async (parent, args, context, info) => {
        const response = await axios.delete(`${db}/users/${args.id}`)
        // Find all posts and delete them

        // Find all pictures and delete them
        if (Object.keys(response.data).length === 0) {
            return true
        }
        return false
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