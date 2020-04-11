<template>
  <div class="container mx-auto items-center flex">
    <div class="md:flex">
      <div
        class="flex flex-col justify-center md:w-3/4 text-center md:text-right"
      >
        <!-- <h1 class="text-4xl">What's boo?</h1> -->
        <h2
          class="tracking-tight leading-tight font-serif text-gray-700 text-2xl md:text-5xl"
        >
          A free and open source theme for headless Ghost CMS
        </h2>
        <p class="text-sm md:text-2xl text-gray-600 mt-5">
          Built with NuxtJS & TailwindCSS
        </p>
        <div class="mt-5 mb-5 md:mb-0">
          <nuxt-link :to="{ path: '/blog' }" class="button"
            >View posts</nuxt-link
          >
        </div>
      </div>
      <div class="md:w-1/2">
        <!--        <img  src="/boo.svg" alt />-->
        <BooLogo class="w-32 sm:w-48 lg:w-64 mx-auto" />
      </div>
    </div>
  </div>
</template>

<script>
import BooLogo from '../components/BooLogo'
export default {
  components: {
    BooLogo
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

body {
  overflow-y: scroll;
}

.title {
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.links {
  padding-top: 15px;
}

.button {
  @apply shadow px-5 py-2 inline-block;
}
</style>
