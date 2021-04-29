<template>
  <div id="app">
    <Header />
    <div id="content">
      <Login v-if="loggedout" />
      <Main v-else />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Login from "./components/Login.vue";
import Main from "./views/Main.vue";

export default {
  name: "App",
  components: {
    Header,
    Main,
    Login,
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  computed: {
    loggedout() {
      return !this.$store.state.loggedin;
    },
  },
};
</script>

<style>
#app {
  font-family: Roboto;
  font-weight: lighter;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fc8910;

  display: grid;
  grid-template: "header main";
  grid-template-columns: 40% auto;
}

#content {
  max-width: 80%;
}

@media screen and (max-width: 500px) {
  #app {
    grid-template:
      "header"
      "main";
    grid-template-rows: 70px auto;
  }

    #content {
        max-width: 95%;
        margin: auto;
    }
}
</style>
