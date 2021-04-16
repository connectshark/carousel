<template>
  <div class="list-view">
    <transition-group tag="ul" class="container" name="flip-list">
      <li v-for="img in settingImages" :key="img.key" class="list-item">
        <figure class="img-place">
          <img :src="img.url + img.key" alt="fake img">
        </figure>
      </li>
    </transition-group>
    <nav>
      <input type="button" value="<" @click="change(show += -1)">
      <input type="button" value=">" @click="change(show += 1)">
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
    change (value) {
      if (value > this.allImages.length - 1) {
        this.show = 0
      } else if (value < 0) {
        this.show = this.allImages.length - 1
      } else {
        this.show = value
      }
    }
  },
  computed: {
    allImages () {
      const arr = []
      let count = 0
      while (arr.length < 5 + 4) {
        this.imgs.forEach(img => {
          arr.push({
            url: img.url,
            key: count + '-' + img.key
          })
        })
        count++
      }
      return arr
    },
    settingImages () {
      const startIndex = this.show - 4
      return this.allImages.slice(startIndex).concat(this.allImages.slice(0, startIndex))
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
  .container{
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    margin-left: 22%;
    .list-item{
      margin: 0 10px;
      flex-shrink: 0;
      width: 25%;
      &:first-child, &:last-child{
        visibility: hidden;
      }
      .img-place{
        width: 100%;
        img{
          width: 100%;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>
