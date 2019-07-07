import axios from 'axios'

export const api = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT
})

export const setJwt = (token) => {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
}


