<template>
  <v-container fluid class="pa-0">
    <v-row align="center">
      <v-col cols="12" sm="6">
        <div class="text-center">
          <div class="my-2">
            <v-btn x-large color="success" dark @click="getBooksImg">本画像を取得</v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
    <img :src="dataUrl">
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