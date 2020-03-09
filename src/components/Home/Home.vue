  <template>
  <v-container fluid>
    <v-img src="@/assets/reading.jpg" height="900">
    </v-img>
    <Step />
  </v-container>
</template>

<script>
import Step from "./Step";

export default {
  components: { Step }
};
</script>
<style>
.v-application .mt-5 {
  text-align: center;
  color: #000;
}
</style>