<template>
  <form class="form" v-on:submit.prevent="$emit('get-weather', searchText)">
    <input
      v-bind:value="searchText"
      v-on:input="searchText = $event.target.value"
      placeholder="Город"
    />
    <button>Получить погоду</button>
  </form>
</template>

<script>
export default {
  name: "FormWeather",
  methods: {
    getWeather() {
      this.$emit("get-weather");
    }
  }
};
</script>

<style scoped lang="scss">
.form {
  margin: 20px 0;
}
</style>
