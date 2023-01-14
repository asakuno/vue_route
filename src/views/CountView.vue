<template>
  <div>
    <input type="button" value="-" v-on:click="minus"/>
    {{ count }}
    <input type="button" value="+" v-on:click="plus" />
  </div>
</template>

<script>
export default {
  name: 'CountView',
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    minus () {
      this.$store.commit('minus')
    },
    plus () {
      this.$store.commit('plus')
    }
  }
}
</script>
