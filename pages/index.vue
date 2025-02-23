<template>
  <nav>
    <!-- <Navbar /> -->
  </nav>
  <div>
    <div class="main-items p-5">
      <h1 class="fitzone-heading mt-lg-5">FitZone</h1>
      <p class="text-light mt-lg-4 mt-3">
        Fitness is not just about working out – it's a lifestyle that enhances
        <span class="line-break"
          >both physical and mental health. Regular physical activity
          helps</span
        >

        <span class="line-break"
          >strengthen muscles, improve endurance, and reduce the risk of
          various</span
        >
        <span class="line-break">
          diseases such as diabetes and heart problems. There are many ways
          to</span
        >
        <span class="line-break">
          stay fit, from going to the gym and running to yoga and swimming.
          The</span
        >
        <span class="line-break">
          most important thing is to find an activity you enjoy and stay</span
        >
        <span class="line-break">
          consistent. Combined with a balanced diet and proper rest, fitness
          can</span
        >
        <span class="line-break">
          significantly improve overall quality of life.</span
        >
      </p>
      <button class="btn mt-4">Get Started</button>
      <div
        class="about-clients d-flex gap-5 justify-content-between col-lg-3 col-md-6 col-sm-12 col-xs-12 mt-5"
      >
        <div class="">
          <h3>4k+</h3>
          <p>Clients</p>
        </div>
        <div>
          <h3>3.4k+</h3>
          <p>Happy Client</p>
        </div>
        <div>
          <h3>3k+</h3>
          <p>Perfect Result</p>
        </div>
      </div>
    </div>
  </div>
  <Services/>
  <Gallery/>
  <Trainers/>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.main-items {
  background-image: url("@/public/images/home.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;

  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1;
  }

  h1,
  p,
  button,
  .about-clients {
    position: relative;
    z-index: 2;
  }

  h1 {
    font-size: 4rem;

    letter-spacing: 2px;
    color: $button-color;
  }

  p {
    line-height: 1.7;
  }
  .line-break {
    display: block;
  }

  button {
    background-color: $button-color;
    color: #000;

    &:hover {
      background-color: darken($button-color, 10%);
    }
  }

  .about-clients {
    h3 {
      font-size: 2rem;
      color: $button-color;
      font-style: italic;
    }
    p {
      color: $button-color;
    }
  }
}

@media screen and (max-width: 768px) {
  .main-items {
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 0.9rem;
    }
    .line-break {
      display: inline;
    }

    button {
      font-size: 0.8rem;
    }
    .about-clients {
      h3 {
        font-size: 1.5rem;
      }
      p {
        font-size: 0.7rem;
      }
    }
  }
}
</style>
