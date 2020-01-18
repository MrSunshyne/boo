
<template>
  <div
    class="main-menu container mx-auto font-bold md:flex justify-center md:justify-between items-center py-3 md:py-10"
  >
    <nuxt-link class="hidden text-center md:inline text-3xl" :to="{name: 'index'}">boo</nuxt-link>

    <ul class="flex mr-3">
      <li>
        <nuxt-link :to="{name: 'index'}">Home</nuxt-link>
        <nuxt-link :to="{name: 'blog'}">Blog</nuxt-link>
        <nuxt-link :to="{name: 'index'}">Pages</nuxt-link>
        <nuxt-link :to="{name: 'index'}">Tags</nuxt-link>
        <nuxt-link :to="{name: 'index'}">Authors</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
@screen sm {
	.main-menu {
		ul {
			li {
				padding: 10px;

				button {
					margin: 10px;
				}
				a {
					padding: 10px;
				}
			}
		}
	}
}
</style>