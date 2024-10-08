<template>
  <div class="md:mt-4 p-2">
    <h1 class="text-3xl md:text-7xl font-extrabold w-full leading-snug md:leading-snug">
      Découvrez un club <span class="bg-red-700 px-2 pb-1">décoré</span>
    </h1>
    <div class="grid place-items-center">
      <p class="p-4 text-center md:text-start">
        Nos athlètes gagnent chaque années plusieurs titres que ce soit en amateurs ou en professionnel.
      </p>
      <div class="overflow-hidden w-5/6 md:w-4/6">
        <!-- Container du carousel -->
        <div
          class="flex transition-transform duration-500 ease-in-out"
          :style="{ transform: `translateX(-${currentIndex * (100 / imagesToShow)}%)` }"
        >
          <!-- Images du carousel -->
          <div v-for="(image, index) in images" :key="index" class="flex-shrink-0 w-full md:w-1/2">
            <NuxtImg :src="image" class="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
      <div>
        <h3>Cliquez</h3>
        <button>ICI</button>
        <h4>pour voir tout nos compétiteurs</h4>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

// Liste des images
const images = ref(["images/compet-1.jpg", "images/compet-2.jpg", "images/boxer_child.jpg", "images/bg-fight.jpg"]);

// Index pour suivre l'image courante
const currentIndex = ref(0);

// Nombre d'images visibles selon la taille de l'écran
const imagesToShow = ref(window.innerWidth >= 768 ? 2 : 1);

let intervalId: any;

// Fonction pour passer à l'image suivante avec un reset transparent
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
};

// Démarrer l'auto défilement
onMounted(() => {
  intervalId = setInterval(nextSlide, 3000); // Changer d'image toutes les 3 secondes
  window.addEventListener("resize", handleResize);
});

// Gérer le changement de taille d'écran
const handleResize = () => {
  imagesToShow.value = window.innerWidth >= 768 ? 2 : 1;
};

// Arrêter l'auto défilement lors de la destruction du composant
onUnmounted(() => {
  clearInterval(intervalId);
  window.removeEventListener("resize", handleResize);
});
</script>
