<template>
  <div class="noFound">
    <h1>404 No Fonund</h1>
    <p>
      Oops, Couldn't find your page, please go to
      <router-link :to="{ name: 'Home' }">Home</router-link> page.
    </p>
  </div>
</template>
