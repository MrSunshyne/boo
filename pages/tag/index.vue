<template>
  <div class="container mx-auto">
    <h1 class="text-2xl font-bold py-2 text-center md:text-left mb-3">
      All tags
    </h1>

    <div v-if="$fetchState.pending">Loading tags</div>
    <div class="tags-wrapper" v-else>
      <nuxt-link :to="'/tag/' + tag.slug" class="tags" v-for="tag in tags" :key="tag.name">{{
        tag.name
      }}</nuxt-link>
    </div>
  </div>
</template>

<style scoped>
.tags-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 30px;
}

.tags {
  @apply shadow p-8 text-center;
}
</style>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Tags',
  components: {},
  computed: {
    ...mapGetters({ ghost: 'getGhost' })
  },
  data() {
    return {
      tags: []
    }
  },
  async fetch() {
    const tags = await this.ghost.tags.browse()
    this.tags = tags
  },
  head() {
    return {
      title: 'Tags',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Tags'
        },
        { hid: 'og:type', property: 'og:type', content: 'page' },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Tags'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Tags'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: process.env.siteUrl + this.$route.path
        }
      ]
    }
  }
}
</script>
