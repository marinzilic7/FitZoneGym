<script setup>
const images = [
  {
    src: "/images/gallery/gallery.jpg",
    alt: "gallery1",
    height: "400px",
  },
  {
    src: "images/gallery/gallery2.jpg",
    alt: "gallery2",
    width: "500px",
  },
  {
    src: "images/gallery/gallery3.jpg",
    alt: "gallery3",
    width: "300px",
  },
  {
    src: "images/gallery/gallery4.jpg",
    alt: "gallery4",
    width: "400px",
  },
  {
    src: "images/gallery/gallery7.jpg",
    alt: "gallery4",
    height: "350px",
  },
  {
    src: "images/gallery/gallery5.jpg",
    alt: "gallery5",
    width: "350px",
  },
  {
    src: "images/gallery/gallery8.jpg",
    alt: "gallery5",
    width: "350px",
  },
  {
    src: "images/gallery/gallery10.jpg",
    alt: "gallery5",
    width: "450px",
  },
  {
    src: "images/gallery/gallery11.jpg",
    alt: "gallery5",
    width: "300px",
  },
  {
    src: "images/gallery/gallery9.jpg",
    alt: "gallery5",
    height: "350px",
  },
];

const selectedImage = ref(null);

const setSelectedImage = (image) => {
  selectedImage.value = image;
};
</script>

<template>
  <div class="main-gallery mt-5 p-5">
    <div class="gallery-items">
      <h1 class="text-center">Gallery</h1>
      <div
        class="gallery d-flex justify-content-center flex-wrap align-items-center"
        data-aos="fade-right"
      >
        <div class="list-images" v-for="(image, index) in images" :key="index">
          <img
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever="@mdo"
            :src="image.src"
            :alt="image.alt"
            :width="image.width"
            :height="image.height"
            @click="setSelectedImage(image)"
            :class="{
              'first-image': index === 0 || index === 4 || index === 9,
            }"
          />
        </div>
      </div>
      <div class="d-flex justify-content-center align-items-center">
        <button class="btn">Show More</button>
      </div>
      "
    </div>
  </div>

  <!-- Modal  -->

  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content bg-transparent border-0">
        <div
          class="modal-body p-0 d-flex align-items-center justify-content-center"
        >
          <div class="img-btn-x position-relative">
            <img
              v-if="selectedImage"
              :src="selectedImage.src"
              :alt="selectedImage.alt"
              class="img-fluid"
            />
            <button
              type="button"
              class="btn-close btn-close-white z-3 position-absolute top-0 end-0 m-3"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/variables";

.main-gallery {
  background-color: $dark-color;
  button {
    margin-top: 20px;
    background-color: $button-color;
    color: #000;
    font-size: 14px;
  }
  h1 {
    color: $button-color;
    font-style: italic;
  }
  .gallery {
    img {
      border-radius: 20px;
      margin: 10px;
      opacity: 0.9;
      transition: all 0.3s;
      cursor: pointer;
      &:hover {
        border: 1.5px solid $button-color;
        transform: scale(1.1);
      }
    }
  }
}

@media screen and (max-width: 1240px) {
  .gallery {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  }
}

@media screen and (max-width: 876px) {
  .gallery {
    display: grid;
    grid-template-columns: repeat(2, 1fr) !important;
    justify-items: center;

    img {
      &:nth-child(1) {
        width: auto;
        height: 250px;
      }
      &:nth-child(2) {
        width: 250px;
        height: auto;
      }

      &:nth-child(4) {
        width: 240px;
        height: auto;
      }

      &:nth-child(5) {
        width: auto;
        height: 250px;
      }

      &:nth-child(6) {
        width: 300px;
        height: auto;
      }

      &:nth-child(7) {
        width: 300px;
        height: auto;
      }

      &:nth-child(8) {
        width: auto;
        height: 250px;
      }

      &:nth-child(9) {
        width: 250px;
        height: auto;
      }

      &:nth-child(10) {
        width: auto;
        height: 250px;
      }
    }
  }
}

@media screen and (max-width: 576px) {
  .gallery {
    display: grid;
    grid-template-columns: repeat(1, 1fr) !important;
    justify-items: center;
    align-items: stretch;

    img {
      max-width: 100%;
      height: auto;
    }

    .first-image {
      display: none;
    }
  }
  .img-btn-x {
    img {
      height: 350px;
    }
  }
}
</style>
