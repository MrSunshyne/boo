<template>
  <div>
    <menu-section />
    <div class="post-template">
      <main id="site-main" class="site-main outer">
        <div class="inner">
          <nuxt />
        </div>
      </main>
    </div>
    <footer-section />
  </div>
</template>

<script>
import MenuSection from '../components/menu-section.vue'
import FooterSection from '../components/footer-section.vue'

export default {
	components: {
		MenuSection,
		FooterSection
	}
}
</script>

<style>
</style>
 