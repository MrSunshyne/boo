import GhostContentAPI from '@tryghost/content-api'
import { ghost, postsPerPage, postIndexFields } from '../api/ghost'

import utils from '../assets/mixins/utils'
import Vue from 'vue'

export const state = () => ({
  dark: true,
  postNav: [],
  indexPosts: [],
  indexPagination: [],
  currentPost: null,
  siteSettings: null,
  siteTags: null,
  siteAuthors: null,
  ghost: null,
  ghostUrl: 'https://demo.ghost.io',
  ghostKey: '22444f78447824223cefc48062',
  ghostVersion: 'v3',
  ghostPostPerPage: [
    'id',
    'uuid',
    'title',
    'slug',
    'feature_image',
    'featured',
    'published_at',
    'custom_excerpt',
    'excerpt' // excerpt doesn't seem to work in field definition (bug?)
  ],
  ghostPostsPerPage: 7,
  testParams: {
    tags: 0,
    posts: 0,
    authors:0,
    pages: 0
  }
})

export const mutations = {
  setDarkMode(state, payload) {
    // state.dark = payload
    Vue.set(state, 'dark', payload)
  },
  setPostNav(state, postNav) {
    state.postNav = postNav
  },
  setIndexPosts(state, indexPosts) {
    state.indexPosts = indexPosts
    state.indexPagination = indexPosts.meta.pagination
  },
  setCurrentPost(state, currentPost) {
    state.currentPost = currentPost
  },
  setSiteSettings(state, siteSettings) {
    state.siteSettings = siteSettings
  },
  setSiteTags(state, siteTags) {
    state.siteTags = siteTags
  },
  setSiteAuthors(state, siteAuthors) {
    state.siteAuthors = siteAuthors
  },
  setGhost(state, instance) {
    state.ghost = instance
  },
  setGhostUrl(state, value) {
    state.ghostUrl = value
  },
  setGhostKey(state, value) {
    state.ghostKey = value
  },
  setTestParams(state, value) {
    state.testParams = value
  }
}

export const getters = {
  getDarkMode(state) {
    return state.dark
  },
  getGhost(state) {
    return state.ghost
  },
  getGhostOptions(state) {
    return {
      url: state.ghostUrl,
      key: state.ghostKey,
      version: state.ghostVersion
    }
  },
  getTestParams(state) {
    return state.testParams;
  }
}

export const actions = {
  initGhost({ state, commit }) {
    const instance = new GhostContentAPI({
      url: state.ghostUrl,
      key: state.ghostKey,
      version: state.ghostVersion
    })
    // console.log(instance)
    commit('setGhost', instance)
  },
  resetGhost({ state, commit }) {
    const instance = new GhostContentAPI({
      url: 'https://demo.ghost.io',
      key: '22444f78447824223cefc48062',
      version: 'v3'
    })
    commit('setGhost', instance)
  },
  async testParams({state, commit}) {
    let posts = await state.ghost.posts
      .browse({
        include: 'tags,authors',
        fields: state.ghostPostIndexFields
      })

    let tags = await state.ghost.tags
      .browse()

    let authors = await state.ghost.authors
      .browse()


    let pages = await state.ghost.pages
      .browse()

    commit('setTestParams', {
      tags: tags.length,
      posts: posts.length,
      authors: authors.length,
      pages: pages.length
    })
  },
  setDarkMode({ commit }, payload) {
    const darkModeClass = 'mode-dark'

    let myHtml = document.querySelector('html')
    if (payload === 'true' || payload === true) {
      utils.addClass(myHtml, darkModeClass)
    } else {
      utils.removeClass(myHtml, darkModeClass)
    }

    commit('setDarkMode', payload)
    window.localStorage.setItem('dark', payload)

    // myHtml.classList.toggle('darkmode-active')
  },
  checkDarkMode({ state, commit, dispatch }) {
    let mql = window.matchMedia('(prefers-color-scheme: dark)')

    // Check OS Preference
    let mqTheme = null
    if (typeof mql !== undefined) {
      if (mql.matches) {
        mqTheme = true
      }
    }

    // Check User Preference in Localhost
    let storedTheme = window.localStorage.getItem('dark')

    if (storedTheme !== null) {
      dispatch('setDarkMode', storedTheme)
    } else {
      if (mqTheme !== null) {
        dispatch('setDarkMode', mqTheme)
      } else {
        dispatch('setDarkMode', state.dark)
      }
    }
  },
  async nuxtServerInit({ state, commit, dispatch }, { error }) {
    // get site settings, and whether or not posts have a previous or next post
    // use this for both static and universal apps

    try {
      const settings = await ghost.settings.browse()
      // const tags = await ghost.tags.browse({ limit: 'all' })
      // const authors = await ghost.authors.browse({ limit: 'all' })
      // const posts = await ghost.posts.browse({
      //   limit: 'all',
      //   fields: 'slug,title'
      // })
      //
      // // append next and previous slugs (for links in a post) to next and previous posts
      // const postsWithLinks = posts.map((post, index) => {
      //   const prevSlug = posts[index - 1] ? posts[index - 1].slug : null
      //   const nextSlug = posts[index + 1] ? posts[index + 1].slug : null
      //
      //   return {
      //     ...post,
      //     prevSlug,
      //     nextSlug
      //   }
      // })

      commit('setSiteSettings', settings)
      // commit('setSiteTags', tags)
      // commit('setSiteAuthors', authors)
      // commit('setPostNav', postsWithLinks)
    } catch (e) {
      // since this is server init, the error would be a server error
      error({ statusCode: 500, message: e.message })
      throw e
    }
  },
  // async getIndexPosts({ commit }, pagination) {
  //   // set desired fields for index lists (and tags/authors indices)
  //   const posts = await ghost.posts.browse({
  //     limit: postsPerPage,
  //     page: pagination.pageNumber,
  //     include: 'tags,authors',
  //     fields: postIndexFields,
  //     filter: pagination.filter
  //   })
  //   commit('setIndexPosts', posts)
  // }
}
