<template>
  <v-app-bar app
    dark
  >
    <v-toolbar-title class="headline text-uppercase">
      <router-link to="/" class="router-link-layout">Vuetify</router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <Login />
  </v-app-bar>
</template>

<script>
import Login from "./Login";
export default {
  components: { Login }
};
</script>

<style>
  .router-link-layout {
    text-decoration: none;
  }

</style>