<template>
  <nav>
    <Navbar />
  </nav>
  <div>
    <h5 class="mt-5 text-center">
      To contact with us you are invited to visit our cetnre and also can his us
      below way
    </h5>
    <div class="contact-items d-flex justify-content-evenly ">
      <div class="d-flex flex-column gap-5">
        <h4 class="text-light">Our Address;</h4>
        <h4 class="text-light">24 street, House : 23,4th Floor</h4>
        <h4 class="text-light">California, United States</h4>
      </div>
      <div >
        <div class="d-flex flex-column gap-5">
          <div class="d-flex gap-3">
            <img src="@/public/icons/gmail.png" alt="gmail" width="35px" />
            <h4 class="text-light">fit_zone@gmail.com</h4>
          </div>
          <div class="d-flex gap-3">
            <img
              src="@/public/icons/facebook.png"
              alt="facebook"
              width="35px"
            />
            <h4 class="text-light">www.facebook.com/fit_zonecentre</h4>
          </div>
          <div class="d-flex gap-3">
            <img
              src="@/public/icons/instagram.png"
              alt="instagram"
              width="35px"
            />
            <h4 class="text-light">www.instagram.com/fit_zonecentre</h4>
          </div>
          <div class="d-flex gap-3">
            <img src="@/public/icons/x.png" alt="x" width="35px" />
            <h4 class="text-light">www.twitter.com/fit_zonecentre</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/variables";

.contact-items{
  margin-top: 7rem;
}

h5 {
  color: $button-color;
  font-style: italic;
}
</style>
