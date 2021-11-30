import { createStore } from "vuex";

export default createStore({
  state: {
    user: {
      firstName: "Jhon",
      lastName: "Doe",
      email: "jhon@doe.com",
    },
    cart: [] as any,
  },
  mutations: {
    //cart
    addProduct(state, payload) {
      state.cart.push(payload);
    },

    //User
    saveFirstName(state, payload) {
      state.user.firstName = payload;
    },
  },
  actions: {
    saveFirstName(context, payload) {
      context.commit("saveFirstName", payload);
    },
  },
  modules: {},
});
