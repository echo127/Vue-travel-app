<template>
  <nav id="nav">
    <p class="logo">Your Travel Destination Choices</p>
    <ul class="nav-links">
      <li class="links">
        <router-link to="/">
          Home
        </router-link>
      <li
        v-for="destination in destinations"
        :key="destination.name"
      >
        <router-link :to="{ name: 'DestinationDetails', params: { id: destination.id } }">
          {{ destination.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
import store from "../store";
export default Vue.extend({
  data() {
    return {
      destinationId: this.$route.params.id,
      destinations: store.destinations
    };
  }
});
</script>

<style scoped>
#nav {
  display: flex;
}
#nav {
  padding: 30px;
}

#nav a {
  padding: 0 10px;
  text-decoration: none;
  color: #2c3e50;
  font-weight: bold;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 18px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.nav-links {
  display: flex;
}

.links {
  padding-right: 20px;
  list-style: none;
}

.logo {
  font-size: 20px;
  color: purple;
  font-weight: bold;
}
</style>
