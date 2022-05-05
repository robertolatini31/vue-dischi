<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
import Header from '@/components/SiteHeader.vue'

export default {
  name: 'App',
  components: {
   Header
  }
}
</script>

<style lang="scss">
@import '~@/assets/scss/style.scss';
</style>
