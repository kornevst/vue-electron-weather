<template>
  <div class="header">
    <p class="header__icon">🌤</p>
    <h1 class="header__title">Погодное приложение</h1>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped lang="scss">
.header {
    margin: 10px;

  &__icon {
    font-size: 60px;
    line-height: 60px;
  }

  &__title {
    font-size: 40px;
  }
}
</style>
