<template>
  <section class="relative w-full h-[40rem] flex flex-col justify-center items-center text-white font-Roboto">
    <NuxtImg
      class="absolute top-0 left-0 h-full w-full object-cover"
      width="700px"
      src="images/bg-fight.jpg"
      format="webp"
      densities="x1"
      alt=""
    />
    <div class="relative z-10 text-center text-white">
      <h1 class="text-7xl md:text-8xl font-extrabold drop-shadow-md mb-4 md:mb-2">Do Bronx MMA</h1>
      <h2 class="inline-block text-4xl font-bold drop-shadow-lg -translate-y-5 bg-red-700 md:p-2 py-3">
        Muay Thai - Kickboxing - MMA
      </h2>
      <p class="text-5xl font-bold md:mt-7">Prêt à vous dépasser ?</p>
      <button
        @click="scrollToContact"
        class="text-2xl font-bold mt-3 bg-red-700 py-2 px-3 rounded-full hover:bg-red-950"
      >
        Rejoignez-nous !
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
const scrollToContact = () => {
  const section = document.getElementById("contact");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
</script>
