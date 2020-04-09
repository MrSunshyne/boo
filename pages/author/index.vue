<template>
  <div class="container mx-auto">
    <h1 class="text-2xl font-bold py-2 text-center md:text-left mb-3">
      All authors
    </h1>

    <div v-if="$fetchState.pending">Loading authors</div>

    <div class="authors-wrapper" v-else>
      <nuxt-link
        :to="'/author/' + author.slug"
        class="authors flex items-center flex-col"
        v-for="author in authors"
        :key="author.id"
      >
        <div class="image-container rounded-full overflow-hidden w-32 h-32">
          <img :src="author.profile_image" />
        </div>
        <div class="font-bold pt-3">{{ author.name }}</div>
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped>
.authors-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 30px;
}

.authors {
  @apply shadow p-8 text-center;
}
</style>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'authors',
  components: {},
  computed: {
    ...mapGetters({ ghost: 'getGhost' })
  },
  data() {
    return {
      authors: []
    }
  },
  async fetch() {
    const authors = await this.ghost.authors.browse()
    this.authors = authors
  },
  head() {
    return {
      title: 'Authors',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'authors'
        },
        { hid: 'og:type', property: 'og:type', content: 'page' },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'authors'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'authors'
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
