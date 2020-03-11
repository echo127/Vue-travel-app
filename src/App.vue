<template>
  <div id="app">
    <TheNavigation />
    <router-view :key="this.$route.params.slug" />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TheNavigation from "@/components/TheNavigation.vue";

@Component({
  components: {
    TheNavigation
  }
})
export default class App extends Vue {}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
