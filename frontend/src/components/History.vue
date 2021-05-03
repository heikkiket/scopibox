<template>
  <div>
      <h1 class="md-title">Your watched videos</h1>
    <md-list v-for="video in videos" :key="video.url">
      <md-list-item>
        <md-icon>movie</md-icon>
        <span class="md-list-item-text">{{ video.title }}</span>
      </md-list-item>
    </md-list>
    <md-button class="md-accent md-raised">Empty history</md-button>
  </div>
</template>

<script>
export default {
  name: "History",
  components: {},
  mounted() {
    this.$store.dispatch("getVideoHistory");
  },
  computed: {
    videos() {
      return this.$store.state.history;
    },
  },
};
</script>

<style scoped></style>
