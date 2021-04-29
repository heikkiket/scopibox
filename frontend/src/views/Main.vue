<template>
  <Video :videoURL="videoURL" />
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
  computed: {
    videoURL() {
      return this.$store.state.videoURL;
    },
  },
};
</script>
<style scoped></style>
