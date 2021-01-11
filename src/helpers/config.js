import Vue from 'vue'

const config = {
    openweatherURL: 'https://api.openweathermap.org',
    API_KEY: 'efac62f8f1224430f1db691d407df751',
    geolocationDB: 'https://geolocation-db.com/json/'
}

Vue.prototype.$config = config

export default config
