<template>
  <div id="app">
    <v-app>
      <ex-header></ex-header>
      <router-view/>
    </v-app>
  </div>
</template>

<script>
import exHeader from '@/components/ExHeader.vue';

export default {
  components: { exHeader },
};
</script>


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
