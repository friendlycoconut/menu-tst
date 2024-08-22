<template>
  <div>
    <!-- Header -->
    <header class="bg-sky-400 text-white py-4">
      <h1 class="text-4xl text-center font-bold">Test deploy menu</h1>
      <p class="text-center mt-2">Fine Dining Experience</p>
    </header>

    <div class="inline-flex items-center justify-center w-full bg-sky-400">
      <hr class="w-96 h-1 my-8 bg-gray-100 border-0 rounded dark:bg-gray-700" />

      <div
        class="absolute px-4 -translate-x-1/2 bg-sky-400 left-1/2 dark:bg-gray-900"
      >
        <svg
          class="w-4 h-4 text-white-700 dark:text-gray-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 18 14"
        >
          <path
            d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"
          />
        </svg>
      </div>
    </div>

    <!-- Menu Section -->
    <section class="py-8 bg-sky-400">
      <div class="container mx-auto">
        <h2 class="text-3xl text-white font-bold text-center mb-6">Our Menu</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <img
            class="rounded-full w-84 h-64"
            src="../assets/image-1.jpg"
            alt="Vite logo"
          />

          <MenuItem
            class="col-start-2 col-span-2 bg-sky-400"
            v-for="item in menuItems"
            :key="item.id"
            :title="item.title"
            :description="item.description"
            :price="item.price"
          />
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-4">
      <p class="text-center">© 2024 Tasty Delights. All rights reserved.</p>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import MenuItem from "./MenuItem.vue";

interface MenuItemType {
  id: number;
  title: string;
  description: string;
  price: number;
}

export default defineComponent({
  name: "App",
  components: {
    MenuItem,
  },
  setup() {
    const menuItems = ref<MenuItemType[]>([
      {
        id: 1,
        title: "Margherita Pizza",
        description: "Traditional pizza with fresh mozzarella and basil.",
        price: 12.99,
      },
      {
        id: 2,
        title: "Spaghetti Carbonara",
        description: "Classic Italian pasta with creamy sauce and pancetta.",
        price: 14.99,
      },
      {
        id: 3,
        title: "Grilled Salmon",
        description: "Freshly grilled salmon with a side of vegetables.",
        price: 18.99,
      },
    ]);

    return {
      menuItems,
    };
  },
});
</script>
