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
      state.loggedout = true;
      scopiApi.setToken("");
    },
    video(state, payload) {
      state.videoURL = payload.url;
    },
  },
  actions: {
    async getRandomVideo({ commit }) {
      const result = await scopiApi.call(`query {randomVideo {title, url}}`);
      const response = await result.json();
      const video = response.data.randomVideo;

      commit("video", video);
    },
    async sendLogin({ commit }, payload) {
      const { username, password } = payload;
      const result = await scopiApi.call(
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
