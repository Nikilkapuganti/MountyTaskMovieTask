<template>
  <div class="card h-100">
    <div class="card-body">
      <h5 class="card-title">{{ finalresult.original_title }}</h5>
      <img
        v-bind:src="'http://image.tmdb.org/t/p/w500/' + finalresult.poster_path"
        width="100px"
      />
      <p class="card-text">{{ finalresult.overview }}</p>
      <p>Popularity:{{ finalresult.popularity }}</p>
      <p>Release Date:{{ finalresult.release_date }}</p>
    </div>
  </div>
</template>

<style>
.card {
  text-align: center;
}
.col-md-3 {
  margin-top: 10px;
}
</style>
<script>
export default {
  props: ["finalresult"],
};
</script>