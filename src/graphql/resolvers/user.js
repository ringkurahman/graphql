import axios from 'axios'
const db = 'http://localhost:3000'



export const User = {
    posts: async (parent, args, context, info) => {
        const response = await axios.get(`${db}/posts?author=${parent.id}`)
        return response.data
    },
    pictures: async (parent, args, context, info) => {
        const response = await axios.get(`${db}/pictures?author=${parent.id}`)
        return response.data
    }
}