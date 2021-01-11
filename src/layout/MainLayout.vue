<template>
  <div class="wrapper">
    <info-weather :result="result" />
    <form-weather @get-weather="showWeather" />
  </div>
</template>

<script>
// api
import { getMyCity, getWeather } from '@/api/weather'

// components
import InfoWeather from "@/components/InfoWeather"
import FormWeather from "@/components/FormWeather"

export default {
  name: "MainLayout",
  data: () => ({
    city: '',
    result: {},
  }),
  components: {
    InfoWeather,
    FormWeather
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
          this.showWeather(this.city)
        })
        .catch(e => {
          console.error(e)
        })
    },
    showWeather(city) {
      getWeather(city)
        .then(res => {
          this.result = res.data

          new Notification(`Ваш запрос по городу ${city}`).show()
        })
        .catch(e => {
          console.error(e)
        })
    }
  }
}
</script>