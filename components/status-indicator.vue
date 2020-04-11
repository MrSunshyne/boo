<template>
  <div class="indicator" :class="`bg-${color}-600 border-${color}-500`">

  </div>
</template>

<script>
  export default{
    props: ['color']
  }
</script>

<style>
  .indicator {
    width: 14px;
    height:14px;
    content: "";
    border-radius: 100%;
    border-width: 2px;
    line-height: 1em;
    margin-right:10px;

  }
</style>
