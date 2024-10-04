<template>
  <header class="py-3 text-white font-Montserrat">
    <nav class="flex container items-center">
      <NuxtLink to="/" class="flex gap-1 items-center"
        ><NuxtImg src="images/logo.png" alt="logo" width="56px" /><span class="text-3xl font-bold"
          >Do Bronx MMA</span
        ></NuxtLink
      >
      <ul class="flex gap-6 ml-auto text-xl font-bold capitalize">
        <li><NuxtLink to="/" class="hover:bg-red-700 focus:bg-red-700 p-3">Accueil</NuxtLink></li>
        <li><NuxtLink to="/about" class="hover:bg-red-700 focus:bg-red-700 p-3">Infos</NuxtLink></li>
        <li><NuxtLink to="/about" class="hover:bg-red-700 focus:bg-red-700 p-3">Athlètes</NuxtLink></li>
        <li><NuxtLink to="/about" class="hover:bg-red-700 focus:bg-red-700 p-3">Compétitions</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>
