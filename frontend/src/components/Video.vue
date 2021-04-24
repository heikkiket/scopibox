<template>
  <div id="video-player">
    <p v-if="!videoURL">No video to show.</p>
    <iframe
      v-else
      width="560"
      height="315"
      :src="videoURL"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "Video",
  props: {
    videoURL: String,
  },
};
</script>

<style scoped>
#video-player {
  margin: 3em;
}
</style>
