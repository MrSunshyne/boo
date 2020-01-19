<template>
  <section class="section">
    <div class="container">
      <h1
        class="page-title text-xl md:text-2xl py-10 px-2"
      >Articles written by {{ currentAuthor.name }}</h1>

      <h2
        v-if="currentAuthor.description"
        class="subtitle has-text-centered"
      >{{ currentAuthor.description }}</h2>

      <PostList
        v-if="indexPosts && indexPagination"
        :posts="indexPosts"
        :pagination="indexPagination"
        :index-base="'/author/' + currentAuthor.slug + '/'"
      />
    </div>
  </section>
</template>

<script>
import { ghost, postsPerPage, postIndexFields } from '../../api/ghost'
import PostList from '../../components/PostList'

export default {
	name: 'AuthorIndex',
	components: {
		PostList
	},
	computed: {
		siteSettings() {
			return this.$store.state.siteSettings
		},
		currentAuthor() {
			return this.$store.state.siteAuthors.find(
				author => author.slug === this.$route.params.slug
			)
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
			filter: 'author:' + params.slug,
			pageNumber: pageginationPageNumber
		})

		return {
			indexPosts: posts,
			indexPagination: posts.meta.pagination
		}
	},
	head() {
		return {
			title: `Articles by ${this.currentAuthor.name}`,
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: this.currentAuthor.description
				},
				{ hid: 'og:type', property: 'og:type', content: 'article' },
				{
					hid: 'og:title',
					property: 'og:title',
					content: `Articles by ${this.currentAuthor.name}`
				},
				{
					hid: 'og:description',
					property: 'og:description',
					content: this.currentAuthor.description
				},
				{
					hid: 'og:image',
					property: 'og:image'
					// content: this.replaceWithAbsolute(this.currentAuthor.image)
				},
				{
					hid: 'og:url',
					property: 'og:url',
					content: this.replaceWithAbsolute(
						process.env.siteUrl + this.$route.path
					)
				},
				{
					hid: 'twitter:title',
					name: 'twitter:title',
					content: `Articles by ${this.currentAuthor.name}`
				},
				{
					hid: 'twitter:description',
					name: 'twitter:description',
					content: this.currentAuthor.description
				},
				{
					hid: 'twitter:image',
					name: 'twitter:image'
					// content: this.replaceWithAbsolute(this.currentAuthor.image)
				},
				{
					hid: 'twitter:url',
					name: 'twitter:url',
					content: process.env.siteUrl + this.$route.path
				}
			]
		}
	}
}
</script>
