<template>
  <div id="nav">
    <ul>
      <li>
        <router-link to='/'>Home</router-link>
      </li>
    </ul>
    <ul
      class="destinations"
      v-for="destination in destinations"
      :key="destination.name"
    >
      <li>
        <router-link :to="{name: 'DestinationDetails', params:{slug: destination.slug}}">{{destination.name}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import store from "../store";
import Home from "../views/Home.vue";
import router from "../router/index";

@Component
export default class TheNavigation extends Vue {
  private destinations = store.destinations;
}
</script>
<style scoped>
#nav {
  padding: 30px;
}

ul {
  text-decoration: none;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 10px;
}

a.router-link-exact-active {
  color: #42b983;
}
.destinations {
  display: flex;
}
</style>