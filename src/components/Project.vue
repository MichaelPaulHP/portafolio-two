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
<!--style="height: 100dvh"-->
<template>
  <div class="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 overflow-auto "  style="height: 100dvh"     >


    <div  >
      <swiper
          :pagination="true"
          :modules="[Pagination]"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
      >

        <swiper-slide v-for="(item,i) in props.project.imagesSrc"  >
          <div class="flex items-center justify-center mb-10 md:py-8 h-[50dvh] md:h-[90dvh]" >
            <img class="mx-auto" style="max-height: 100%"  :src="item" alt="ggwp" loading="lazy" decoding="async"/>
          </div>
        </swiper-slide>
        <swiper-slide v-if="props.project.video"    >
          <div class="flex items-center justify-center md:py-8 h-[50dvh] md:h-[90dvh]">
            <video style="height: 100% !important;" width="auto" controls>
              <source :src="props.project.video" type="video/mp4">
            </video>
          </div>
        </swiper-slide>


      </swiper>
    </div>
    <div class="pt-12 pb-8 md:py-8 px-8 md:overflow-auto h-[50dvh] md:h-[100dvh]">
      <h3 class="mb-5">{{ props.project.title }}</h3>
      <p v-for="(desc ) in props.project.descriptions" >{{ desc }}</p>
      <div class="flex flex-wrap gap-4 mt-8">
        <span v-for="(tag,i) in props.project.tools" class="tag">{{tag}}</span>
      </div>
      <div class="flex  gap-4 flex-wrap mt-8">
        <div v-for="(repo,i) in props.project.repositories"    class="repo  ">
          <svg xmlns="http://www.w3.org/2000/svg"     viewBox="0 0 256 256"><path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path></svg>
          <a :href="repo.src" style="color:var(--gray-999) "  target=”_blank”  >{{repo.name}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
    .tag{
      padding: 0.125rem 0.5rem;
      border: 1px solid var(--gray-50);
      font-size: 0.75rem;
    }

    .repo {
      cursor: pointer;
      display: flex;
      align-items: center ;
      gap: 0.125rem;
      background-color: var(--gray-50);

      padding: 0.325rem 0.5rem;
      font-size: 0.75rem;
    }
    svg{
      fill: var(--gray-800);
      width: 1rem;
      height: 1rem ;
    }
</style>
