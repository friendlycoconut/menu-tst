<template>
  <section class="bg-gray-50">
    <div
      class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:pb-15"
    >
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div
          class="relative h-64 overflow-hidden sm:h-80 lg:order-last lg:h-full"
        >
          <a href="#" class="group relative block h-64 sm:h-80 lg:h-96">
            <span
              class="absolute inset-0 border-2 border-dashed border-cyan-600"
            ></span>

            <div
              class="relative flex h-full transform items-end border-r-2 border-b-2 border-blue-500 bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
            >
              <div
                class="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
              >
                <div class="block">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1675914718754-ff7a226c1d9e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90ba1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72 mt-20 ml-7"
                  />

                  <div
                    class="mt-2 ml-20 sm:flex sm:items-center sm:justify-center sm:gap-4"
                  >
                    <strong class="font-medium">Company Name</strong>

                    <span
                      class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"
                    ></span>

                    <p class="mt-0.5 opacity-50 sm:mt-0">Timeline / History</p>
                  </div>
                </div>
              </div>

              <div
                class="max-sm:hidden absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
              >
                <div class="flex gap-0.5 text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-10 sm:size-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <h3 class="mt-4 text-xl font-medium sm:text-2xl">
                  Here goes a timeline
                </h3>

                <div class="block absolute ml-80 -mt-80">
                  <ul class="timeline timeline-vertical">
                    <li>
                      <div class="timeline-start">1996</div>
                      <div class="timeline-middle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          class="h-5 w-5"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <div class="timeline-end timeline-box">
                        First business
                      </div>
                      <hr />
                    </li>
                    <li>
                      <hr />
                      <div class="timeline-start">1998</div>
                      <div class="timeline-middle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          class="h-5 w-5"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <div class="timeline-end timeline-box">Network</div>
                      <hr />
                    </li>
                    <li>
                      <hr />
                      <div class="timeline-start">2003</div>
                      <div class="timeline-middle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          class="h-5 w-5"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <div class="timeline-end timeline-box">
                        New trademarks
                      </div>
                      <hr />
                    </li>
                    <li>
                      <hr />
                      <div class="timeline-start">2015</div>
                      <div class="timeline-middle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          class="h-5 w-5"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <div class="timeline-end timeline-box">Franchize</div>
                      <hr />
                    </li>
                    <li>
                      <hr />
                      <div class="timeline-start">2035</div>
                      <div class="timeline-middle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          class="h-5 w-5"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <div class="timeline-end timeline-box">Future</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="lg:py-24">
          <h2 class="text-3xl font-bold sm:text-4xl">
            This section should demonstrate your business culture
          </h2>

          <p class="mt-4 text-gray-600">
            You can add some basic description of why it is a good decision to
            select your place. Provided notes can express your uniqueness and
            demonstrate your valuable features.
          </p>

          <a
            href="#"
            class="mt-8 inline-block rounded bg-blue-700 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-800 focus:outline-none focus:ring active:bg-cyan-500 sm:w-auto"
          >
            Make a reservation?
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
