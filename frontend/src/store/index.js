import Vue from "vue";
import Vuex from "vuex";

import api from "./api.js";
const scopiApi = api();

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    videoURL: "",
    loggedin: false,
    token: "",
  },
  mutations: {
    login(state, payload) {
      state.loggedin = true;
      scopiApi.setToken(payload.token);
    },
    logout(state) {
      state.loggedin = false;
      scopiApi.setToken("");
    },
    video(state, payload) {
      state.videoURL = payload.url;
    },
  },
  actions: {
    async getRandomVideo({ commit }) {
      const response = await scopiApi.call(`query {randomVideo {title, url}}`);
      if (response.errors) {
        if (scopiApi.collectCodes(response.errors).includes("FORBIDDEN"))
          this.dispatch("logout");
      } else {
        const video = response.data.randomVideo;
        commit("video", video);
      }
    },
    async sendLogin({ commit }, payload) {
      const { username, password } = payload;
      const result = await scopiApi.call(
        `mutation login($username: String!, $password: String!) {login(username: $username, password: $password ) {user {username} token}} `,
        { username, password }
      );
      if (result.data.login.token)
        commit("login", { token: result.data.login.token });
    },
    async logout({ commit }) {
      commit("logout");
    },
  },
  modules: {},
});
