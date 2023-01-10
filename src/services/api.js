import axios from './axios'
export const getCategories = () => {
    return axios.get(`/products/categories`)
}
export const getProducts = ({ limit = 12 }) => {
    return axios.get(`/products?limit=${limit}&skip=5`)
}

export const getProduct = (id) => {
    return axios.get(`/products/${id}`)
}

export const getComments = (id) => {
    return axios.get(`/comments/post/${id}`)
}