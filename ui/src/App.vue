<template>
  <div class="h-full flex items-center flex-col bg-gradient-to-br from-pink-600 to-yellow-500">
      <div class="my-14">
          <AddArticle />
          <Card />
      </div>
  </div>
</template>

<script>
import AddArticle from './components/view/AddArticle.vue'
import Card from './components/view/Card.vue'
//import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js'
//const swiper = new Swiper(...)
export default {
  name: 'App',
  components: {
    AddArticle,
    Card
  }
}
</script>

<style>

</style>
