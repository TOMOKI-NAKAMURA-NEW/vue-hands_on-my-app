<template>
  <v-btn rounded text x-large color="white" dark @click="login">
    ログイン
    <i class="fab fa-google"></i>
  </v-btn>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      dialog: false
    };
  },
  methods: {
    login() {
      mapActions(['login'])
    }
  }
}
</script>