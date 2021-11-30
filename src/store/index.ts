import { createStore } from "vuex";

export default createStore({
  strict: true,
  state: {
    user: {
      firstName: "Jhon",
      lastName: "Doe",
      email: "jhon@doe.com",
    },
  },
  mutations: {
    saveFirstName(state, payload) {
      state.user.firstName = payload;
    },
    saveLastName(state, payload) {
      state.user.lastName = payload;
    },
  },
  actions: {
    saveFirstName(context, payload) {
      context.commit("saveFirstName", payload);
    },
    saveLastName(context, payload) {
      context.commit("saveLastName", payload);
    },
  },
  modules: {},
});
