<template>
  <div id="app">
    <TheNavigation />
    <router-view :key="$route.path" />
  </div>
</template>

<script lang="ts">
import TheNavigation from "@/components/TheNavigation.vue";
import { Component, Vue } from "vue-property-decorator";

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
