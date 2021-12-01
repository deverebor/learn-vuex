<template>
  <div class="container mt-16">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
      <div class="col" :key="product.id" v-for="product in products">
        <div class="card shadow-sm">
          <svg
            class="bd-placeholder-img card-img-top"
            width="100%"
            height="225"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: Thumbnail"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#44495c"></rect>
            <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
          </svg>

          <div class="card-body">
            <p class="card-text">
              {{ product.name }}
            </p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button
                  @click="addToCart(product)"
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                >
                  Adicionar
                </button>
              </div>
              <small class="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="callbackResult">
    <div>
      <h1 class="callbackTitle">Resultado da Chamada</h1>
      <code>
        {{ $store.state.cart }}
      </code>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { App } from "../src/utils/interfaces/App";

export default defineComponent<App>({
  name: "App",
  data() {
    return {
      products: [
        { id: 1, name: "Product 1" },
        { id: 2, name: "Product 2" },
        { id: 3, name: "Product 3" },
      ],
    };
  },
  methods: {
    addToCart(product: string) {
      this.$store.commit("addProduct", product);
    },
  },
});
</script>

<style src="./App.scss" lang="scss" />
