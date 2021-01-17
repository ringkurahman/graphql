import axios from 'axios'
const db = 'http://localhost:3000'


export const Query = {
    agent: async (parent, args, context, info) => {
        const response = await axios.get(`${db}/users/${args.id}`)
        return response.data
    },
    agents: async (parent, args, context, info) => {

        const name = args.name != null ? `name=${args.name}` : ''
        const age = args.age != null ? `age=${args.age}` : ''
                
        const response = await axios.get(`${db}/users?${name}&${age}`)
        return response.data
    },
    posts: async (parent, args, context, info) => {
        const response = await axios.get(`${db}/posts`)
        return response.data
            },
    post: async (parent, args, context, info) => {
        const response = await axios.get(`${db}/posts/${args.id}`)
         return response.data
    },
    pictures: async (parent, args, context, info) => {
        const response = await axios.get(`${db}/pictures`)
        return response.data
    }
}