import { createStore } from "vuex";

export default createStore({
  strict: true,
  state: {
    cart: [] as any,
  },
  mutations: {
    addProduct(state, payload) {
      state.cart.push(payload);
    },
  },
  actions: {},
  modules: {},
});
