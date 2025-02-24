<template>
  <div class="main-programs d-flex justify-content-evenly flex-wrap align-items-center mt-5">
    <div
      class="programs p-5 d-flex flex-column justify-content-center align-items-center gap-5"
    >
      <div>
        <h3>Basic</h3>
        <h3>50%/Month</h3>
      </div>
      <div>
        <ul>
          <li class="text-light">Cost-Effective Option</li>
          <li class="text-light">Limited Amentities</li>
          <li class="text-light">Group Fitness Classes</li>
          <li class="text-light">Locker Room</li>
        </ul>
      </div>
      <button class="btn btn-warning btn-sm">Buy Now</button>
    </div>
    <div
      class="programs p-5 d-flex flex-column justify-content-center align-items-center gap-5"
    >
      <div>
        <h3>Basic</h3>
        <h3>50%/Month</h3>
      </div>
      <div>
        <ul>
          <li class="text-light">Cost-Effective Option</li>
          <li class="text-light">Limited Amentities</li>
          <li class="text-light">Group Fitness Classes</li>
          <li class="text-light">Locker Room</li>
        </ul>
      </div>
      <button class="btn btn-warning btn-sm">Buy Now</button>
    </div>
    <div
      class="programs p-5 d-flex flex-column justify-content-center align-items-center gap-5"
    >
      <div>
        <h3>Basic</h3>
        <h3>50%/Month</h3>
      </div>
      <div>
        <ul>
          <li class="text-light">Cost-Effective Option</li>
          <li class="text-light">Limited Amentities</li>
          <li class="text-light">Group Fitness Classes</li>
          <li class="text-light">Locker Room</li>
        </ul>
      </div>
      <button class="btn btn-warning btn-sm">Buy Now</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.programs {
  background-color: $dark-color;
  transition: all 0.3s ease-in-out;
  border-radius: 30px;
  cursor: pointer;
  &:hover {
    outline: 1px solid $button-color;
    transform: scale(1.05);
  }
  h3 {
    color: $button-color;
    font-style: italic;
  }
  li {
    line-height: 2.5;
  }
  button {
    border: 1px solid $button-color;
    color: #fff;
    font-size: 13px;
    padding: 10px;
    background: none;
    &:hover {
      background-color: $button-color;
      color: #000;
    }
  }
}

@media screen and (max-width: 576px) {
  .main-programs {
    display: flex;
    flex-direction: column;
    gap:3rem;
  }

  .programs{
    width: 100%;

    h3{
      font-size: 20px;
    }
    li{
      font-size: 15px;
    }
  }
}
</style>
