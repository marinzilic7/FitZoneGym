<template>
    <Navbar />
  <div class="container-fluid vh-100">
    <div
      class="form-items d-flex justify-content-center align-items-center vh-100"
    >
      <form class="col-lg-6 col-md-10 col-sm-10 col-xl-3 col-12 ">
        <div class="mb-3 mt-3">
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Full name"
            autocomplete="off"
          />
        </div>
        <div class="mb-3 mt-3">
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email"
            autocomplete="off"
          />
        </div>
        <div class="mb-3 mt-3">
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            autocomplete="off"
          />
        </div>
        <button type="submit" class="btn btn-primary w-100">Sign Up</button>
        <p class="text-light mt-2">
          Aleready have an account? <span class="fw-bold">Sign In</span>
        </p>
        <p class="text-center text-light mt-5">Or sign in with</p>
        <div class="d-flex justify-content-center gap-3 mt-3 align-items-center">
          <img src="@/public/icons/facebook.png " alt="facebook" width="30px" />
          <img src="@/public/icons/apple.png " alt="apple" width="35px" />
          <img src="@/public/icons/google.png " alt="google"  width="40px"/>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.container-fluid {
  background-color: $dark-color;
}

form {
  background-color: $primary-color;
  padding: 3rem;
  border-radius: 30px !important;
  input {
    background-color: $primary-color;
    color: #fff;
    padding: 10px;
    border-radius: 20px;
    &::placeholder {
      color: #fff;
      opacity: 0.5;
    }

    &:focus {
      background-color: $primary-color;
      color: #fff;
    }
  }
  button {
    background-color: $button-color;
    color: #000;
    border: none;
    border-radius: 20px;
    &:hover {
      background-color: darken($button-color, 10%);
      color: #000;
    }
  }
  p {
    font-size: 12px;
  }
}

@media screen and (max-width: 576px) {
    .container-fluid{
        background-color: $primary-color;
    }
    form{
        padding:0; 
        input{
            width: 100%;
        }
    }
}
</style>
