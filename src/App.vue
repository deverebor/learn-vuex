<template>
  <div class="container mt-8">
    <span class="user-name">
      {{ $store.state.user.firstName }} {{ $store.state.user.lastName }}
    </span>
    <br />
    <label id="top-label" for="">Primeiro Nome</label>
    <br />
    <input class="form-control" v-model="changeFirstName" type="text" />
    <br />
    <label for="">Sobre Nome</label>
    <br />
    <input class="form-control" v-model="changeLastName" type="text" />

    <button class="btn btn-primary" @click.prevent.stop="saveName">Save</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { App } from "../src/utils/interfaces/App";

export default defineComponent<App>({
  name: "App",
  data() {
    return {
      myName: "",
    };
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
