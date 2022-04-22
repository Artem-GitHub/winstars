<template>
  <div class="search">
    <input
      v-model="searchModel"
      class="search__input"
      type="text"
      name="search"
      placeholder="search by topic"
    >
  </div>
</template>

<script>
export default {
  name: 'BaseSearch',
  props: {
    search: {
      type: String,
      default: ''
    }
  },
  computed: {
    searchModel: {
      get () {
        return this.search
      },
      set (v) {
        this.$emit('input', v)
      }
    }
  }
}
</script>
