<template>
  <div>
    <button @click="logout">Logout</button>
    <Video :videoURL="videoURL" />
    <button @click="getNew">Next video</button>
  </div>
</template>

<script>
import Video from "../components/Video.vue";
export default {
  name: "Main",
  components: {
    Video,
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
<style scoped></style>
