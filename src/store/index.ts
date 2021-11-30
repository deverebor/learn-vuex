import { createStore } from "vuex";

export default createStore({
  state: {
    user:{
      firstName: "Jhon",
      lastName: "Doe",
      email: "jhon@doe.com",
    },
  },
  mutations: {},
  actions: {
    saveFirstName(context, payload) {
      console.log(payload);
    }
  },
  modules: {},
});
