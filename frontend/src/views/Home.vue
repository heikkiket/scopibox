<template>
  <div id="content">
      <h1 class="md-headline">Hello, {{ user }}!</h1>
      <h2 class="md-subheading">Here's an excercise for you:</h2>
    <Video :videoURL="videoURL" />
    <button @click="getNew">Next video</button>
  </div>
</template>

<script>
import Video from "../components/Video";

export default {
  name: "Main",
  components: {
    Video,
  },
  data() {
    return {
      username: "",
      password: "",
      menuVisible: false,
    };
  },
  mounted() {
    if (!this.videoURL) this.getNew();
  },
  methods: {
    getNew() {
      this.$store.dispatch("getRandomVideo");
    },
  },
  computed: {
    videoURL() {
      return this.$store.state.video.url;
    },
    user() {
      return this.$store.state.user;
    },
  },
};
</script>
<style scoped></style>
