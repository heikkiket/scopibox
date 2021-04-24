<template>
  <div id="app">
    <Header />
    <div id="content"><Video :videoURL="videoURL" /></div>
  </div>
</template>

<script>
import Video from "./components/Video.vue";
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    Header,
    Video,
  },
  computed: {
    videoURL: () => "https://www.youtube.com/embed/3gGpRiV09uU",
  },
};
</script>

<style>
#app {
  font-family: Roboto;
  font-weight: lighter;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fc8910;
  margin-top: 60px;

  display: grid;
  grid-template: "header main";
  grid-template-columns: 300px auto;
}

#content {
  max-width: 80%;
}
</style>
