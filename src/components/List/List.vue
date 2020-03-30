<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs6 sm4 md3 lg3>
        <v-card v-if="dataImg">
          <v-img :src="dataImg"></v-img>
          <v-card-actions>
            <v-card-title>タイトル：{{ dataTitle }}</v-card-title>
            <v-spacer></v-spacer>
            <v-btn icon @click="deleteImg">
              <i class="far fa-trash-alt"></i>
            </v-btn>
          </v-card-actions>
        </v-card>
        <v-btn x-large color="success" dark @click="getBooksImg">本画像を取得</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template> 

<script>
export default {
  data() {
    return {
      dataImg: '',
      dataTitle: ''
    }
  },
  methods: {
    getBooksImg() {
      let self = this
      this.$axios.get('https://api.openbd.jp/v1/get?isbn=978-4-8156-0182-9')
        .then(function (response) {
          console.log({ response })
          self.dataImg = response.data[0].summary.cover
          self.dataTitle = response.data[0].summary.title
        })
    },
    deleteImg() {
      this.dataImg = ''
    }
  }
}
</script>