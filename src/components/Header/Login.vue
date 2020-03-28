<template>
  <v-dialog v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn rounded text large v-on="on">ログイン</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">ログイン</span>
        <v-spacer></v-spacer>
        <v-btn icon @click="dialog = false">
          <i class="fas fa-times"></i>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field label="メールアドレス" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field label="パスワード" type="password" required></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-container grid-list-md>
          <v-btn block color="success" dark @click="login">ログイン</v-btn>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    };
  },
  methods: {
    login() {
      this.$router.push("/list");
      this.dialog = false
    }
  }
};
</script> 