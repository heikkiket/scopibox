<template>
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
</template>

<script>
export default {
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

<style lang="scss" scoped>
@import "../styles/variables.scss";

#login-form {
  max-width: 300px;
  margin: 0 auto;
}

h1 {
  font-size: 8rem;
}

@media screen and (max-width: $breakpoint-mobile) {
  #login-form {
    margin: 2rem auto;
  }
}
</style>
