<template>
  <div>
    <h1 class="md-headline">Videos you have watched:</h1>
    <md-list v-for="video in videos" :key="video.url">
      <md-list-item @click="see(video.url)" class="md-raised">
        <md-icon>movie</md-icon>
        <span class="md-list-item-text">{{ video.title }}</span>
      </md-list-item>
      <Video v-if="video.url === viewing" :videoURL="video.url" />
    </md-list>
    <md-button @click="emptyHistory" class="md-accent md-raised"
      >Empty history</md-button
    >
  </div>
</template>

<script>
import Video from "./Video";
export default {
  name: "History",
  components: {
    Video,
  },
  data() {
    return {
      viewing: "",
    };
  },
  mounted() {
    this.$store.dispatch("getVideoHistory");
  },
  computed: {
    videos() {
      return this.$store.state.history;
    },
  },
  methods: {
    emptyHistory() {
      this.$store.dispatch("emptyVideoHistory");
    },
    see(url) {
      if (this.viewing === url) this.viewing = "";
      else this.viewing = url;
    },
  },
};
</script>

<style scoped>
.md-list {
  max-width: 100%;
  display: block;
  vertical-align: top;
  border: 1px solid rgba(#000, 0.12);
}
</style>
