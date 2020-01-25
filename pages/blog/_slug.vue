<template>
  <div>
    <article class="post-full post" v-if="post">
      <article-head :post="post" />
      <figure class="post-full-image">
        <img :src="post.feature_image" alt="Post Image" />
      </figure>
      <section class="post-full-content">
        <div ref="postContent" class="post-content" v-html="post.html" />
      </section>

      <div class="py-1 md:py-10 mb-16 border border-black">
        <section class="post-content">
          <section v-if="post.tags" class="post-full-tags">
            <span class="p-2 md:p-3">Tags</span>
            <nuxt-link
              v-for="tag in post.tags"
              :to="'/tag/' + tag.slug"
              class="p-2 md:p-3"
              :key="tag.name"
            >{{ tag.name }}</nuxt-link>
          </section>
        </section>
      </div>
    </article>
  </div>
</template>

<script>
import { ghost } from '../../api/ghost'
import ArticleHead from '../../components/article-head'
import { mapGetters, mapActions } from 'vuex'

export default {
	layout: 'blog',
	name: 'PostPage',

	head() {
		return {
			title: this.post?.title || 'Page Title',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: this.post.custom_excerpt
				},
				{ hid: 'og:type', property: 'og:type', content: 'article' },
				{
					hid: 'og:title',
					property: 'og:title',
					content: this.post.title
				},
				{
					hid: 'og:description',
					property: 'og:description',
					content: this.post.custom_excerpt
				},
				{
					hid: 'og:image',
					property: 'og:image',
					content: this.post.og_image || this.post.feature_image
				},
				{
					hid: 'og:url',
					property: 'og:url',
					content: process.env.siteUrl + this.$route.path
				},
				{
					hid: 'twitter:title',
					name: 'twitter:title',
					content: this.post.title
				},
				{
					hid: 'twitter:description',
					name: 'twitter:description',
					content: this.post.custom_excerpt
				},
				{
					hid: 'twitter:image',
					name: 'twitter:image',
					content: this.post.twitter_image || this.post.feature_image
				},
				{
					hid: 'twitter:url',
					name: 'twitter:url',
					content: process.env.siteUrl + this.$route.path
				},
				{
					hid: 'twitter:creator',
					name: 'twitter:creator',
					content: this.post.primary_author.twitter
				},
				{
					hid: 'twitter:label1',
					name: 'twitter:label1',
					content: 'Written by'
				},
				{
					hid: 'twitter:data1',
					name: 'twitter:data1',
					content: this.post.primary_author.name
				}
			]
		}
	},
	async asyncData({ params, store, error, payload }) {
		try {
			const post = await ghost.posts.read({
				slug: params.slug,
				include: 'tags,authors'
			})

			// nxt/prv. Every post calls all posts everytime. very ineficient
			const posts = await ghost.posts.browse({
				limit: 'all',
				fields: 'slug,title'
			})

			return {
				post
			}
		} catch (e) {
			// error({ statusCode: 404, message: e.message })
			console.log(e)
		}
	},
	mounted() {
		// Activate dark mode if user OS already has the preference. Else respect user set pref.

		// ghetto way of overcoming iFrame height "challenge/annoyance"
		const cards = document.getElementsByClassName('kg-embed-card')
		for (const card of cards) {
			const iframe = card.firstElementChild
			const iframeHeight = iframe.getAttribute('height')
			if (iframeHeight) {
				iframe.style.height = iframeHeight + 'px'
			}
		}
	},
	components: {
		ArticleHead
	}
}
</script>
