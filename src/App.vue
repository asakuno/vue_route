<template>
  <nav>
    <router-link to="/">Main</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/article/108">記事：No.108</router-link>
  </nav>
  <router-view/>
  <hr />
  <router-view name="sub" />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
