<template>
  <div id="app">
    <title-buttons />
    <main-layout />
  </div>
</template>

<script>
import TitleButtons from '@/components/TitleButtons'
import MainLayout from "@/layout/MainLayout"

export default {
  name: "app",
  components: {
    TitleButtons,
    MainLayout
  }
}
</script>