<template>
  <div class="list-view">
    <transition-group tag="ul" class="container" name="flip-list">
      <li v-for="img in showImages" :key="img.key" class="list-item">
        <figure class="img-place">
          <img :src="img.url + img.key" alt="fake img">
        </figure>
      </li>
    </transition-group>
    <nav>
      <input type="button" value="<" @click="change(-1)">
      <input type="button" value=">" @click="change(1)">
    </nav>
  </div>
</template>

<script>
export default {
  name: 'list-view',
  data () {
    return {
      show: 0,
      imgs: [
        {
          url: 'http://fakeimg.pl/440x300/282828/EAE0D0/?text=',
          key: 1
        },
        {
          url: 'http://fakeimg.pl/440x300/282828/EAE0D0/?text=',
          key: 2
        },
        {
          url: 'http://fakeimg.pl/440x300/282828/EAE0D0/?text=',
          key: 3
        },
        {
          url: 'http://fakeimg.pl/440x300/282828/EAE0D0/?text=',
          key: 4
        },
        {
          url: 'http://fakeimg.pl/440x300/282828/EAE0D0/?text=',
          key: 5
        }
      ]
    }
  },
  methods: {
    change (key) {
      const value = this.show + key
      const limit = this.allImages.length - 1
      this.show = value < 0 ? limit : value > limit ? 0 : value
    }
  },
  computed: {
    allImages () {
      const arr = []
      const total = this.imgs.length
      let count
      if (total > 0) {
        while (arr.length < 5 + 4) {
          count = Math.floor(arr.length / total)
          this.imgs.forEach(img => {
            arr.push({
              url: img.url,
              key: count + '-' + img.key
            })
          })
        }
      }
      return arr
    },
    showImages () {
      const start = this.show - 4
      return this.allImages.slice(start).concat(this.allImages.slice(0, start))
    }
  }
}
</script>

<style lang="scss" scoped>
.flip-list-move {
  transition: transform 0.2s;
}
.list-view{
  overflow: hidden;
  width: 100%;
  .container{
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    margin-left: 20%;
    .list-item{
      width: 25%;
      margin: 0 2%;
      flex-shrink: 0;
      .img-place{
        width: 100%;
        img{
          vertical-align: middle;
          width: 100%;
        }
      }
      &:first-child{
        visibility: hidden;
        z-index: -1;
      }
      &:last-child{
        visibility: hidden;
        z-index: -1;
      }
    }
  }
}
</style>
