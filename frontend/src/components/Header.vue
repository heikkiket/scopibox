<template>
  <header>
    <img alt="Scopibox logo" src="../assets/logo.png" id="logo" />
    <h1>Scopibox</h1>
    <button @click="logout">Logout</button>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style scoped>
header {
  text-align: center;
}

#logo {
  width: 200px;
  transition: transform 10s;
}

#logo:hover {
  transform: rotate(-180deg);
}
</style>
