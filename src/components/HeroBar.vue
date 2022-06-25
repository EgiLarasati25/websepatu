<template>
  <div class="hero">
    <!-- dekstop -->
    <div class="d-none d-md-block">
      <div class="row mt-4">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center.align-self-center">
              <h2>
                <strong>Kenyamanan Tanpa Batas, </strong><br />Sepatu Anak
                Exclusive
              </h2>
              <p>Ayo segera pilih dan pesan sepatu kesayangan anda</p>
              <router-link class="btn btn-lg btn-succes" to="/barang">
                <b-arrow-right></b-arrow-right>Pesan
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="../assets/images/hero.png" width="100%" />
        </div>
      </div>
    </div>

    <!-- mobile -->
    <div class="d-sm-block d-md-none">
      <div class="row mt-4">
        <div class="col-md-6 mb-3">
          <img src="../assets/images/hero.png" width="100%" />
        </div>
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center.align-self-center">
              <h2>
                <strong>Kenyamanan Tanpa Batas, </strong><br />Sepatu Anak
                Exclusive
              </h2>
              <p>Ayo segera pilih dan pesan sepatu kesayangan anda</p>
              <button class="btn btn-lg btn-succes">
                <b-arrow-right></b-arrow-right>Pesan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroBar",
};
</script>
