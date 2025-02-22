<template>
  <div class="main-gallery mt-5 p-5">
    <div class="gallery-items">
      <h1 class="text-center">Gallery</h1>
      <div
        class="gallery d-flex justify-content-center flex-wrap align-items-center"
        data-aos="fade-right"
      >
        <img
          src="@/public/images/gallery/gallery.jpg"
          alt="gallery1"
          height="400px"
        />
        <img
          src="@/public/images/gallery/gallery2.jpg"
          alt="gallery2"
          width="500px"
        />
        <img
          src="@/public/images/gallery/gallery3.jpg"
          alt="gallery3"
          width="300px"
        />
        <img
          src="@/public/images/gallery/gallery4.jpg"
          alt="gallery4"
          width="400px"
        />
        <img
          src="@/public/images/gallery/gallery7.jpg"
          alt="gallery4"
          height="350px"
        />

        <img
          src="@/public/images/gallery/gallery5.jpg"
          alt="gallery5"
          width="350px"
        />

        <img
          src="@/public/images/gallery/gallery8.jpg"
          alt="gallery5"
          width="350px"
        />
        <img
          src="@/public/images/gallery/gallery10.jpg"
          alt="gallery5"
          width="450px"
        />
        <img
          src="@/public/images/gallery/gallery11.jpg"
          alt="gallery5"
          width="300px"
        />
        <img
          src="@/public/images/gallery/gallery9.jpg"
          alt="gallery5"
          height="350px"
        />
      </div>
      <div class="d-flex justify-content-center align-items-center">
        <button class="btn">Show More</button>
      </div>
      "
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
    grid-template-columns: repeat(3, 1fr);

    img {
      &:nth-child(1) {
        width: auto;
        height: 150px;
      }
      &:nth-child(2) {
        width: 150px;
        height: auto;
      }

      &:nth-child(4) {
        width: 140px;
        height: auto;
      }

      &:nth-child(5) {
        width: auto;
        height: 150px;
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
        height: 200px;
      }

      &:nth-child(9) {
        width: 150px;
        height: auto;
      }

      &:nth-child(10) {
        width: auto;
        height: 150px;
      }
    }
  }
}
</style>
