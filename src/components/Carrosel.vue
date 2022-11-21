<template>
  <Carousel :autoplay="3000" :wrap-around="true" :itemsToShow="1">
    <Slide v-for="slide in 5" :key="slide">
      <div class="carousel__item">
        <img src="../assets/img/CONTRASRT.png" alt="" />
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
  import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";

  import "vue3-carousel/dist/carousel.css";

  export default {
    name: "CAROUSEL",
    components: {
      Carousel,
      Slide,
      Pagination,
      Navigation,
    },
  };
</script>

<style>
  :root {
    --vc-clr-primary: #00b7ff;
    --vc-clr-secondary: #8e98f3;
    --vc-clr-white: #ffffff;
    --vc-icn-width: 1.2em;
    --vc-nav-width: 30px;
    --vc-nav-color: #ffffff;
    --vc-nav-background-color: var(--vc-clr-primary);
    --vc-pgn-width: 10px;
    --vc-pgn-height: 5px;
    --vc-pgn-margin: 5px;
    --vc-pgn-border-radius: 0;
    --vc-pgn-background-color: var(--vc-clr-secondary);
    --vc-pgn-active-color: var(--vc-clr-primary);
  }

  .carousel__item {
    
    width: 700px;
    background: linear-gradient(#2645a3, #5089f5);
    background-repeat: no-repeat;
    color: black;
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 100%;
    
  }

  .carousel__item img {
    border-radius: 2px;
    width: 100vw;
  }

  .carousel__slide {
    margin-top: 2rem;
    padding: 15px;
  }

  .carousel__prev,
  .carousel__next {
    box-sizing: content-box;
    border: 3px solid white;
  }

  .carousel__prev .carousel__next {
    background-color: #5089f5;
  }

  .carousel__prev {
    margin-left: 10%;
  }

  .carousel__next {
    margin-right: 10%;
  }

  button {
    margin-left: 30px;
  }
  @media only screen and (max-width: 897px) {
    .carousel__item img {
    border-radius: 2px;
    width: 100vw;
    height: 60vw;
  }
}

@media only screen and (max-width: 600px) {
    .carousel__item img {
    border-radius: 2px;
    width: 100vw;
    height: 70vw;
  }
}
</style>
