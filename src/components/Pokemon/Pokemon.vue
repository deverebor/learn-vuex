<template>
  <div>Hello World</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import { IPokemon } from "../../utils/interfaces/IPokemon";

export default defineComponent<IPokemon>({
  name: "Pokemon",
  data() {
    return {
      pokemon: "",
    };
  },
  computed: {
    pokemonUrl: {
      get() {
        let pokeId = this.$store.state.pokemon.id;
        return pokeId;
      },
    } as any,
  },
  mounted() {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${this.pokeId}`)
      .then((response) => {
        this.pokemon = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
});
</script>

<style src=“./Pokemon.scss“ lang="scss" />
