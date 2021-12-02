<template>
  <div class="container">
    <h1>Pokedex</h1>
    <ul>
      <li
        class="list-group-item"
        v-for="pokemon in api.results"
        :key="pokemon.id"
        v-text="pokemon.name"
      ></li>
    </ul>

    <button class="btn btn-primary" @click="next">Next</button>
    <button class="btn btn-primary mx-2" @click="previous">Previous</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import { IPokemon } from "@/utils/interfaces/IPokemon";

export default defineComponent<IPokemon>({
  name: "Pokemon",
  data() {
    return {
      api: {},
    };
  },
  created() {
    this.fetchPokemons();
  },
  methods: {
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

    next() {
      this.fetchPokemons(this.api.next);
    },

    previous() {
      this.fetchPokemons(this.api.next);
    },
  },
});
</script>

<style src="./Pokemon.scss" lang="scss" />
