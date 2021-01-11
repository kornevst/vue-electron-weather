import axios from 'axios'
import config from '@/helpers/config'

const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
}

const service = axios.create({
    baseURL: `${config.openweatherURL}`,
    withCredentials: false,
    timeout: 10000,
    headers
})


// response interceptor
service.interceptors.response.use(
    res => {
        if (res.status >= 400) {
            console.log('Нет доступа к данной странице')
        } else {
            return res
        }
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)

export default service
