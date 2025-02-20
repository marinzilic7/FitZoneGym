<script setup>

</script>

<template>
  <nav class="navbar navbar-expand-lg py-3">
    <div class="container-fluid">
      <NuxtLink class="navbar-brand" to="/"
        ><img src="@/assets/images/logo.png" alt="logo" height="40px"
      /></NuxtLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav gap-5 ms-auto mb-2 mb-lg-0">
          <li class="nav-item ">
            <NuxtLink class="nav-link text-light" to="/" exact-active-class="active-link"> Home </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link text-light" exact-active-class="active-link"  to="/membership">
              Membership
            </NuxtLink>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" exact-active-class="active-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light"  exact-active-class="active-link" href="#">Contact</a>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto d-flex gap-3">
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

.navbar {
  background: $primary-color;
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
</style>
