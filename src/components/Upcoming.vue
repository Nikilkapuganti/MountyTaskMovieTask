<template>
  <div>
    <div class="center">
      <div v-if="results.length > 0">
        <div class="container-fluid">
          <div class="row">
            <div
              class="col-md-3"
              v-for="(result, index) in results"
              :key="index"
            >
              <card :finalresult="result"></card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>
<script>
import axios from "axios";
import card from "./card.vue";

export default {
  data() {
    return {
      results: [],
    };
  },
  components: {
    card,
  },
  mounted() {
    axios
      .get(process.env.VUE_APP_UPCOMING_TITLE)

      .then((response) => (this.results = response.data.results));
  },
};
</script>
