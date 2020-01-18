<template>
  <div class="container">
    <h1 class="page-title">Articles</h1>

    <PostList
      v-if="indexPosts && indexPagination"
      :posts="indexPosts"
      :pagination="indexPagination"
    />
  </div>
</template>

<script>
import { ghost, postsPerPage, postIndexFields } from '../../api/ghost'

import PostList from '../../components/PostList'
export default {
	name: 'PostIndex',
	components: {
		PostList
	},
	data() {
		return {
			// generateRoutes: generateRoutes()
		}
	},
	computed: {},
	async asyncData({ params, store, error, payload }) {
		let pageginationPageNumber = 1
		if (params.pageNumber) {
			pageginationPageNumber = params.pageNumber
		}

		let paginationFilter = ''

		const posts = await ghost.posts.browse({
			limit: postsPerPage,
			page: pageginationPageNumber,
			include: 'tags,authors',
			fields: postIndexFields,
			filter: 'featured: true'
		})

		return {
			indexPosts: posts,
			indexPagination: posts.meta.pagination
		}
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
	}
}
</script>
