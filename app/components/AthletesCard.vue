<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <!-- Boucle sur les combattants -->
    <div v-for="fighter in fighters" :key="fighter.name" class="grid place-items-center p-4 rounded-md">
      <NuxtImg
        class="p-2 object-cover w-[250px] h-[400px]"
        :src="fighter.image"
        width="250px"
        height="400px"
        alt="Image du combattant"
      />
      <h2>{{ fighter.name }} - {{ fighter.age }} ans</h2>
      <h3>{{ fighter.record }}</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
// Tableau contenant les informations des combattants
const fighters = [
  {
    name: "Jade Smith",
    age: 22,
    record: "4 - 0 - 0",
    image: "/images/boxer-2.jpg",
  },
  {
    name: "John Doe",
    age: 30,
    record: "10 - 2 - 1",
    image: "/images/boxer-1.jpg",
  },
  {
    name: "Emma Brown",
    age: 25,
    record: "5 - 1 - 0",
    image: "/images/boxer-3.jpg",
  },
  {
    name: "Mohammed Abdul Brown",
    age: 25,
    record: "5 - 1 - 0",
    image: "/images/boxer-4.jpg",
  },
  {
    name: "Jessy James",
    age: 25,
    record: "2 - 18 - 0",
    image: "/images/boxer-5.jpg",
  },
  {
    name: "Jean-Pierre Polanref",
    age: 25,
    record: "14 - 3 - 0",
    image: "/images/boxer-2.jpg",
  },
  // Ajoute d'autres combattants ici
];
</script>
