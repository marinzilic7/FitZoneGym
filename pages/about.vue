<template>
  <nav>
    <Navbar />
  </nav>

  <div class="main-text d-flex justify-content-center align-items-center">
    <div class="col-lg-6 col-12 col-md-10 col-sm-11 col-xl-6 flex-column align-items-center justify-content-center">
      <p class="text-light">
        FITZONE Gym is the ultimate fitness destination designed for people of
        all levels, from beginners to professional athletes. Located in the
        heart of the city, our state-of-the-art facility spans over 1,000 square
        meters, offering the perfect environment to achieve your fitness goals.
        Whether you’re looking to build muscle, lose weight, or simply stay
        active, FITZONE has everything you need. Our spacious and modern gym
        provides a motivating atmosphere where members can train comfortably and
        efficiently.
      </p>
      <p class="text-light">
        At FITZONE, we believe that quality training requires top-tier
        equipment. Our gym is equipped with cutting-edge machines and free
        weights, ensuring that every workout is effective and enjoyable. The
        strength training area includes a wide range of weights for all levels,
        while the cardio section features the latest treadmills, ellipticals,
        and rowing machines. For those who enjoy functional training, we have a
        dedicated space for CrossFit and high-intensity interval training.
        Spacious locker rooms with showers and personal lockers provide comfort
        and convenience for all members.
      </p>
      <p class="text-light">
        Our team of certified personal trainers is dedicated to helping members
        achieve their fitness goals. Each trainer specializes in different
        areas, ensuring that every individual receives expert guidance tailored
        to their needs. Personalized training programs are available, as well as
        group classes designed to keep members motivated and engaged. From yoga
        and Zumba to strength conditioning and rehabilitation exercises, FITZONE
        offers a variety of programs to suit different fitness levels and
        interests. Nutritional coaching is also available to help members
        optimize their diet and maximize results.
      </p>
      <p class="text-light">
        FITZONE is more than just a gym—it’s a community where members support
        and inspire each other. The friendly and welcoming atmosphere makes
        every workout session enjoyable. Regular fitness challenges, social
        events, and workshops create opportunities for members to connect and
        stay motivated. Whether you are training solo or with friends, FITZONE
        provides the perfect environment to push your limits and achieve new
        milestones. Joining FITZONE means becoming part of a fitness family that
        encourages growth, strength, and overall well-being.
      </p>
    </div>
  </div>
  <Footer />
</template>

<style scoped lang="scss">
.main-text {
  margin: 7rem 1rem !important;
  p{
    text-align: justify;
  }
}

@media screen and (max-width:576px){
    .main-text{
      margin: 0;
        p{
            font-size: 12px;
            text-align: justify;
        }
    }
}
</style>
