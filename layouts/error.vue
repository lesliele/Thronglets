<template>
  <div>
    <h2 v-if="error.statusCode == 404">404 - 页面不存在</h2>
    <h2 v-else>服务器错误</h2>
    <button>
      <nuxt-link to="/">HOME</nuxt-link>
    </button>
  </div>
</template>

<script>
  export default {
    props: ['error'],
  }
</script>