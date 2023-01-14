<template>
  <div>
    <div>記事コード: {{ aid }}</div>
    <span><router-link v-bind:to="`/article/${aid}/pages/1`">
            Page：1</router-link></span> |
        <span><router-link v-bind:to="`/article/${aid}/pages/2`">
            Page：2</router-link></span>
    <hr />
    <router-view />
  </div>
</template>

<script>
const timeGuard = function (to) {
  const data = {
    13: new Date(2021, 10, 30),
    108: new Date(2023, 10, 30)
  }

  const limit = data[to.params.aid] ? data[to.params.aid] : new Date(2999, 11, 31)
  const current = new Date()
  if (limit && limit.getTime() < current.getTime()) {
    window.alert('記事の公開期限が過ぎています。')
    return false
  }
}

export default {
  name: 'ArticleView',
  beforeRouteEnter: timeGuard,
  beforeRouteUpdate: timeGuard,
  props: ['aid']
}
</script>
