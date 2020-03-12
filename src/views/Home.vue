/* eslint-disable prettier/prettier */
<template>
  <div class="home">
    <h1>All Destinations</h1>
    <div class="destinations">
      <div
        v-for="destination in destinations"
        :key="destination.name"
      >
        <router-link :to="{
            name: 'DestinationDetails',
            params: { slug: destination.slug }
          }">{{ destination.name }}</router-link>
        <figure>
          <img
            :src="require(`@/assets/${destination.image}`)"
            :alt="destination.image"
          />
        </figure>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import store from "../store";
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  private destinations = store.destinations;
}
</script>
<style scoped>
.home {
  max-width: 1400px;
  margin: 0 auto;
}

img {
  max-width: 200px;
}

.destinations {
  display: flex;
  justify-content: space-between;
}
</style>
