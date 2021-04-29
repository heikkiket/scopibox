<template>
  <div id="login-form">
    <h1>Please log in.</h1>
    <form name="login">
      <md-field md-clearable>
        <label>Cleareable</label>
        <md-input v-model="username"></md-input>
      </md-field>

      <md-field>
        <label>Password toggle</label>
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
  margin: 0 auto;
}
</style>
