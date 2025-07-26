<template>
    <div class="home">
        <iframe src="https://html5.gamemonetize.co/6psthwbt96i8afnwmsovc95508t2pt27/" width="960" height="600" scrolling="none" frameborder="0"></iframe>
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
