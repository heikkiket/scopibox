import Vue from "vue";
import Vuex from "vuex";

import api from "./api.js";

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
      window.token = payload.token;
    },
    logout(state) {
      state.loggedout = true;
    },
    video(state, payload) {
      state.videoURL = payload.url;
    },
  },
  actions: {
    async getRandomVideo({ commit }) {
      const result = await api(`query {randomVideo {title, url}}`);
      const response = await result.json();
      const video = response.data.randomVideo;

      commit("video", video);
    },
    async sendLogin({ commit }, payload) {
      const { username, password } = payload;
      const result = await api(
        `mutation login($username: String!, $password: String!) {login(username: $username, password: $password ) {user {username} token}} `,
        { username, password }
      );
      const json = await result.json();
      if (json.data.login.token)
        commit("login", { token: json.data.login.token });
    },
  },
  modules: {},
});
