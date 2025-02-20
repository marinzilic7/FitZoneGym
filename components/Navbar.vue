<script setup>
const isOpen = ref(false);

const toggleNavbar = () => {
  isOpen.value = true;
  const burger1 = document.querySelector(".burger-1");
  const burger2 = document.querySelector(".burger-2");
  const burger3 = document.querySelector(".burger-3");

  burger1.classList.toggle("active");
  burger2.classList.toggle("active");
  burger3.classList.toggle("active");


  setTimeout(() => {
    isOpen.value = false;
  }, 500);
};
</script>

<template>
  <nav class="navbar navbar-expand-lg py-3">
    <div class="container-fluid">
      <NuxtLink class="navbar-brand" to="/"
        ><img src="@/assets/images/logo.png" alt="logo" height="40px"
      /></NuxtLink>
      <button
        @click="toggleNavbar"
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        :disabled="isOpen"
      >
        <div class="burger d-flex gap-2 flex-column">
          <div class="burger-1"></div>
          <div class="burger-2"></div>
          <div class="burger-3"></div>
        </div>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav gap-lg-5 gap-md-3 ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <NuxtLink
              class="nav-link text-light text-center"
              to="/"
              exact-active-class="active-link"
            >
              Home
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink
              class="nav-link text-light text-center"
              exact-active-class="active-link"
              to="/membership"
            >
              Membership
            </NuxtLink>
          </li>
          <li class="nav-item">
            <a
              class="nav-link text-light text-center"
              exact-active-class="active-link"
              href="#"
              >About</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link text-light text-center"
              exact-active-class="active-link"
              href="#"
              >Contact</a
            >
          </li>
        </ul>
        <ul
          class="buttons navbar-nav ms-auto d-flex flex-sm-row flex-md-row justify-content-center gap-3"
        >
          <li class="nav-item">
            <button class="button-register btn"><a href="">Sign Up</a></button>
          </li>
          <li class="nav-item">
            <button class="button-login btn"><a href="">Sign In</a></button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
@import "@/assets/scss/variables";

.burger {
  cursor: pointer;
}

.burger-1,
.burger-2,
.burger-3 {
  height: 3px;
  width: 30px;
  background-color: white;
  transition: all 0.2s ease;
}

.burger-1.active {
  transform: rotate(45deg) translate(9px, 5px);
}

.burger-2.active {
  opacity: 0;
}

.burger-3.active {
  transform: rotate(-45deg) translate(10px, -7px);
}

.navbar {
  background: $primary-color;
}

.nav-link {
  &:hover {
    color: $button-color !important;
  }
}

.button-register {
  background-color: $button-color;
  a {
    color: #000;
    text-decoration: none;
    font-style: italic;
  }
  &:hover {
    background-color: darken($button-color, 10%);
  }
}

.button-login {
  border: 1px solid $button-color;
  a {
    color: $button-color;
    text-decoration: none;
    font-style: italic;
  }
  &:hover {
    background-color: $button-color;
    a {
      color: #000;
    }
  }
}

.active-link {
  color: $button-color !important;
}

.navbar-toggler {
  border: none;
}

.navbar-toggler-icon {
  filter: invert(1); // Obojava ikonice u bijelo
}

.button-register,
.button-login {
  width: 100%; // Na mobilnim uređajima

  @media (min-width: 576px) {
    // Bootstrap "sm" breakpoint (≥576px)
    width: auto;
  }
}
</style>
