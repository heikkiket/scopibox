<template>
  <div id="content">
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
    this.getNew();
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
  },
};
</script>
<style scoped></style>
