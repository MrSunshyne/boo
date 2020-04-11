
<template>
  <div
    class="main-menu container mx-auto font-bold md:flex justify-center md:justify-between items-center py-3 md:py-10"
  >
    <nuxt-link class="text-center block md:text-left text-3xl" :to="{name: 'index'}">boo</nuxt-link>

    <ul class="flex justify-center py-5 md:py-0 md:mr-3">
      <li>
        <nuxt-link :to="{name: 'index'}">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{name: 'blog'}">Blog</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{name: 'tag'}">Tags</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{name: 'author'}">Authors</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.main-menu {
	/* @apply hidden; */
	ul {
		li {
			padding: 0 10px;
		}
	}
}

@screen sm {
	.main-menu {
		@apply flex;
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
