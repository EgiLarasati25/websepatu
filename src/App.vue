<template>
  <div id="app">
    <router-view />
    <FooterBar />
  </div>
</template>

<script>
import FooterBar from "@/components/FooterBar.vue"

export default {
  components: {
    FooterBar
  }
}
</script>