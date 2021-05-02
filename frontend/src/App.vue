<template>
  <div id="app">
      <Login v-if="loggedout" />
      <Main v-else />
  </div>
</template>

<script>
import Login from "./components/Login.vue";
import Main from "./views/Main.vue";

export default {
  name: "App",
  components: {
    Main,
    Login,
  },
  computed: {
    loggedout() {
      return !this.$store.state.loggedin;
    },
  },
};
</script>

<style></style>
