<template>
  <div class="p-6 rounded-lg te grid grid-cols-1 justify-items-center">
    <h3 class="text-xl font-semibold text-orange-50">{{ title }}</h3>
    <p class="mt-2 text-orange-50">{{ description }}</p>
    <p class="mt-2 font-bold text-orange-100">\${{ price.toFixed(2) }}</p>
    <hr class="h-px w-1/2 bg-orange-50 border-0 dark:bg-gray-700" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MenuItem",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
});
</script>
