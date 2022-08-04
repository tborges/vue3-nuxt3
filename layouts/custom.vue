<script setup lang="ts">
type Theme = "light" | "dark";

const setColorTheme = (newTheme: Theme) => {
  useColorMode().preference = newTheme;
};
</script>

<template>
  <div class="flex flex-col w-full h-screen overflow-hidden bg-green-50">
    <header class="w-full h-16 bg-green-500">
      <nav
        class="
          flex
          items-center
          justify-center
          w-full
          h-full
          text-center text-black
        "
      >
        <h2 class="text-2xl font-bold dark:text-white">
          <slot name="header" v-if="header" />
          <span v-else>Nuxt 3</span>
        </h2>
        <h2>
          <button
            class="ml-5"
            @click="
              setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')
            "
          >
            <svg
              v-if="$colorMode.value == 'dark'"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-gray-50"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </h2>
      </nav>
    </header>
    <main class="flex-grow w-full h-full p-4 mx-auto max-w-7xl">
      <slot />
    </main>
    <footer class="flex items-center justify-center w-full h-16 text-black">
      <p class="text-gray-700">
        My Nuxt App &copy; {{ new Date().getFullYear() }}
      </p>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  computed: {
    header() {
      return this.$slots.header;
    },
  },
});
</script>