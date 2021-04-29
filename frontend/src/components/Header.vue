<template>
  <header>
    <img alt="Scopibox logo" src="../assets/logo.png" id="logo" />
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
header {
  text-align: center;
}

#logo {
  width: 500px;
  transition: transform 10s;
  margin: 3em;
  display: block;
}

#logo:hover {
  transform: rotate(-180deg);
}

@media screen and (max-width: 500px) {
  #logo {
    width: 200px;
    margin: 2rem auto;
  }
}
</style>
