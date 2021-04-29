<template>
  <div id="login-form">
    <h1>Scopibox</h1>
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
  methods: {
    send(e) {
      e.preventDefault();
      this.$store.dispatch("sendLogin", {
        username: this.username,
        password: this.password,
      });
    },
  },
};
</script>

<style scoped>
#login-form {
  max-width: 300px;
  margin-left: 3rem;
}
h1 {
  font-size: 8rem;
  margin-bottom: 6rem;
}

@media screen and (max-width: 500px) {
  h1 {
    margin-top: 12rem;
    font-size: 4rem;
  }
  #login-form {
    margin: 2rem auto;
  }
}
</style>
