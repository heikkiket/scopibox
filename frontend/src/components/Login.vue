<template>
  <div>
    <h1>Please log in.</h1>
    <input v-model="username" type="text" />
    <input v-model="password" type="text" />
    <input @click="send" type="submit" />
  </div>
</template>

<script>
export default {
  methods: {
    send() {
      this.$store.dispatch("sendLogin", {
        username: this.username,
        password: this.password,
      });
    },
  },
};
</script>

<style scoped></style>
