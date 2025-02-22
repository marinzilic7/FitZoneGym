<script setup>
import services from "~/static/services.json";
</script>

<template>
  <div class="main-services mt-5 p-lg-5 pt-5 p-md-5 p-sm-3">
    <h1 class="text-center mb-3 mt-5">Our Services</h1>
    <div class="card-items mt-5">
      <div
        v-for="servis in services"
        :key="servis.id"
        class="card p-0"
        style="width: 18rem"
        data-aos="fade-right"
      >
        <img :src="servis.image" class="card-img-top p-3" alt="..." />

        <div class="card-body">
          <h5 class="card-title">{{ servis.name }}</h5>
          <p class="card-text">
            {{ servis.description }}
          </p>
        </div>

        <div
          class="card-body d-flex align-items-center justify-content-between"
        >
          <button class="btn">Read More</button>
          <button class="btn">Buy Plan</button>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center align-items-center">
      <button class="show-more btn">Show more</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/variables";
.main-services {
  background-color: $dark-color;
  h1 {
    color: $button-color;
    font-style: italic;
  }

  .card-items {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    align-items: stretch;
  }
  .card {
    border-radius: 20px;
    background-color: $card-color;
    transition: 0.4s;
    height: 100%;
    &:hover {
      border: 1px solid $button-color;
      button {
        background-color: $button-color;
        color: #fff;
      }
    }
    img {
      border-radius: 20px;
    }
    h5 {
      font-size: 20px;
      color: #fff;
    }
    p {
      font-size: 13px;
      color: #fff;
    }

    button {
      border: 1px solid $button-color;
      color: #fff;
      font-size: 13px;
      padding: 5px;
    }
  }

  .show-more{
    background-color: $button-color;
    color: #000;
    border: none;
    margin-top: 20px;
    font-size:14px; 
    &:hover{
      background-color: darken($button-color, 10%);
    }
  }
}

@media screen and (max-width: 1240px) {
  .card-items {
    display: grid;
    grid-template-columns: repeat(3, 1fr) !important;
    gap: 30px;
  }

  .card {
    width: 100% !important;
  }
}

@media screen and (max-width: 960px) {
  .card-items {
    display: grid;
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 30px;
  }

  .card {
    width: 100% !important;
  }
}

@media screen and (max-width: 768px) {
  .card-items {
    display: grid;
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 30px;
  }

  .card {
    width: 100% !important;
  }
}

@media screen and (max-width: 576px) {
  .main-services {
    margin: 0;
    padding: 0 15px;
    h1 {
      margin: 0 !important;
    }
  }
  .card-items {
    display: grid;
    grid-template-columns: repeat(1, 1fr) !important;
    gap: 30px;
  }

  .card {
    width: 100% !important;
  }
}
</style>
