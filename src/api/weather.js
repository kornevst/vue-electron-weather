import request from '@/helpers/request'
import config from '@/helpers/config'

const endpoints = {
    myCity: 'https://geolocation-db.com/json/',
    openweathermap: `${config.openweatherURL}/data/2.5/weather`,
}

async function getMyCity() {
    return request({
        url: endpoints.myCity,
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
