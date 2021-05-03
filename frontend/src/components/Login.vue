<template>
  <div id="container">
    <LoginHeader id="header" />
    <div id="content">
      <h1>Scopibox</h1>
      <div id="login-form">
        <h2>Please log in.</h2>
        <form name="login">
          <md-field md-clearable>
            <label>Username</label>
            <md-input v-model="username"></md-input>
          </md-field>

          <md-field>
            <label>Password</label>
            <md-input v-model="password" type="password"></md-input>
          </md-field>
          <md-button type="submit" @click="send" class="md-raised md-primary">
            Login
          </md-button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import LoginHeader from "./LoginHeader";
export default {
  components: {
    LoginHeader,
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    send(e) {
      e.preventDefault();
      this.$store
        .dispatch("sendLogin", {
          username: this.username,
          password: this.password,
        })
        .then(() => this.$router.push("home"));
    },
  },
};
</script>

<style scoped>
#container {
  font-family: Roboto;
  font-weight: lighter;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fc8910;

  display: grid;
  grid-template: "header main";
  grid-template-columns: 30% auto;
}

#content {
  max-width: 600px;
}

#login-form {
  max-width: 300px;
  margin: 0 auto;
}

h1 {
  font-size: 8rem;
}

@media screen and (max-width: 500px) {
  #container {
    grid-template:
      "header"
      "main";
  }

  #header {
    grid-area: header;
    margin: 0 auto;
  }

  #content {
    grid-area: main;
    max-width: 95%;
    margin: auto;
  }

  #login-form {
    margin: 2rem auto;
  }
  h1 {
    font-size: 4rem;
  }
}
</style>
