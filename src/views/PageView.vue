<template>
  <div>{{ page_num }} ページ</div>
</template>

<script>
export default {
  name: 'PageView',
  props: ['page_num']
}
</script>
