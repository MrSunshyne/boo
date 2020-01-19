<template>
  <section class="section">
    <div class="container mx-auto">
      <h1 class="text-2xl font-bold py-2 text-center md:text-left">#{{ currentTag.name }}</h1>

      <p v-if="currentTag.description" class="page-subtitle">{{ currentTag.description }}</p>

      <PostList
        v-if="indexPosts && indexPagination"
        :posts="indexPosts"
        :pagination="indexPagination"
        :index-base="'/tag/' + currentTag.slug + '/'"
      />
    </div>
  </section>
</template>

<script>
import { ghost, postsPerPage, postIndexFields } from '../../api/ghost'
import PostList from '../../components/PostList'

export default {
	name: 'TagIndex',
	components: {
		PostList
	},
	computed: {
		siteSettings() {
			return this.$store.state.siteSettings
		},
		currentTag() {
			return this.$store.state.siteTags.find(
				tag => tag.slug === this.$route.params.slug
			)
		}
	},
	head() {
		return {
			title: `Articles tagged as ${this.currentTag.name}`,
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: this.currentTag.description
				},
				{ hid: 'og:type', property: 'og:type', content: 'article' },
				{
					hid: 'og:title',
					property: 'og:title',
					content: `Articles tagged as ${this.currentTag.name}`
				},
				{
					hid: 'og:description',
					property: 'og:description',
					content: this.currentTag.description
				},
				{
					hid: 'og:image',
					property: 'og:image'
					// content: this.replaceWithAbsolute(this.currentTag.image)
				},
				{
					hid: 'og:url',
					property: 'og:url',
					content: process.env.siteUrl + this.$route.path
				},
				{
					hid: 'twitter:title',
					name: 'twitter:title',
					content: `Articles tagged as ${this.currentTag.name}`
				},
				{
					hid: 'twitter:description',
					name: 'twitter:description',
					content: this.currentTag.description
				},
				{
					hid: 'twitter:image',
					name: 'twitter:image'
					// content: this.replaceWithAbsolute(this.currentTag.image)
				},
				{
					hid: 'twitter:url',
					name: 'twitter:url',
					content: process.env.siteUrl + this.$route.path
				}
			]
		}
	},
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
			filter: 'tag:' + params.slug,
			pageNumber: pageginationPageNumber
		})

		return {
			indexPosts: posts,
			indexPagination: posts.meta.pagination
		}
	}
}
</script>
