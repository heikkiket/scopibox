<template>
  <div id="app">
    <Header />
    <div id="content">
      <Video v-if="loggedin" :videoURL="videoURL" />
      <div v-else>
        <h1>Please log in.</h1>
        <input v-model="username" type="text" />
        <input v-model="password" type="text" />
        <input @click="send" type="submit" />
      </div>
      <button @click="asdf">Ask video</button>
    </div>
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
  data() {
    return {
      username: "",
      password: "",
    };
  },
  mounted() {
    this.$store.dispatch("getRandomVideo");
  },
  computed: {
    videoURL() {
      return this.$store.state.videoURL;
    },
    loggedin() {
      return this.$store.state.loggedin;
    },
  },
  methods: {
    send() {
      this.$store.dispatch("sendLogin", {
        username: this.username,
        password: this.password,
      });
    },
    asdf() {
      this.$store.dispatch("getRandomVideo");
    },
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
