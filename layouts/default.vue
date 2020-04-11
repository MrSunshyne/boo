<template>
  <div class="flex md:min-h-screen flex-col">
    <menu-section></menu-section>
    <nuxt class="md:flex-grow" />
    <footer-section />
  </div>
</template>

<script>
import MenuSection from '~/components/menu-section.vue'

import FooterSection from '~/components/footer-section.vue'

export default {
	components: {
		MenuSection,
		FooterSection
	},
	created() {
		this.$store.dispatch('initGhost')
	}
}
</script>

<style>
:root {
	/* color-scheme: light dark; */
}

.container {
	@apply px-4;
}

@screen sm {
  .container {
    @apply px-6;
  }
}

@screen lg {
	.container {
		@apply px-0;
	}
}
</style>
