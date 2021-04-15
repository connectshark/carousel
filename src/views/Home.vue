<template>
  <div class="home">
    <ul>
      <li v-for="link in links" :key="link.key">
        <p class="link"><router-link :to="link.url">{{link.name}}</router-link></p>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      links: [
        {
          url: '/classic',
          name: 'classic',
          key: 1
        },
        {
          url: '/listView',
          name: 'listView',
          key: 2
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.link{
  font-size: 28px;
  line-height: 2;
  a{
    text-decoration: none;
  }
}
</style>
