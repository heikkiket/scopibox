<template>
  <History id="history" />
</template>

<script>
import History from "../components/History";

export default {
  name: "HistoryView",
  components: {
    History,
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

@media screen and (max-width: $breakpoint-mobile) {
}
</style>
