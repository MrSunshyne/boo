<template>
  <div class="container mx-auto text-sm py-5 tracking-wide footer-wrapper">
    <a
      href="https://github.com/MrSunshyne/boo"
      class="md:text-right underline text-xs uppercase tracking-widest"
    >Star on Github</a>
    <!-- <ul class="menu">
      <li>
        <nuxt-link :to="{path: '/'}">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{path: '/blog'}">Blogs</nuxt-link>
      </li>
    </ul>-->
  </div>
</template>

<style scoped>
.footer-wrapper {
	@apply text-center;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr 1fr;
}

@sm {
	.footer-wrapper {
		grid-template-columns: 100px 1fr;
		grid-template-rows: 1fr;
		grid-gap: 100px;
		padding: 20px 0;
	}
}

.logo {
}
.menu {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
	grid-gap: 20px;
}
</style>
