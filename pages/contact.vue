<template>
  <nav>
    <Navbar />
  </nav>
  <div>
    <h5 class="h5-heading mt-5 text-center">
      To contact with us you are invited to visit our cetnre and also can his us
      below way
    </h5>
    <div class="contact-items d-flex justify-content-evenly  flex-wrap ">
      <div class="d-flex flex-column gap-5">
        <h5 class="text-light">Our Address;</h5>
        <h5 class="text-light">24 street, House : 23,4th Floor</h5>
        <h5 class="text-light">California, United States</h5>
      </div>
      <div >
        <div class="d-flex flex-column flex-wrap mt-5 mt-lg-0 mt-md-0 gap-5">
          <div class="d-flex gap-3">
            <img src="@/public/icons/gmail.png" alt="gmail" width="35px" />
            <h5 class="text-light">fit_zone@gmail.com</h5>
          </div>
          <div class="d-flex gap-3">
            <img
              src="@/public/icons/facebook.png"
              alt="facebook"
              width="35px"
            />
            <h5 class="text-light">www.facebook.com/fit_zonecentre</h5>
          </div>
          <div class="d-flex gap-3">
            <img
              src="@/public/icons/instagram.png"
              alt="instagram"
              width="35px"
            />
            <h5 class="text-light">www.instagram.com/fit_zonecentre</h5>
          </div>
          <div class="d-flex gap-3">
            <img src="@/public/icons/x.png" alt="x" width="35px" />
            <h5 class="text-light">www.twitter.com/fit_zonecentre</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style scoped lang="scss">
@import "@/assets/scss/variables";

.contact-items{
  margin: 7rem 0;
}

.h5-heading {
  color: $button-color;
  font-style: italic;
}

@media screen and (max-width:878px){
  h5{
      font-size: 14px;
      margin: 0 2rem;
    }
  .contact-items{
   
    h4{
      font-size: 14px;
    }
    img{
      width: 25px;
    }
  }
}

@media screen and (max-width:576px){
  h5{
      font-size: 14px;
      margin: 0 2rem;
    }
  .contact-items{
   
    h4{
      font-size: 14px;
    }
    img{
      width: 25px;
    }
  }
}
 
</style>
