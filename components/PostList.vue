
<template>
  <div>
    <div class="blog-posts">
      <blog-card
        v-for="(post, index) in posts"
        :key="post.id"
        class="blog-box"
        :post="post"
        :style="'--delay:' + index + 's'"
      ></blog-card>
    </div>

    <div class="flex justify-center py-10" role="navigation">
      <div v-if="pagination.prev">
        <nuxt-link class="button" :to="prevLink">Prev</nuxt-link>
      </div>
      <div class="px-5 py-2">Page {{ pagination.page }} of {{ pagination.pages }}</div>
      <div v-if="pagination.next">
        <nuxt-link class="button" :to="nextLink">Next</nuxt-link>
      </div>
    </div>
  </div>
</template> 

<script>
import BlogCard from '../components/blog-card'

export default {
	components: {
		BlogCard
	},
	props: {
		posts: {
			type: Array,
			required: true
		},
		pagination: {
			type: Object,
			required: true
		},
		indexBase: {
			type: String,
			required: false,
			default: '/blog/'
		}
	},
	computed: {
		prevLink() {
			if (this.pagination.prev === 1) {
				return this.indexBase
			} else {
				return this.indexBase + 'page/' + this.pagination.prev
			}
		},
		nextLink() {
			return this.indexBase + 'page/' + this.pagination.next
		}
	}
}
</script>

<style scoped>
@media (screen and min-width: 640px) {
	.blog-posts {
		.blog-box:first-child {
			background: red;
			/* grid-column: 1 / 3;
			grid-row: 1 / 2; */
		}
	}
}

.blog-posts {
	display: grid;
	/* grid-auto-columns: 290px; */
	grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
	grid-gap: 30px;
	/* max-width: 80%; */
	margin: 0 auto;
	/* justify-content: center; */

	.blog-box {
		opacity: 0;
		transform: translateY(10px);

		animation: reveal 0.5s ease-out 1 forwards;
		--multiplier: 0.05;
		animation-delay: calc(var(--delay) * var(--multiplier));
	}
}

@screen sm {
	.blog-box:nth-child(1) {
		grid-column: 1 / 3;
		grid-row: 1 / 2;
	}
}

@keyframes reveal {
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

.button {
	@apply shadow px-4 py-2;
}
</style>
