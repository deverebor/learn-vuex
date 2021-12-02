import { createStore } from "vuex";
import axios from "axios";

const ModulePokemon: any = {
  state: () => ({
    api: "https://pokeapi.co/api/v2/pokemon/",
  }),
  mutations: {},
  actions: {},
  getters: {
    fetchPokemons(url = "https://pokeapi.co/api/v2/pokemon/") {
      axios
        .get(url)
        .then(({ data }) => {
          this.api = data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
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
