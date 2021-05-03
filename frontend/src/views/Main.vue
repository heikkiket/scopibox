<template>
  <app-skeleton>
    <div id="content">
      <Video :videoURL="videoURL" />
      <button @click="getNew">Next video</button>
    </div>
    <History id="history" />
  </app-skeleton>
</template>

<script>
import AppSkeleton from "../components/material/AppSkeleton";
import Video from "../components/Video";
import History from "../components/History";

export default {
  name: "Main",
  components: {
    AppSkeleton,
    Video,
    History
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
<style scoped>
</style>
