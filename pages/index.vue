<template>
  <div class="flex flex-col py-10">
    <h3 class="text-3xl font-bold uppercase text-gray-600 leading-none">
      Cabana movie search
    </h3>
    <div class="flex justify-start items-center h-32 relative">
      <div
        class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-gray-500 dark:text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      <input
        v-model="searchTerm"
        placeholder="Search for movies..."
        type="text"
        class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"
      />
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-10 mb-10"
    >
      <MovieCard
        :movie="movie"
        v-for="movie in data?.results"
        :key="movie.id"
      />
    </div>
    <div v-if="data?.results.length" class="flex justify-center gap-8">
      <button
        v-if="!disabledPrevious"
        @click="page--"
        class="px-4 py-2 text-m border rounded-md hover:bg-black hover:text-white transition duration-200 ease-in"
      >
        Previous
      </button>
      <div class="px-4 py-2 text-m border rounded-md bg-black text-white">
        {{ page }}
      </div>
      <button
        v-if="!disabledNext"
        @click="page++"
        class="px-4 py-2 text-m border rounded-md hover:bg-black hover:text-white transition duration-200 ease-in"
      >
        Next
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { TMDBResponse } from '~/types/TMDBResponse.js';

const searchTerm = ref('');
const page = ref(1);
// Disable pagination depending on first or last page
const disabledPrevious = computed(() => {
  return page.value === 1;
});
const disabledNext = computed(() => {
  return page.value + 1 === data.value?.total_pages;
});

const url = computed(() => {
  return `api/movies/search?query=${searchTerm.value}&page=${page.value}`;
});

const { data } = await useFetch<TMDBResponse>(url);
</script>
