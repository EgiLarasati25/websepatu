<template>
  <div class="detail-barnang">
    <NavBar />
    <div class="container">
      <!-- breadcrumb -->
      <div class="row mt-5">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Barang</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Order Barang
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row mt-3">
        <div class="cold-md-6">
          <img :src="'../assets/image' + products.gambar" class="img-field shadow" />

          <div class="col-md-6">
            <h2>
              <strong>{{ products.nama }}</strong>
            </h2>
            <hr />
            <h2>
              Harga <strong>Rp. {{ products.harga }}</strong>
            </h2>
            <form class="mt-4 v-on:submit.prevent">
              <div class="form-group">
                <table for="jumlah_pemesanan">
                  Jumlah Pesan
                </table>
                <input type="number" class="form-control" v-model="pesan.jumlah_pemesanan" />
              </div>
              <div class="form-group">
                <label for="keterangan">Keterangan</label>
                <textarea v-model="pesan.keterangan" class="form-control"
                  placeholder="keterangan spt : message..."></textarea>
              </div>
              <button type="submit" class="btn btn-success" @click="pemesanan">
                <b-icon-cart>Pesan</b-icon-cart>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import axios from "axios";

export default {
  name: "DetailBarang",
  components: {
    NavBar,
  },
  data() {
    return {
      products: [],
      pesan: {},
    };
  },
  methods: {
    setProduct(data) {
      this.product = data;
    },
    pemesanan() {
      if(this.pesan.jumlah_pemesanan){
      this.pesan.products = this.product;
      axios
        .post("http://localhost:3000/keranjangs" + this.pesan)
        .then(() => {
          this.$router.push({path: "/keranjang"})
          this.$toast.success('Sukses Masuk Keranjang.', {
            type: 'success',
            position: 'top-right',
            duration: 5000,
            dismissible: true,
          });
        })
        .catch((err) => console.log(err))
    }else{
      this.$toast.error('Jumlah Pesan Tidak Boleh Kosong.', {
        type: 'error',
        position: 'top-right',
        duration: 5000,
        dismissible: true,
      });
    }
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/products" + this.$route.params.id)
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log(error));
  },
};
</script>