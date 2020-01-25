<template>
  <div class="flex my-4" v-if="ghostOptions">
    <input class="border p-2 pl-4 mr-4" type="text" placeholder="url" v-model="url" />
    <input class="border p-2 pl-4 mr-4" type="text" placeholder="key" v-model="key" />
    <button
      class="bg-gray-300 rounded px-3 uppercase text-sm text-gray-600 mr-4"
      @click="initGhost"
    >Update</button>
    <button
      class="bg-gray-300 rounded px-3 uppercase text-sm text-gray-600"
      @click="resetGhost"
    >Reset</button>
  </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex'

export default {
	data() {
		return {
			version: this.$store.state.ghostVersion
		}
	},
	computed: {
		url: {
			get() {
				return this.$store.state.ghostUrl
			},
			set(value) {
				this.$store.commit('setGhostUrl', value)
			}
		},
		key: {
			get() {
				return this.$store.state.ghostKey
			},
			set(value) {
				this.$store.commit('setGhostKey', value)
			}
		},
		...mapGetters({ ghost: 'getGhost', ghostOptions: 'getGhostOptions' })
	},
	methods: {
		...mapActions(['initGhost', 'resetGhost'])
	}
}
</script>