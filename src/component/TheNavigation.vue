<template>
  <div id="nav">
    <h1>Your Travel Destinations</h1>
    <ul class="links">
      <li>
        <router-link to="/">Home</router-link>
      </li>

      <li
        v-for="destination in destinations"
        :key="destination.name"
      >
        <router-link :to="{
            name: 'DestinationDetails',
            params: { slug: destination.slug }
          }">{{ destination.name }}</router-link>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import store from "../store";

@Component
export default class TheNavigation extends Vue {
  private destinations = store.destinations;
}
</script>
<style scoped>
h1 {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  color: purple;
}
#nav {
  display: flex;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 10px;
  text-decoration: none;
}
a:hover {
  color: purple;
  text-decoration: underline;
}
a.router-link-exact-active {
  color: #42b983;
}
.links {
  padding: 15px 20px;
  display: flex;
  list-style: none;
}
</style>
