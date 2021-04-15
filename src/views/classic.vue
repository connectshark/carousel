<template>
  <div class="home">
    <div class="carousel">
      <div class="container" :style="{ left: setLeft }">
        <figure class="carousel-item" v-for="(img, index) in imgLength" :key="index">
          <img :src="'http://fakeimg.pl/440x300/282828/EAE0D0/?text=' + img" alt="img">
        </figure>
      </div>
    </div>
    <div class="nav">
      <div class="target-btn-group">
        <input type="button" value="<" @click="change(-1)">
        <input type="button"
          v-for="(item, index) in imgLength" :key="index"
          class="target-btn"
          :value="item"
          @click.stop="show = item"
        >
        <input type="button" value=">" @click="change(1)">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      show: 1,
      imgLength: 6
    }
  },
  methods: {
    change (value) {
      const show = this.show
      const sum = show + value
      if (sum < 1) {
        this.show = this.imgLength
      } else if (sum > this.imgLength) {
        this.show = 1
      } else {
        this.show = sum
      }
    }
  },
  computed: {
    setLeft () {
      return ((this.show - 1) * -440) + 'px'
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel{
  width: 440px;
  height: 300px;
  overflow: hidden;
  margin: auto;
  .container{
    position: relative;
    width: calc(440px * 6);
    left: 0;
    transition: left .5s;
    .carousel-item{
      display: inline-block;
      img{
        vertical-align: middle;
      }
    }
  }
}
</style>
