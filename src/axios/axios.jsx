import axios from 'axios'

const userApi = axios.create({
    baseURL: 'http://localhost:8000/api'
})
const adminApi = axios.create({
    baseURL: 'http://localhost:8000/admin'
})

export async function createForm(credentials) {
    try {
        const { data } = await adminApi.post(`/create`, credentials, { withCredentials: true })
        return data
    } catch (error) {
        return { error: 'Form creation api error' }
    }
};

export async function getForm(credentials) {
    try {
        const { data } = await adminApi.get(`/get`, credentials, { withCredentials: true })
        return data
    } catch (error) {
        return { error: 'Cannot get the form' }
    }
};

export async function submitForm(credentials) {
    try {
        const { data } = await userApi.post(`/submit`, credentials, { withCredentials: true })

        return data
    } catch (error) {
        return { error: 'Form submission caught error' }
    }
};