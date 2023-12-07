<script setup lang="ts">
  import { type Project } from "../models/Project";
  import {Swiper, SwiperSlide} from "swiper/vue";
  import {Navigation} from "swiper/modules";
  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/navigation';

  const props = defineProps<{
    project:Project
  }>()

</script>

<template>
  {{props.project.title}}
  <swiper
      :navigation="true"
      :modules="[Navigation]"
      class="mySwiper"
  >

    <swiper-slide v-for="(item,i) in props.project.imagesSrc">
      <img :src="item"  alt="ggwp" loading="lazy" decoding="async" />
    </swiper-slide>

  </swiper>
</template>

<style scoped>

</style>
