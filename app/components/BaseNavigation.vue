<template>
  <div>
    <nav class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="text-xl font-bold text-gray-100 md:text-2xl flex items-center"
          ><NuxtImg src="images/logo-white.png" alt="logo" width="56px" /><span class="text-3xl font-bold"
            >Do Bronx MMA</span
          ></NuxtLink
        >
        <!-- Mobile menu button -->
        <div @click="toggleNav" class="flex md:hidden">
          <button type="button" class="text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400">
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col mt-4 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 text-xl"
      >
        <li><NuxtLink @click="toggleNav" to="/" class="hover:bg-red-700 focus:bg-red-700 p-3">Accueil</NuxtLink></li>
        <li><NuxtLink @click="toggleNav" to="/about" class="hover:bg-red-700 focus:bg-red-700 p-3">Infos</NuxtLink></li>
        <li>
          <NuxtLink @click="toggleNav" to="/about" class="hover:bg-red-700 focus:bg-red-700 p-3">Athlètes</NuxtLink>
        </li>
        <li>
          <NuxtLink @click="toggleNav" to="/about" class="hover:bg-red-700 focus:bg-red-700 p-3">Compétitions</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, toggleNav };
  },
};
</script>
