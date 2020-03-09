<template>
  <v-app-bar app
    dark
  >
    <v-toolbar-title class="headline text-uppercase">
      <router-link to="/" class="router-link-layout">Vuetify MATERIAL DESIGN</router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <Login />
    <Signup />
  </v-app-bar>
</template>

<script>
import Signup from "./Signup";
import Login from "./Login";
export default {
  components: { Signup, Login }
};
</script>

<style>
  .router-link-layout {
    text-decoration: none;
  }

</style>