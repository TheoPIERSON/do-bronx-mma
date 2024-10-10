<template>
  <h1 class="p-2 w-5/6 text-3xl md:text-7xl font-extrabold leading-snug md:leading-snug">
    Un club familial adapté <span class="bg-red-700 px-2 pb-1">à tout</span> les profils
  </h1>
  <div class="grid md:flex md:mt-4 p-2">
    <div class="grid place-items-center">
      <p class="p-4 text-center md:text-start text-2xl">
        Nous mettons un point d’honneur à ce que nos sportifs soient confiants et à l’aise lors des entrainements peu
        importe leur âge, sexe, taille, ethni ou religion. <br /><br />C’est pour cela que nous adaptons les
        entraînement à chaque personne, que vous soyez compétiteur ou passioné.
      </p>
      <NuxtLink
        to="/about"
        class="text-center w-1/2 mb-4 p-1 rounded-full bg-red-700 font-bold text-xl hover:bg-red-950"
      >
        Infos sur le club
      </NuxtLink>
    </div>
    <NuxtImg class="p-4" src="/images/boxer_child.jpg" width="700px" />
  </div>
</template>

<script setup lang="ts"></script>
