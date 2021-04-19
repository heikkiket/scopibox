<template>
  <div id="app">
    <header>
      <img alt="Vue logo" src="./assets/logo.png" id="logo" />
      <h1>Scopibox</h1>
    </header>
    <Video videoURL="https://www.youtube.com/embed/3gGpRiV09uU" />
    <md-bottom-bar md-sync-route>
      <md-bottom-bar-item
        exact
        md-label="Hello"
        md-icon="home"
      ></md-bottom-bar-item>
    </md-bottom-bar>
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
header {
  display: inline;
  float: left;
}

#app {
  font-family: Roboto;
  font-weight: lighter;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fc8910;
  margin-top: 60px;
}

#logo {
  width: 200px;
  padding-right: 50px;
}
</style>
