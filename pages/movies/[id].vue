<template>
  <div class="flex py-24 px-20">
    <div class="grid grid-cols-12 gap-8">
      <div class="col-span-4 w-full flex items-center justify-center">
        <img class="object-contain rounded-md" :src="imgUrl" />
      </div>
      <div class="col-span-8 flex flex-col justify-between">
        <div class="text-4xl font-sans font-bold mb-5">
          <h1
            class="text-[40px] font-medium uppercase text-gray-600 leading-none"
          >
            {{ data?.title }}
          </h1>
          <h2 class="uppercase text-lg text-gray-900">{{ data?.tagline }}</h2>
        </div>

        <div class="flex justify-between mt-4 mb-10">
          <p class="text-black">
            <i class="fa fa-star" aria-hidden="true"></i
            >{{ data?.vote_average }}
          </p>
          <div class="text-gray-300">{{ data?.runtime }} mins</div>
        </div>
        <div class="flex flex-col">
          <h3 class="text-black font-bold text-base uppercase">Genres</h3>
          <div class="flex mb-10">
            <span
              v-for="(genre, index) in data?.genres"
              class="text-gray-500 uppercase text-sm hover:text-gray-800 transition duration-200 ease-in"
              ><span class="pr-0.5" v-if="index != 0">, </span
              >{{ genre.name }}</span
            >
          </div>
        </div>
        <div class="flex flex-col">
          <h3 class="text-black font-bold text-base uppercase">Synopsis</h3>
          <p class="text-gray-600 text-m">{{ data?.overview }}</p>
        </div>
        <div
          class="flex items-center pt-4 cursor-pointer"
          @click="$router.go(-1)"
        >
          <i class="fa fa-chevron-circle-left text-2xl" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Movie } from '~/types/Movie';

const route = useRoute();
const config = useRuntimeConfig();
const movieId = computed(() => route.params.id);
const imgUrl = computed(() =>
  data.value?.poster_path
    ? `${config.public.imgBaseUrl}/${data.value?.poster_path}`
    : 'https://via.placeholder.com/300x500'
);

const { data } = await useFetch<Movie>(
  `https://api.themoviedb.org/3/movie/${movieId.value}?api_key=5529ce25d1798ae656040fd7bbb65307`
);
</script>
