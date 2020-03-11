<template>
  <div>
    <section class="destinations">
      <h1>{{ destination.name }}</h1>
      <div class="destination-details">
        <img
          :src="require(`@/assets/${destination.image}`)"
          :alt="destination.image"
        >
        <p>{{ destination.description }}</p>
      </div>
    </section>
    <section class="expriences">
      <h2>Top experiences in {{destination.name}}</h2>
      <div class="cards">
        <div
          v-for="(experience, index) in destination.experiences"
          :key="index"
          class="card"
        >
          <router-link :to="{
              name: 'ExperienceDetails',
              params: {
                experience: experience,
                experienceSlug: experience.slug
              }
            }">
            <img
              :src="require(`@/assets/${experience.image}`)"
              :alt="experience.image"
            >
            <span class="card_text">
              {{experience.name}}
            </span>
          </router-link>
        </div>
      </div>
    </section>
    <section class="experiences">
      <router-view :key="$route.path" />
    </section>
  </div>
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

.cards {
  display: flex;
  justify-content: space-between;
}

.card img {
  max-height: 250px;
  max-width: 500px;
}

.card {
  padding: 1 20px;
  position: relative;
}

.card_text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: (-50%, -50%);
  color: white;
  font-size: 25px;
  font-weight: bold;
  text-decoration: none;
}
</style>