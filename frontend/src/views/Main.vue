<template>
  <div id="grid">
    <Header id="header" />
    <div id="content">
      <button @click="logout">Logout</button>
      <Video :videoURL="videoURL" />
      <button @click="getNew">Next video</button>
    </div>
    <History id="history" />
  </div>
</template>

<script>
import Video from "../components/Video";
import Header from "../components/Header";
import History from "../components/History";

export default {
  name: "Main",
  components: {
    Video,
    Header,
    History,
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
    "header menu menu"
    "main history empty"
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

#history {
  grid-area: history;
}

@media screen and (max-width: 500px) {
  #grid {
    grid-template:
      "header"
      "main"
      "history" / 100%;
  }
}
</style>
