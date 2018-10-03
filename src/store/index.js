import Vue from "vue";
import Vuex from "vuex";
import journal from "./modules/journal";
import entries from "./modules/entries";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    journal,
    entries
  },
  strict: true,
  plugins: []
});
