<template>
    <div class="home">
        <iframe src="https://html5.gamedistribution.com/c411ed3c0ac44ec29d91df090431df75/?gd_sdk_referrer_url=https://thronglets.online/" width="640" height="360" scrolling="none" frameborder="0"></iframe>
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
