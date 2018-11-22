<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/how-it-works">How it works</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  text-align: center;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
  }
}
</style>
