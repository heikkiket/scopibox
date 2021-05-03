import Vue from "vue";
import Vuex from "vuex";

import api from "./api.js";
const scopiApi = api();

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    video: "",
    history: [],
    loggedin: false,
    user: "",
  },
  mutations: {
    login(state, payload) {
      state.loggedin = true;
      state.user = payload.user;
      scopiApi.setToken(payload.token);
    },
    logout(state) {
      state.loggedin = false;
      scopiApi.setToken("");
    },
    video(state, payload) {
      state.video = payload;
    },
    videoHistory(state, payload) {
      state.history = payload;
    },
  },
  actions: {
    async getRandomVideo({ commit }) {
      const response = await scopiApi.query(`query {randomVideo {title, url}}`);
      if (response.errors) {
        if (scopiApi.collectCodes(response.errors).includes("FORBIDDEN"))
          this.dispatch("logout");
      } else {
        const video = response.data.randomVideo;
        commit("video", video);
      }
    },
    async getVideoHistory({ commit }) {
      const response = await scopiApi.query(
        `query {videoHistory {title, url}}`
      );
      const history = response.data.videoHistory;
      commit("videoHistory", history);
    },
    async emptyVideoHistory({ commit }) {
      const response = await scopiApi.mutation(
        "mutation { emptyVideoHistory }"
      );
      if (response.errors) {
        if (scopiApi.collectCodes(response.errors).includes("FORBIDDEN"))
          this.dispatch("logout");
      }

      if (response.data.emptyVideoHistory) commit("videoHistory", []);
    },
    async sendLogin({ commit }, payload) {
      const { username, password } = payload;
      const result = await scopiApi.mutation(
        "mutation login($username: String!, $password: String!) {login(username: $username, password: $password ) {user {name username} token}} ",
        { username, password }
      );
      if (result.data.login.token)
        commit("login", {
          token: result.data.login.token,
          user: result.data.login.user.name,
        });
    },
    async logout({ commit }) {
      commit("logout");
    },
  },
  modules: {},
});
