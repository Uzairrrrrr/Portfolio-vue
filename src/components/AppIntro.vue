<template>
  <section
    id="intro"
    class="s-intro min-h-[792px] bg-black flex pb-10 md:pb-0 items-end md:items-center z-10 relative"
  >
    <div class="container mx-auto px-4 ">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="flex flex-col justify-center md:pt-16 relative z-10">
          <!-- Adjusted padding for small screens -->
          <h3 class="text-3xl font-medium text-pink-500 mb-6 font-lora">
            Hey, I'm Uzair
          </h3>
          <h1 class="md:text-6xl text-3xl md:font-bold font-semibold text-white mb-12 font-lora">
            Backend Developer <br />
            & Web Developer <br />
            Based In Karachi.
          </h1>
          <div class="flex">
            <a
              href="#about"
              class="text-white text-lg uppercase tracking-extra-wide hover:text-pink-500 transition duration-300 font-lora"
              >Scroll For More</a
            >
          </div>
        </div>
          <!-- Background Image -->
          <img
            src="@/assets/Image-4.png"
            alt="Background Image"
            class="w-full h-full  object-cover pt-12 z-0 md:static absolute top-0"
          />
      </div>
    </div>
  </section>
</template>

<script>
[];
export default {
  name: "AppIntro",
};
</script>

<style scoped>
/* Your styles here */
</style>
