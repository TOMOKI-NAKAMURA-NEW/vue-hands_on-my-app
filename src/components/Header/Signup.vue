<template>
  <v-dialog v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn rounded text large v-on="on">新規登録</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">新規登録</span>
        <v-spacer></v-spacer>
        <v-btn icon @click="dialog = false">
          <i class="fas fa-times"></i>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <ValidationProvider v-slot="{ errors }" name="氏名" rules="required|max:10" ref="refName">
                <v-text-field
                  v-model="name"
                  :counter="10"
                  :error-messages="errors"
                  label="氏名"
                  required
                ></v-text-field>
              </ValidationProvider>
            </v-flex>
            <v-flex xs12>
              <ValidationProvider v-slot="{ errors }" name="メールアドレス" rules="required|email" ref="refEmail">
                <v-text-field
                  v-model="email"
                  :error-messages="errors"
                  label="メールアドレス"
                  required
                ></v-text-field>
              </ValidationProvider>
            </v-flex>
            <v-flex xs12>
              <ValidationProvider v-slot="{ errors }" name="パスワード" rules="required" ref="refPassword">
                <v-text-field
                  v-model="password"
                  :error-messages="errors"
                  label="パスワード"
                  required
                ></v-text-field>
              </validationProvider>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-container grid-list-md>
          <v-btn block color="success" dark @click="signup">登録</v-btn>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { required, email, max } from 'vee-validate/dist/rules'
import { extend, ValidationProvider, setInteractionMode, localize } from 'vee-validate'
import ja from 'vee-validate/dist/locale/ja.json'
setInteractionMode('eager')

extend('required', {
    ...required,
    message: '{_field_} は必須項目です。',
  })

  extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters',
  })

  extend('email', {
    ...email,
    message: 'メール形式で入力してください。',
  })
localize('ja', ja)

export default {
  components: {
    ValidationProvider,
  },
  data() {
    return {
      name: '',
      email: '',
      password: '',
      dialog: false
    };
  },
  methods: {
    async signup() {
      const isRefName = await this.$refs.refName.validate()
      const isRefEmail = await this.$refs.refEmail.validate()
      const isRefPassword = await this.$refs.refPassword.validate()
      const isValid = isRefName.valid && isRefEmail.valid && isRefPassword.valid
      if (isValid) {
        this.signupClear()
        this.dialog = false;
        this.name = this.email = this.password = "";
        this.$router.push("/list");
      }
    },
    signupClear() {
      this.name = ''
      this.email = ''
      this.password = ''
    }
  }
};
</script>