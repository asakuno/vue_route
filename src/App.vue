<template>
  <div id="nav">
    <router-link to="/" active-class="current">Main</router-link> |
    <router-link to="/about" active-class="current">About</router-link> |
    <router-link to="/article/10" active-class="current">記事：No.10</router-link> |
    <router-link to="/article/108" active-class="current">記事：No.108</router-link> |
    <router-link to="/count" active-class="current">カウント</router-link>
  </div>
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

.current {
  color: red;
  font-weight: bold;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
