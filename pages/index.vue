<template>
    <div class="home">
        <iframe src="https://html5.gamedistribution.com/bb5a0186b1df40a6a0ae0c2f40b219d9/?gd_sdk_referrer_url=https://gamedistribution.com/games/color-wavee" width="750" height="1334" scrolling="none" frameborder="0"></iframe>
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
