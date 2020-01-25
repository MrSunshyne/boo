<template>
  <section class="section">
    <div class="container mx-auto" v-if="currentAuthor">
      <h1
        class="text-2xl font-bold py-2 text-center md:text-left"
      >Articles written by #{{ currentAuthor.name }}</h1>

      <p v-if="currentAuthor.description" class="page-subtitle">{{ currentAuthor.description }}</p>

      <PostList
        v-if="indexPosts && indexPagination"
        :posts="indexPosts"
        :pagination="indexPagination"
        :index-base="'/author/' + $route.params.slug + '/'"
      />
    </div>
  </section>
</template>

<script>
import { ghost, postsPerPage, postIndexFields } from '../../api/ghost'
import PostList from '../../components/PostList'
import { mapGetters, mapActions } from 'vuex'

export default {
	name: 'TagIndex',
	components: {
		PostList
	},
	computed: {
		...mapGetters({ ghost: 'getGhost' }),
		siteSettings() {
			return this.$store.state.siteSettings
		}
	},
	head() {
		return {
			title: `Articles tagged as ${this.currentAuthor.name}`,
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
					content: `Articles tagged as ${this.currentAuthor.name}`
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
					content: process.env.siteUrl + this.$route.path
				},
				{
					hid: 'twitter:title',
					name: 'twitter:title',
					content: `Articles tagged as ${this.currentAuthor.name}`
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
	},
	created() {
		this.fetchData()
	},
	data() {
		return {
			currentAuthor: {
				name: 'loading',
				description: 'loading'
			},
			indexPosts: [],
			indexPagination: 0
		}
	},
	methods: {
		async fetchData() {
			let pageginationPageNumber = 1
			if (this.$route.params.pageNumber) {
				pageginationPageNumber = this.$route.params.pageNumber
			}
			let paginationFilter = ''

			this.currentAuthor = await this.ghost.authors.read({
				slug: this.$route.params.slug
			})

			this.indexPosts = await this.ghost.posts.browse({
				limit: postsPerPage,
				page: pageginationPageNumber,
				include: 'tags,authors',
				fields: postIndexFields,
				filter: 'author:' + this.$route.params.slug,
				pageNumber: pageginationPageNumber
			})

			this.indexPagination = this.indexPosts.meta.pagination
		}
	}
}
</script>
