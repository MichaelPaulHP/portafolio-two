<script setup lang="ts">
import {type Project} from "../models/Project";
import {Swiper, SwiperSlide} from "swiper/vue";
import {Pagination} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';

const props = defineProps<{
  project: Project
}>()

</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 h-full    " style="background-color: #e3e6ee">


    <div class=" ">
      <swiper
          :pagination="{dynamicBullets: true}"
          :modules="[Pagination]"

      >
        <swiper-slide v-for="(item,i) in props.project.imagesSrc"  >
          <img class="mx-auto" style="max-height: 100vh"  :src="item" alt="ggwp" loading="lazy" decoding="async"/>
        </swiper-slide>

      </swiper>
    </div>
    <div class=" ">
      <h3>{{ props.project.title }}</h3>
      <p>{{ props.project.description }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>
