<template>
  <div>
    <button @click="logout">Logout</button>
    <Video :videoURL="videoURL" />
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
    this.$store.dispatch("getRandomVideo");
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
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
