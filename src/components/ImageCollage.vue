<template>
  <div class="collage">
    <div
      v-for="image, i in images"
      :key="i"
      class="collage__image-wrap"
    >
      <img
        class="collage__image"
        :src="image.urls.regular"
        :alt="image.id"
      >
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ImageCollage',
  computed: mapGetters(['images'])
}
</script>
