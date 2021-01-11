<template>
  <div class="wrapper">
    <Header />
    <input
      v-model="city"
      placeholder="Введите название города..."
      @keyup.enter="showWeather"
    />
    <info-weather :result="result" />
  </div>
</template>

<script>
// api
import { getMyCity, getWeather } from '@/api/weather'

// components
import Header from '@/components/Header'
import InfoWeather from '@/components/InfoWeather'

export default {
  name: "MainLayout",
  data: () => ({
    city: '',
    result: {},
  }),
  components: {
    Header,
    InfoWeather,
  },
  created() {
    this.getCity()
  },
  methods: {
    getCity() {
      getMyCity()
        .then(res => {
          console.log(res.data.city)
          this.city = res.data.city
          this.showWeather()
        })
        .catch(e => {
          console.error(e)
        })
    },
    showWeather() {
      getWeather(this.city)
        .then(res => {
          this.result = res.data

          new Notification(`🌤 Погода по городу ${this.city}`).show()
        })
        .catch(e => {
          console.error(e)
        })
    }
  }
}
</script>