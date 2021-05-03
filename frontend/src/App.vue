<template>
  <div id="app">
    <app-skeleton v-if="loggedin">
      <router-view></router-view>
    </app-skeleton>
    <router-view v-else></router-view>
  </div>
</template>

<script>
import AppSkeleton from "./components/material/AppSkeleton";

export default {
  name: "App",
  components: {
    AppSkeleton,
  },
  computed: {
    loggedin() {
      return this.$store.state.loggedin;
    },
  },
};
</script>

<style></style>
