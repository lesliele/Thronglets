<template>
    <div class="home">
        <Banner/>
        <Intro/>
    </div>
</template>

<script>
import Banner from './banner.vue'
import Intro from './intro.vue'
import Reviews from './reviews.vue'

export default {
  name: 'Home',
  components: {
      Banner,
      Intro,
      Reviews
  },
}
</script>
