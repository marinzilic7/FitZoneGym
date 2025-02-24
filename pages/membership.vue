
<script setup>

import Programs from '~/components/membership/Programs.vue'

</script>

<template>
  <nav>
    <Navbar />
  </nav>
  <main>
    <div class="main-items p-0 ps-3 pe-3  p-lg-5 p-md-5 p-sm-5 p-xl-5 mt-5">
      <h5 class="fitzone-heading text-center mt-lg-3">
        Here we provide you the best facilities ever
      </h5>
        <Programs />
    </div>
  </main>
  <Footer/>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.main-items {
  margin: 5rem 0 !important;
  h5 {
    color: $button-color;
  }
}



</style>
