<template>
  <div class="container mt-8">
    <Pokemon></Pokemon>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import  Pokemon  from "./components/Pokemon/Pokemon.vue";
import { IApp } from "./utils/interfaces/IApp";

export default defineComponent<IApp>({
  name: "App",
  components: {
    Pokemon,
  },
});
</script>

<style src="./App.scss" lang="scss" />
