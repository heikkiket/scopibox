import Vue from "vue";
import Vuex from "vuex";

import api from "./api.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    videoURL: "",
  },
  mutations: {
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
  },
  modules: {},
});
