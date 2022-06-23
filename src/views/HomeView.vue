<template>
  <div class="home">
    <NavBar />
    <div class="container">
      <HeroBar />
    </div>
  </div>
</template>

<script>
import NavBar from "@vue/components/NavBar.vue";
import HeroBar from "@vue/components/NavBar.vue";

export default {
  name: "HomeView",
  components: {
    NavBar,
    HeroBar,
  },
};
</script>
