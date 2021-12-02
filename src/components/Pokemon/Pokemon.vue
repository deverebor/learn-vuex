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
  computed: {
    next: function () {
      return this.api.next;
    },

    previous: function () {
      return this.api.previous;
    },
  },
  methods: {},
});
</script>

<style src="./Pokemon.scss" lang="scss" />
