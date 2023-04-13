<template>
  <NuxtLink
    :to="`movies/${movie.id}`"
    class="col-span-1 lg:col-span-2 hover:shadow-md hover:border border-gray-200 rounded-lg"
  >
    <div>
      <img
        class="transform duration-100 inline-block"
        :src="imgURL"
        alt="Movie Poster"
      />

      <div class="py-4 flex flex-col items-center justify-center text-center">
        <h2 class="uppercase text-sm font-medium">{{ movie.title }}</h2>
        <span class="rating"
          ><i class="fa fa-star" aria-hidden="true"></i>
          {{ movie.vote_average }}</span
        >
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { Movie } from '~/types/Movie';

const props = defineProps({
  movie: {
    type: Object as PropType<Movie>,
    required: true,
  },
});

const config = useRuntimeConfig();

const imgURL = computed(() =>
  props.movie.poster_path != null
    ? `${config.public.imgBaseUrl}/${props.movie.poster_path}`
    : 'https://via.placeholder.com/300x500'
);
</script>
