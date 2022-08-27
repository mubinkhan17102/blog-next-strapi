import axios from 'axios'

const api = axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
        Authorization: `Bearer ${process.env.BACKEND_API_KEY}`,
    },
})

export default api;

//Catagories

export const fetchCatagories = async ()=> api.get('/api/categories');