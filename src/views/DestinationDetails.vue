<template>
  <section class="destination">
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img
        :src="require(`@/assets/${destination.image}`)"
        :alt="destination.image"
      />
      <p>{{ destination.description }}</p>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from "vue";
import store from "../store";
export default Vue.extend({
  data() {
    return {
      slug: this.$route.params.slug
    };
  },
  computed: {
    destination() {
      return store.destinations.find(
        destination => destination.slug === this.$data.slug
      );
    }
  }
});
</script>
<style>
img {
  max-width: 600px;
  height: auto;
  width: 100%;
  max-height: 400px;
}
.destination-details {
  display: flex;
  justify-content: space-between;
}
p {
  margin: 0 40px;
  font-size: 20px;
  text-align: left;
}
</style>
