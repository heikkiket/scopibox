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

#logo:hover,
#logo:active {
  transform: rotate(-180deg);
}

h1 {
  font-size: 8rem;
  margin-bottom: 6rem;
}

@media screen and (max-width: 500px) {
  #logo {
    width: 200px;
    margin: 2rem;
  }

  h1 {
    font-size: 4rem;
  }
}
</style>
