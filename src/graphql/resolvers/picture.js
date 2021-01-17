import axios from 'axios'
const db = 'http://localhost:3000'



export const Picture = {
    author: async (parent, args, context, info) => {
        const response = await axios.get(`${db}/users/${parent.author}`)
        return response.data
    },
    post: async (parent, args, context, info) => {
        const response = await axios.get(`${db}/posts/${parent.post}`)
        return response.data
    }
}