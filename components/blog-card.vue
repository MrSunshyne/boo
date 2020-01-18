<template>
  <nuxt-link :to="'/blog/' + post.slug" class="rounded overflow-hidden shadow">
    <img class="w-full object-cover" :src="post.feature_image" :alt="post.title" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl">{{ post.title }}</div>
      <div
        class="text-xs uppercase pt-2 pb-4"
      >{{ new Date(post.published_at) | dateFormat('DD MMMM YYYY') }}</div>
      <p class="text-gray-500">{{ post.custom_excerpt }}</p>
    </div>
    <!--    <div class="px-6 py-4">-->
    <!--      <span-->
    <!--        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"-->
    <!--        >#photography</span-->
    <!--      >-->
    <!--      <span-->
    <!--        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"-->
    <!--        >#travel</span-->
    <!--      >-->
    <!--      <span-->
    <!--        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"-->
    <!--        >#winter</span-->
    <!--      >-->
    <!--    </div>-->
  </nuxt-link>
</template>

<script>
export default {
	props: ['post']
}
</script>
