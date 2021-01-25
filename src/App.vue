<template>
  <div id="app">
    <menu-buttons />
    <main-layout />
  </div>
</template>

<script>
import MenuButtons from '@/components/header/MenuButtons'
import MainLayout from "@/layout/MainLayout"

export default {
  name: "app",
  components: {
    MenuButtons,
    MainLayout
  }
}
</script>