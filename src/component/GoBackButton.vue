<template>
  <div class="GoBack">
    <button @click="goBack">Go Back</button>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default class GoBackButton extends Vue {
  goBack(): void {
    return this.$router.go(-1);
  }
}
</script>