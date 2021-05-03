<template>
  <div>
    <header id="header">
      <img alt="Scopibox logo" src="../assets/logo.png" id="logo" />
    </header>
    <div id="content">
      <h1>Scopibox</h1>
      <div id="container">
        <Login />
      </div>
    </div>
  </div>
</template>

<script>
import Login from "../components/Login.vue";
export default {
  name: "LoginView",
  components: {
    Login,
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
#header {
  text-align: center;
}

#logo {
  width: 500px;
  transition: transform 10s;
  margin: 3em;
  display: block;
}

#logo:hover,
#logo:active {
  transform: rotate(-180deg);
}

h1 {
  font-size: 8rem;
  margin-bottom: 6rem;
}

@media screen and (max-width: $breakpoint-mobile) {
  #logo {
    width: 200px;
    margin: 2rem;
  }

  h1 {
    font-size: 4rem;
  }
}
</style>
