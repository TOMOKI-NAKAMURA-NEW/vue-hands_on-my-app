<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs6 sm4 md3 lg2>
        <v-card v-if="dataUrl">
          <v-img :src="dataUrl"></v-img>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon>
              <i class="far fa-trash-alt"></i>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs6 sm4 md3 lg2>
        <v-card v-if="dataUrl">
          <v-img :src="dataUrl"></v-img>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon>
              <i class="far fa-trash-alt"></i>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs6 sm4 md3 lg2>
        <v-card v-if="dataUrl">
          <v-img :src="dataUrl"></v-img>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon>
              <i class="far fa-trash-alt"></i>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs6 sm4 md3 lg2>
        <v-card v-if="dataUrl">
          <v-img :src="dataUrl"></v-img>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon>
              <i class="far fa-trash-alt"></i>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs6 sm4 md3 lg2>
        <v-card v-if="dataUrl">
          <v-img :src="dataUrl"></v-img>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon>
              <i class="far fa-trash-alt"></i>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs6 sm4 md3 lg2>
        <v-card v-if="dataUrl">
          <v-img :src="dataUrl"></v-img>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon>
              <i class="far fa-trash-alt"></i>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-btn x-large color="success" dark @click="getBooksImg">本画像を取得</v-btn>
  </v-container>
</template> 

<script>
export default {
  data() {
    return {
      dataUrl: ''
    }
  },
  methods: {
    async getBooksImg() {
      let self = this
      await this.$axios.get('https://api.openbd.jp/v1/get?isbn=978-4-7808-0204-7')
        .then(function (response) {
          self.dataUrl = response.data[0].summary.cover
          console.log(self.dataUrl)
        })
    }
  }
}
</script>