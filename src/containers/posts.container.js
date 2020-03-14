import { URL } from '../components/GLOBAL'
import axios from 'axios'

const token = sessionStorage.getItem('token')

export const getPosts = () => {
    return axios.get(`${URL}/posts`, {headers: {'Authorization': `Bearer ${token}`}})
}

export const setLike = (id) => {
    return axios.post(`${URL}/posts/like`, { post_id: id }, {headers: {'Authorization': `Bearer ${token}`}})
}
