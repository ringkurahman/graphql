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
    },
    getAnimal:async(parent,args,context,info)=>{
        let response
        let random = Math.floor(Math.random()*6)+1

        if(random > 3){
            response = {
                animal:'DOG',
                name:'Captain',
                hair:'lots'
            }
        } else{
            response = {
                animal:'CAT',
                name:'Fluffy',
                paws:'sharp'
            }
        }
        return response
    }
}

export const AnimalUnion = {
    __resolveType(obj,context,info){
        if(obj.animal == 'DOG'){
            return 'Dog'
        }
        if(obj.animal == 'CAT'){
            return 'Cat'
        }
        return null
    }
}

