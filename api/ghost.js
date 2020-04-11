import GhostContentAPI from '@tryghost/content-api'

// Create API instance with site credentials
const ghost = new GhostContentAPI({
  url: 'https://demo.ghost.io',
  key: '22444f78447824223cefc48062',
  version: 'v3'
})

const postsPerPage = 7

const postIndexFields = [
  'id',
  'uuid',
  'title',
  'slug',
  'feature_image',
  'featured',
  'published_at',
  'custom_excerpt',
  'excerpt' // excerpt doesn't seem to work in field definition (bug?)
]

export { ghost, postsPerPage, postIndexFields }
