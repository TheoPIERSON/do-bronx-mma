<template>
  <header class="py-4 border-b text-white">
    <nav class="flex container items-center">
      <NuxtLink to="/" class="flex gap-1 items-center"
        ><NuxtImg src="images/logo.png" alt="logo" width="56px" /><span class="text-3xl font-bold"
          >Do Bronx MMA</span
        ></NuxtLink
      >
      <ul class="flex gap-6 ml-auto text-xl font-bold capitalize">
        <li><NuxtLink to="/">Accueil</NuxtLink></li>
        <li><NuxtLink to="/about">Infos</NuxtLink></li>
        <li><NuxtLink to="/about">Athlètes</NuxtLink></li>
        <li><NuxtLink to="/about">Compétitions</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>
