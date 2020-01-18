<template>
  <div :class="{ preview: preview }">
    <time :datetime="meta.date" class="article_time">{{
      meta.date || 'timeless'
    }}</time>
    <template v-if="preview">
      <!-- <div class="author" v-if="meta.author">by {{ meta.author[0]}}</div> -->
      <img class="thumb" :src="meta.image" />
    </template>
    <h1 class="text-5xl font-sans font-thin">{{ meta.title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    meta: {
      default: 'Please specify a title'
    },
    preview: {
      default: false
    }
  }
}
</script>

<style scoped>
.preview {
  /* max-width: 750px; */
  /* margin: 0 auto; */
  h1 {
    margin-bottom: 0;
    padding-bottom: 0;
  }

  p {
    margin-top: 0;
    padding-top: 0;
  }

  .thumb {
    max-width: 650px;
    width: 90%;
    height: auto;
    padding-bottom: 10px;
  }
}

time.article_time {
  text-transform: uppercase;
  display: block;
  margin-top: 0px;
  margin-bottom: 5px;
  padding-bottom: 0;
  opacity: 0.3;
  font-weight: 700;
  font-size: 16px;
  color: #1d1d1d;
  transition-property: all;
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0.165, 0.63, 0.14, 0.82);
  /* padding-left: 15px; */
}

.author {
  text-transform: uppercase;
  opacity: 0.3;
  font-weight: 700;
  font-size: 14px;
  color: #1d1d1d;
  padding: 15px 0;
}
</style>
