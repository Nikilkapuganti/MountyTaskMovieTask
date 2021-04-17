<template>
  <div id="app">
    <NavBar />
    <div>
      <router-view> </router-view>
    </div>
  </div>
</template>
<style>
</style>
<script>
import NavBar from "./components/NavBar.vue";
export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>
