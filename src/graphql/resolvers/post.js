import axios from 'axios'
const db = 'http://localhost:3000'


export const Post = {
    author: async (parent, args, context, info) => {
        try {
            const response = await axios.get(`${db}/users/${parent.author}`)
            return response.data
        } catch (err) {
            return null
        }
    },
    picture: async (parent, args, context, info) => {
        const response = await axios.get(`${db}/pictures/${parent.picture}`)
        return response.data
    }
}