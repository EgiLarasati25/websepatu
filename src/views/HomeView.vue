<template>
  <div class="home">
    <NavBar />
    <div class="container">
      <HeroBar />
      <div class="row mt-4">
        <div class="col">
          <h2>Best <strong>Shoes</strong></h2>
        </div>
        <div class="col">
          <router-link to="/barang" class="btn btn-success float-right">
            <b-icon-eye></b-icon-eye>Lihat Semua
          </router-link>
        </div>
      </div>

      <div class="row mb-4">
        <div class="col-md-4 mt-4" v-for="product in products" :key="product.id">
          <CardProduct :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@vue/components/NavBar.vue";
import HeroBar from "@vue/components/NavBar.vue";
import CardProduct from "@vue/components/CardProduct.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    NavBar,
    HeroBar,
    CardProduct,
  },
  data() {
    return {
      products: []
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    }
  },
  mounted() {
    axios
      .get('http://localhost:3000/best-products')
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log(error))
  },
};
</script>
