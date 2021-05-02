<template>
  <div>
    <h1>History</h1>
    <ul v-for="video in videos" :key="video.url">
      <li><Video videoURL="video.url" /></li>
    </ul>
  </div>
</template>

<script>
import Video from "../components/Video";

export default {
  name: "History",
  components: {
    Video,
  },
  computed: {
    videos() {
      return [{ url: "foo" }, { url: "bar" }];
    },
  },
};
</script>

<style scoped></style>
