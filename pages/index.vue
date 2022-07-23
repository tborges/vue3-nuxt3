<template>
  <NuxtLayout name="custom">
    <LazyCounter />
  </NuxtLayout>
</template>

<script lang="ts">
// According to this directive, it is advised to import Tailwind inside the App.vue file
import "@/assets/css/tailwind.css";

import { defineComponent } from "vue";

export default defineComponent({
  layout: false,
});
</script>
