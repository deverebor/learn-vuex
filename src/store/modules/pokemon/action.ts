import { ActionTree } from "vuex";
import * as types from "./types";

const actions: ActionTree<types.TabSystemState, types.RootState> = {
  [types.ACT_CREATE_NEW_TAB]({ state, commit }, tab) {
    const { name, urlName } = tab;

    const newTab = {
      id: state[types.STATE_TABS].length,
      text: name,
      active: true,
      urlName,
      info: {},
    };

    commit(types.MUT_SET_TAB, newTab);

    return newTab.id;
  },
};

export default actions;
