<template>
  <div>
    <div v-if="$fetchState.pending">Loading posts</div>
    <article class="post-full post"  v-else>
      <article-head :post="post" />
      <figure class="post-full-image">
        <img :src="post.feature_image" alt="Post Image" />
      </figure>
      <section class="post-full-content">
        <div ref="postContent" class="post-content content flow" v-html="post.html" />
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
              >{{ tag.name }}</nuxt-link
            >
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
          content: this.post?.custom_excerpt
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
  data() {
    return {
      post: null
    }
  },
  async fetch() {
    this.post = await ghost.posts.read({
      slug: this.$route.params.slug,
      include: 'tags,authors'
    })

    // nxt/prv. Every post calls all posts everytime. very ineficient
    const posts = await ghost.posts.browse({
      limit: 'all',
      fields: 'slug,title'
    })
  },
  watch: {
    '$route.query': '$fetch'
  },
  mounted() {
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

<style>
  .content {
    width: 70%;
    margin: 0 auto;
  }

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  article img {
    display: block;
    max-width: 100%;
  }

  .kg-width-wide {
    position: relative;
    width: 85vw;
    min-width: 100%;
    margin: auto calc(50% - 50vw);
    transform: translateX(calc(50vw - 50%));
  }

  .kg-width-wide img {
    max-width: 85vw;
  }

  .kg-width-full {
    position: relative;
    width: 100vw;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
  }

  .kg-width-full img {
    max-width: 100vw;
  }

  article figure {
    margin: 0;
  }

  article figcaption {
    text-align: center;
  }

  body {
    margin: 0;
  }

  header, footer {
    padding: 15px 25px;
    background-color: #000;
    color: #fff;
  }

  h1 {
    width: 100%;
  }


  /*  Bookmark */

  .kg-bookmark-card {
    width: 100%;
    position: relative;
  }

  .kg-bookmark-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    color: currentColor;
    font-family: inherit;
    text-decoration: none;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  .kg-bookmark-container:hover {
    text-decoration: none;
  }

  .kg-bookmark-content {
    flex-basis: 0;
    flex-grow: 999;
    padding: 20px;
    order: 1;
  }

  .kg-bookmark-title {
    font-weight: 600;
  }

  .kg-bookmark-metadata,
  .kg-bookmark-description {
    margin-top: .5em;
  }

  .kg-bookmark-metadata {
    align-items: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .kg-bookmark-description {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  .kg-bookmark-icon {
    display: inline-block;
    width: 1em;
    height: 1em;
    vertical-align: text-bottom;
    margin-right: .5em;
    margin-bottom: .05em;
  }

  .kg-bookmark-thumbnail {
    display: flex;
    flex-basis: 24rem;
    flex-grow: 1;
  }

  .kg-bookmark-thumbnail img {
    max-width: 100%;
    height: auto;
    vertical-align: bottom;
    object-fit: cover;
  }

  .kg-bookmark-author {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .kg-bookmark-publisher::before {
    content: "•";
    margin: 0 .5em;
  }
</style>
