<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Video videoURL="https://www.youtube.com/embed/3gGpRiV09uU" />
  </div>
</template>

<script>
import Video from "./components/Video.vue";

export default {
  name: "App",
  components: {
    Video,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
