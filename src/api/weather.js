import request from '@/helpers/request'
import config from '@/helpers/config'

const endpoints = {
    openweathermap: `${config.openweatherURL}/data/2.5/weather`,
}

async function getMyCity() {
    return request({
        url: config.geolocationDB,
        method: 'get',
    })
}

async function getWeather(city) {
    return request({
        url: `${endpoints.openweathermap}?q=${city}&appid=${config.API_KEY}&units=metric`,
        method: 'get',
    })
}

export {
    getMyCity,
    getWeather,
}
