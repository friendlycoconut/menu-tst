<template>
  <section>
    <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
        <div class="relative z-10 lg:py-16">
          <div class="relative h-64 sm:h-80 lg:h-full">
            <div class="space-y-4">
              <details
                class="group border-s-4 border-blue-600 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
                open
              >
                <summary
                  class="flex cursor-pointer items-center justify-between gap-1.5"
                >
                  <h2 class="text-lg font-medium text-gray-900">
                    Burgers
                  </h2>

                  <span
                    class="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <p class="mt-4 leading-relaxed text-gray-700">
                    <div class="overflow-x-auto">
  <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">

    <tbody class="divide-y divide-gray-200">
      <tr class="odd:bg-gray-50">
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Single burger</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">$4,00</td>
      </tr>

      <tr class="odd:bg-gray-50">
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Double burger</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">$5,00</td>
      </tr>

      <tr class="odd:bg-gray-50">
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Double cheeseburger</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">$7,00</td>
      </tr>
    </tbody>
  </table>
</div>
                </p>
              </details>

              <details
                class="group border-s-4 border-blue-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary
                  class="flex cursor-pointer items-center justify-between gap-1.5"
                >
                  <h2 class="text-lg font-medium text-gray-900">
                   Fries
                  </h2>

                  <span
                    class="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <p class="mt-4 leading-relaxed text-gray-700">
                  <!--
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
-->

<div class="overflow-x-auto">
  <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">

    <tbody class="divide-y divide-gray-200">
      <tr class="odd:bg-gray-50">
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Original fries</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">$4,00</td>
      </tr>

      <tr class="odd:bg-gray-50">
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Cheese fries</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">$5,00</td>
      </tr>

      <tr class="odd:bg-gray-50">
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Bacon fries</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">$7,00</td>
      </tr>
    </tbody>
  </table>
</div>
                </p>
              </details>
            
              <details
                class="group border-s-4 border-blue-400 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary
                  class="flex cursor-pointer items-center justify-between gap-1.5"
                >
                  <h2 class="text-lg font-medium text-gray-900">
                   Drinks
                  </h2>

                  <span
                    class="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <p class="mt-4 leading-relaxed text-gray-700">
                    <div class="overflow-x-auto">
  <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">

    <tbody class="divide-y divide-gray-200">
      <tr class="odd:bg-gray-50">
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Original lemonade</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">$2,00</td>
      </tr>

      <tr class="odd:bg-gray-50">
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Seasonal lemonade</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">$2,50</td>
      </tr>

      <tr class="odd:bg-gray-50">
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Soda</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">$1,75</td>
      </tr>
    </tbody>
  </table>
</div>
                </p>
              </details>
            
            </div>
          </div>
        </div>

        <div class="relative flex items-center bg-gray-100   bg-gradient-to-r from-gray-100 to-blue-200">
          <span
            class="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
          ></span>

          <div class="p-8 sm:p-16 lg:p-24">
            <h2 class="text-2xl font-bold sm:text-3xl">
              Some other variant for the menu..
            </h2>

            <p class="mt-4 text-gray-600">
              Menu also can be presented in a more convenient list-form. This section also is fully customizable.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
