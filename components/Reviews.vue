<template>
  <div id="carouselExampleCaptions" class="carousel slide mt-5" data-bs-ride="carousel" data-bs-interval="3000">
  
    <div class="carousel-indicators ">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
      
    </div>
    
    <div class="carousel-inner p-5 ">
        <h3>Reviews</h3>
      <div class="carousel-item active mt-lg-5 mt-3 ">
        <p class="first-item text-center">
          I've been going to this gym for a few months now, and I love it! The
          equipment is well-maintained, and there’s plenty of space even during
          peak hours. The staff is friendly and always ready to help with any
          questions. The atmosphere is motivating, and the music keeps me pumped
          throughout my workout. They also offer a variety of classes, which is
          great for mixing up my routine. Overall, it's a fantastic place to
          train!
        </p>
       <p class="text-name text-end col-lg-10 mt-4">John Smith</p>
      </div>
      <div class="carousel-item mt-lg-5 mt-3 ">
       
        <p class="first-item">
          This gym has everything I need for a great workout. The machines are
          modern, and there's a good selection of free weights. The personal
          trainers are knowledgeable and supportive, always giving great tips. I
          also appreciate how clean and well-organized the facility is. There’s
          a good mix of people, from beginners to experienced athletes, so
          everyone feels welcome. Definitely one of the best gyms I’ve been to!
          
        </p>
        <p class=" text-name text-end col-lg-10 mt-4">Samantha Morrison</p>
      </div>
      <div class="carousel-item mt-lg-5 mt-3 ">
        <p class="first-item">
          I recently joined this gym, and I’m really impressed. The membership
          prices are reasonable for the quality of the facilities. The locker
          rooms are always clean, and there’s plenty of parking outside. The
          staff is approachable and willing to help with workout advice. I
          especially like the group classes—they're fun and challenging. If
          you're looking for a gym that’s well-equipped and welcoming, this is
          the place!
        </p>
        <p class="text-name text-end col-lg-10 mt-4">The Rock</p>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>



<style scoped lang="scss">
@import "@/assets/scss/variables";

.carousel-inner{
    background-color: $dark-color;
    color: #fff;
    h3{
        color: $button-color;
        font-style: italic;
        text-align: center;
        font-size: 2rem;
    }

    .first-item{
        max-width: 1000px;
        margin: 0 auto;
      
       
    }
    font-style: italic;
        .text-name{
            color : $button-color !important;
            font-weight: 700;
        }
    @media screen and (max-width: 576px) {
        .first-item{
            font-size: 12px;
        }
    }
}




</style>
