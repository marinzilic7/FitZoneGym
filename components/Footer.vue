<template>
  <footer>
    <div class="grid">
      <div class="footer-details">
        <div class="">
          <img src="@/public/images/logo-png.png" alt="" />
          <p class="text-light">
            Fitzone is a fitness paradise where
            <span class="line-break">your goals become a reality! With</span>
            <span class="line-break">its state-of-the-art equipment</span>
            <span class="line-break">motivating trainers, and vibrant</span>
            <span class="line-break">atmosphere, its the ultimate</span>
            <span class="line-break"
              >destination for your fitness journey.</span
            >
          </p>
        </div>
        <div>
          <h5>Working Hours</h5>
          <div class="line-height-items">
            <p class="text-light">
              Sunday - Friday open
              <span class="line-break">at 7:00 - 22:00</span>
            </p>
            <p class="text-light">Sunday at 10:00 - 17:00</p>
          </div>
        </div>
        <div>
          <h5>Support</h5>
          <div class="line-height-items">
            <p class="text-light">FAQ</p>
            <p class="text-light">Policy</p>
            <p class="text-light">Business</p>
            <p class="text-light">Licence</p>
          </div>
        </div>
        <div>
          <h5>Update For Newsletter</h5>
          <div class="input-group mb-3">
            <input
              type="text"
              class="search-item form-control"
              placeholder="Your mail"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <span
              class="input-group-text bg-warning text-dark border-0 fw-bold"
              id="basic-addon2"
              >Subscribe</span
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
@import "@/assets/scss/variables";

footer {
  background-image: url("https://cdn.shopify.com/s/files/1/0141/5242/t/16/assets/fitsix-4-bright_LIQo.jpg?v=162012172235");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  padding: 5rem;

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
  .footer-details {
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;

    z-index: 2;
  }
}

.search-item {
  opacity: 0.5;
  background: none !important;
  color: #fff;

  &::placeholder {
    font-style: italic;
    color: #fff;
  }
}
.line-break {
  display: block;
}

h5 {
  color: $button-color;
}

@media screen and (max-width: 576px) {
  footer {
    padding: 1rem 0;
  }
  .footer-details {
    display: flex;
    flex-direction: column;
    align-items: start !important;
    
    margin: 2rem 1rem;

    img {
      display: none;
    }

    h5 {
      font-size: 0.9rem;
    }
    p {
      font-size: 0.8rem;
    }

    .search-item {
      opacity: 0.5;
      background: none !important;
      color: #fff;

      &::placeholder {
        font-style: italic;
        color: #fff;
        font-size: 0.7rem;
      }
    }
    .input-group-text {
      font-size: 0.7rem;
    }

    .line-height-items p {
        line-height: 14px;
    }
  }
}
</style>
