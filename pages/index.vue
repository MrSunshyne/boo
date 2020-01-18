<template>
  <div class="container">
    <div>
      <h1 class="title">boo</h1>
      <h2 class="subtitle">A starter theme for headless Ghost CMS</h2>
    </div>
  </div>
</template>
<script>
import { ghost, postsPerPage, postIndexFields } from '../api/ghost'

import PostList from '../components/PostList'
export default {
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
	components: {
		PostList
	},
	methods: {}
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

.title {
	display: block;
	font-weight: 300;
	font-size: 100px;
	color: #35495e;
	letter-spacing: 1px;
}

.subtitle {
	font-weight: 300;
	font-size: 42px;
	color: #526488;
	word-spacing: 5px;
	padding-bottom: 15px;
}

.links {
	padding-top: 15px;
}
</style>
