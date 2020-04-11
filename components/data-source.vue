<template>
  <div v-if="ghostOptions">
    <div class="mt-6 bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <h3 class="text-lg font-medium leading-6 text-gray-900">
            Content Source
          </h3>
          <p class="mt-1 text-sm leading-5 text-gray-500">
            All the content are pulled from this source
          </p>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="url"
                  class="block text-sm font-medium leading-5 text-gray-700"
                  >URL</label
                >
                <input
                  id="url"
                  class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  v-model="url"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="key"
                  class="block text-sm font-medium leading-5 text-gray-700"
                  >API Key</label
                >
                <input
                  id="key"
                  class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  v-model="key"
                />
              </div>
            </div>
          </form>

          <div class="mt-8 border-t border-gray-200 pt-5">
            <div class="flex justify-end">
              <span class="inline-flex rounded-md shadow-sm">
                <button
                  type="button"
                  class="py-2 px-4 border border-gray-300 rounded-md text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
                  @click="resetGhost"
                >
                  Reset
                </button>
              </span>
              <span class="ml-3 inline-flex rounded-md shadow-sm">
                <button
                  type="submit"
                  class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                  @click="initGhost"
                >
                  Save
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
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
