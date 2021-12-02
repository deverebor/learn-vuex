import { createStore } from "vuex";

const ModulePokemon = {
  state: () => ({}),
  mutations: {},
  actions: {},
  getters: {
    //TODO: adicionar a conexão com a api aqui ?
  },
};

export default createStore({
  strict: true,
  state: {
    pokemon: {
      id: 0,
    },
  },
  mutations: {},
  actions: {},
  modules: {
    pokemon: ModulePokemon,
  },
});
