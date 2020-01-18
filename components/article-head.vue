<template>
  <header class="post-full-header" v-if="post">
    <!-- <section v-if="post.primary_tag" class="post-full-tags">
      <nuxt-link
        :to="'/tag/' + post.primary_tag.slug"
        class="pr-3"
        :key="post.primary_tag.name"
      >{{ post.primary_tag.name }}</nuxt-link>
    </section>-->

    <h1 class="post-full-title">{{ post.title }}</h1>

    <p class="post-full-custom-excerpt">{{ post.custom_excerpt }}</p>

    <!-- <div class="post-full-byline">
      <section class="post-full-byline-content">
        <ul class="author-list">
          <li class="author-list-item">
            <div class="author-card">
              <img
                class="author-profile-image"
                :src="post.primary_author.profile_image"
                :alt="post.primary_author.name"
              />
              <div class="author-info">
                <h2>{{post.primary_author.name}}</h2>
                <p>
                  Read
                  <nuxt-link :to="'/author/' + post.primary_author.slug">more posts</nuxt-link>by this author.
                </p>
              </div>
            </div>

            <nuxt-link :to="'/author/' + post.primary_author.slug" class="author-avatar">
              <img
                class="author-profile-image"
                :src="post.primary_author.profile_image"
                :alt="post.primary_author.name"
              />
            </nuxt-link>
          </li>
        </ul>

        <section class="post-full-byline-meta">
          <h4 class="author-name">
            <nuxt-link :to="'/author/' + post.primary_author.slug">{{ post.primary_author.name }}</nuxt-link>
          </h4>
          <div class="byline-meta-content">
            <time
              class="byline-meta-date"
              datetime="post.published_at"
            >{{ new Date(post.published_at) | dateFormat('DD MMMM YYYY') }}</time>
            <span class="byline-reading-time">
              <span class="bull">•</span>
              {{ post.reading_time}} min read
            </span>
          </div>
        </section>
      </section>
    </div>-->
  </header>
</template>

<script>
export default {
	props: ['post']
}
</script>
