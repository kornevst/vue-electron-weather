<template>
  <div class="info">
    <ul class="info__list" v-if="result">
        <li>Местоположение: {{ result.name }}, {{ result.sys.country }}</li>
        <li>Температура: {{ result.main.temp }}</li>
        <li>Восход солнца: {{ getTimeInMillisecond(result.sys.sunrise) }}</li>
        <li>Заход солнца: {{ getTimeInMillisecond(result.sys.sunset) }}</li>
    </ul>
    <p v-else class="info__description">Узнайте погоду в вашем городе</p>
  </div>
</template>

<script>
export default {
  name: "InfoWeather",
  props: {
    result: Object,
  },
  methods: {
    getTimeInMillisecond(timeInHours) {
      let date = new Date()
      date.setTime(timeInHours)
      let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
      return time
    }
  }
}
</script>

<style scoped lang="scss">
.info {
  display: flex;
  flex-direction: column;
  margin: 10px;

  &__list {
    list-style-type: none;
  }

  &__description {
    font-size: 20px;
  }

}
</style>
