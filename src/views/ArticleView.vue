<template>
  <span>記事コード: {{  $route.params.aid }}</span>
</template>

<script>
export default {
  name: 'ArticleView',
  props: {
    aid: String
  }
  // props: {
  //   aid: Number
  // }
}
</script>
