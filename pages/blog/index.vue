<template>
  <div class="container mx-auto">
    <h1 class="text-2xl font-bold py-2 text-center md:text-left mb-3">
      All posts
    </h1>

    <div v-if="$fetchState.pending">Loading posts</div>

    <PostList
      v-else
      :posts="indexPosts"
      :pagination="indexPagination"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import PostList from '../../components/PostList'

export default {
  name: 'PostIndex',
  components: {
    PostList
  },
  computed: {
    ...mapGetters({ ghost: 'getGhost' })
  },
  data() {
    return {
      indexPosts: [],
      indexPagination: 0
    }
  },
  async fetch() {
    let paginationPageNumber = 1
    if (this.$route.params.pageNumber) {
      paginationPageNumber = this.$route.params.pageNumber
    }

    let paginationFilter = ''

    this.indexPosts = await this.ghost.posts
      .browse({
        limit: this.$store.state.ghostPostsPerPage,
        page: paginationPageNumber,
        include: 'tags,authors',
        fields: this.$store.state.ghostPostIndexFields
        // filter: 'featured: true'
      })

    this.indexPagination = this.indexPosts.meta.pagination
  },
  head() {
    return {
      title: 'Articles | Sandeep Ramgolam',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Blog articles by Sandeep Ramgolam'
        },
        { hid: 'og:type', property: 'og:type', content: 'page' },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Articles | Sandeep Ramgolam'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Articles written by Sandeep Ramgolam'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: process.env.siteUrl + this.$route.path
        }
      ]
    }
  },
  watch: {
    ghost(n, o) {
      // this.$fetch()
    }
  }
}
</script>
