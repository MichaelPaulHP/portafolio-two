<script lang="ts">
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';



// import required modules
import { Navigation} from 'swiper/modules';
import {yourProjectList} from "../data/projectsList.ts";
import Project from "./Project.vue";
export default {

  components: {
    Project,
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [ Navigation],
      projects: yourProjectList
    };
  },
}
</script>

<template>
  <h1 class="mb-6">Proyectos</h1>
  <div class="my-container">
    <swiper
        :navigation="true"
        :modules="modules"
        class="mySwiper"
    >
      <swiper-slide v-for=" p in projects ">
        <Project  :project="p"></Project>
      </swiper-slide>

<!--      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>
        <img src="/assets/stock-1.jpg"  alt="ggwp" loading="lazy" decoding="async" />
      </swiper-slide>
      <swiper-slide>Slide 6</swiper-slide>
      <swiper-slide>Slide 7</swiper-slide>
      <swiper-slide>Slide 8</swiper-slide>
      <swiper-slide>Slide 9</swiper-slide>-->
    </swiper>
  </div>



</template>

<style scoped>
.my-container {
  display: block;
  position: relative;
  width: 100%;
  height: 100vh;
  --swiper-navigation-size: 23px
}
.swiper{
  width: 100%;
  height: 100%;
}

.swiper-button-next {
  /*position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);*/
  color: var(--gray-0);
  width: 30px;
}

.swiper-button-prev {
  /*position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);*/
  color: var(--gray-0);
}
</style>
