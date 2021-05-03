<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-toolbar class="md-large md-dense md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <span class="md-title">{{ appName }}</span>
          </div>

          <div class="md-toolbar-section-end">
            <md-button @click="logout">
              <md-icon>logout</md-icon>
              <span> Logout</span>
            </md-button>
          </div>
        </div>

        <div class="md-toolbar-row">
          <md-tabs class="md-primary">
            <md-tab id="tab-home" md-label="Home" to="/home"></md-tab>
            <md-tab id="tab-pages" md-label="History" to="/history"></md-tab>
          </md-tabs>
        </div>
      </md-app-toolbar>

      <md-app-content>
        <slot></slot>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: "Skeleton",
  data() {
    return {
      menuVisible: false,
      appName: process.env.VUE_APP_NAME,
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("logout").then(() => this.$router.push("/"));
    },
  },
};
</script>

<style scoped></style>
