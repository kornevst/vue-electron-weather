<template>
  <div class="info">
    <p class="info__icon">🌤</p>
    <h2 class="info__header">Погодное приложение</h2>
    <p class="info__description">Узнайте погоду в вашем городе</p>
    <ul v-if="result">
        <li>Местоположение: {{ result.name }}, {{ result.sys.country }}</li>
        <li>Температура: {{ result.main.temp }}</li>
        <li>Восход солнца: {{ getTimeInMillisecond(result.sys.sunrise) }}</li>
        <li>Заход солнца: {{ getTimeInMillisecond(result.sys.sunset) }}</li>
    </ul>
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
      let date = new Date();
      date.setTime(timeInHours);
      let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
      return time;
    }
  }
};
</script>

<style scoped lang="scss">
.info {
  display: flex;
  flex-direction: column;

  &__icon {
    font-size: 60px;
    line-height: 60px;
  }

  &__header {
    font-size: 40px;
  }

  &__description {
    font-size: 20px;
  }
}
</style>
