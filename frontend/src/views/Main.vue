<template>
  <div id="grid">
    <Header id="header" />
    <div id="content">
      <button @click="logout">Logout</button>
      <Video :videoURL="videoURL" />
      <button @click="getNew">Next video</button>
    </div>
  </div>
</template>

<script>
import Video from "../components/Video.vue";
import Header from "../components/Header";
export default {
  name: "Main",
  components: {
    Video,
    Header,
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  mounted() {
    this.getNew();
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
    getNew() {
      this.$store.dispatch("getRandomVideo");
    },
  },
  computed: {
    videoURL() {
      return this.$store.state.videoURL;
    },
  },
};
</script>
<style scoped>
#grid {
  font-family: Roboto;
  font-weight: lighter;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fc8910;

  display: grid;
  grid-template:
    "header menu"
    "main main"
    / 40% auto;
}

#header {
  grid-area: header;
}

#content {
  grid-area: main;
  max-width: 95%;
  margin: auto;
}

@media screen and (max-width: 500px) {
}
</style>
