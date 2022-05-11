import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";

import account from "./modules/account";
import global from "./modules/global";

Vue.use(Vuex);

import { config } from "../config/env";
export default new Vuex.Store({
  modules: {
    account,
    global,
  },
  strict: config.isDebug,
  plugins: config.isDebug ? [createLogger()] : [],
});
