<template>
  <div class="container mx-auto text-sm tracking-wide footer-wrapper">
    <div class="logo">boo</div>
    <div class="text-right">by Sandeep Ramgolam</div>
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

<style  scoped>
.footer-wrapper {
	display: grid;
	grid-template-columns: 100px 1fr;
	grid-gap: 100px;
	padding: 20px 0;
}

.logo {
}
.menu {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
	grid-gap: 20px;
}
</style>
