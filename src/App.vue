<template>
  <div class="container mt-8">
    <Pokemon />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import  Pokemon  from "./components/Pokemon/Pokemon.vue";
import { App } from "../src/utils/interfaces/App";

export default defineComponent<App>({
  name: "App",
  data() {
    return {
      myName: "",
    };
  },
  components: {
    Pokemon,
  },
  computed: {
    changeFirstName: {
      get() {
        return this.$store.state.user.firstName;
      },
      set(value: string) {
        this.$store.commit("saveFirstName", value);
      },
    } as any,

    changeLastName: {
      get() {
        return this.$store.state.user.lastName;
      },
      set(value: string) {
        this.$store.commit("saveLastName", value);
      },
    } as any,
  },
  methods: {
    saveName() {
      //Action
      this.$store.dispatch("saveFirstName", this.myName);

      //Mutation
      //this.$store.commit('saveFirstName', this.myName);
    },
  },
});
</script>

<style src="./App.scss" lang="scss" />
