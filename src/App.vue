<template>
  {{ $store.state.user.firstName }}
  <br />
  <input v-model="myName" type="text" />

  <button @click.prevent.stop="saveName">Save</button>
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import { App } from "../src/utils/interfaces/App";

export default defineComponent<App>({
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      myName: "",
    };
  },
  methods: {
    saveName(){
      //Action
      this.$store.dispatch('saveFirstName', this.myName);

      //Mutation
      //this.$store.commit('saveFirstName', this.myName);
    },
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
