<template>
  <div class="container" id="app">
    <BaseSearch v-model="search" />
    <ImageCollage />
  </div>
</template>

<script>
import BaseSearch from '@/components/BaseSearch'
import ImageCollage from '@/components/ImageCollage'
import { mapActions, mapMutations } from 'vuex'
export default {
  name: 'App',
  components: {
    BaseSearch,
    ImageCollage
  },
  data () {
    return {
      page: 1,
      search: '',
      ticking: false,
      loading: false
    }
  },
  watch: {
    search: {
      handler () {
        this.page = 1
        this.clearImages()
        this.getImages()
      }
    }
  },
  mounted () {
    this.getImages()
    window.addEventListener('scroll', this.throttle)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.throttle)
  },
  methods: {
    ...mapActions(['fetchImages']),
    ...mapMutations(['clearImages']),
    async getImages () {
      this.loading = true

      try {
        await this.fetchImages({
          page: this.page,
          query: this.search
        })
        this.page += 1
      } catch (error) {
        console.error(error)
      } finally {
        this.loading = false
      }
    },
    throttle () {
      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          this.scrolling()
          this.ticking = false
        })

        this.ticking = true
      }
    },
    scrolling () {
      if (!this.pageScrolledDown() || this.loading) return

      this.$nextTick(() => {
        this.getImages()
      })
    },
    pageScrolledDown () {
      return Math.ceil(window.pageYOffset) >= Math.floor(document.documentElement.scrollHeight - window.innerHeight)
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/style.scss';
</style>
