<template>
  <div id="video-player">
    <iframe
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
