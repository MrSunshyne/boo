<template>
  <div class="container flex justify-between mx-auto text-sm py-5 tracking-wide">
    <nuxt-link :to="{name: 'settings'}" class="md:text-right text-xs tracking-widest">
      <div class="text-gray-600">content source: {{ url }}</div>
    </nuxt-link>

    <ul class="menu flex justify-end">
      <li>
        <a
          href="https://github.com/MrSunshyne/boo"
          class="md:text-right underline text-xs uppercase tracking-widest pr-3"
        >Star on Github</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
	computed: {
		url: {
			get() {
				return this.$store.state.ghostUrl
			}
		}
	}
}
</script>

<style scoped>
.footer-wrapper {
	/* @apply text-center; */
	display: grid;
	/* grid-auto-columns: auto; */
	/* grid-template-rows: 1fr 1fr; */
}

@sm {
	.footer-wrapper {
		/* grid-template-columns: 100px 1fr; */
		/* grid-template-rows: 1fr; */
		/* grid-gap: 100px; */
		padding: 20px 0;
	}
}

.logo {
}
</style>
