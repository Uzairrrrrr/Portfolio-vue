<template>
  <header class="bg-black text-white body-font fixed w-full top-0 z-50">
    <div class="container mx-auto flex flex-wrap p-5 items-center">
      <a class="flex title-font font-medium items-center text-white mx-auto md:mx-0">
        <img src="@/assets/Logo (1).svg" alt="Logo" class="w-32 h-10">
      </a>
      <nav class="hidden md:flex md:ml-auto md:mr-auto flex-wrap gap-4 items-center text-base justify-center uppercase transition-all duration-300">
        <a class="mb-1 text-custom-white hover:text-white transition-all duration-300 font-sans tracking-extra-wide">Intro</a>
        <a class="mb-1 text-custom-white hover:text-white transition-all duration-300 font-sans tracking-extra-wide">About</a>
        <a class="mb-1 text-custom-white hover:text-white transition-all duration-300 font-sans tracking-extra-wide">Services</a>
        <a class="mb-1 text-custom-white hover:text-white transition-all duration-300 font-sans tracking-extra-wide">Works</a>
      </nav>
      <div class="hidden md:flex p-2 mt-2 gap-4 ml-auto">
        <a href="https://www.facebook.com/itzzzz.uzi" target="_blank" class="text-white text-2xl"><i class="fab fa-facebook-f" aria-hidden="true"></i></a>
        <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Flmao_uzi1" target="_blank" class="text-white text-2xl"><i class="fab fa-twitter" aria-hidden="true"></i></a>
        <a href="https://www.linkedin.com/in/uzair-/" target="_blank" class="text-white text-2xl"><i class="fab fa-linkedin" aria-hidden="true"></i></a>
        <a href="https://github.com/Uzairrrrrr" target="_blank" class="text-white text-2xl"><i class="fab fa-github" aria-hidden="true"></i></a>
      </div>
      <button class="md:hidden text-white focus:outline-none" @click="toggleMenu">
        <i class="fas fa-bars"></i>
      </button>
    </div>
    <div v-if="menuOpen" class="md:hidden bg-gray-800 p-4 absolute w-full">
      <nav class="flex flex-col gap-4 items-center text-base justify-center uppercase">
        <a class="pt-3 mb-1 text-custom-white hover:text-white transition-all duration-300 font-sans tracking-extra-wide">Intro</a>
        <a class="pt-3 mb-1 text-custom-white hover:text-white transition-all duration-300 font-sans tracking-extra-wide">About</a>
        <a class="pt-3 mb-1 text-custom-white hover:text-white transition-all duration-300 font-sans tracking-extra-wide">Services</a>
        <a class="pt-3 mb-1 text-custom-white hover:text-white transition-all duration-300 font-sans tracking-wide">Works</a>
        <div class="flex gap-4 justify-center mt-4">
          <a href="https://www.facebook.com/itzzzz.uzi" target="_blank" class="text-white text-2xl"><i class="fab fa-facebook-f" aria-hidden="true"></i></a>
          <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Flmao_uzi1" target="_blank" class="text-white text-2xl"><i class="fab fa-twitter" aria-hidden="true"></i></a>
          <a href="https://www.linkedin.com/in/uzair-/" target="_blank" class="text-white text-2xl"><i class="fab fa-linkedin" aria-hidden="true"></i></a>
          <a href="https://github.com/Uzairrrrrr" target="_blank" class="text-white text-2xl"><i class="fab fa-github" aria-hidden="true"></i></a>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      menuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
  }
};
</script>

<style scoped>
.text-custom-white {
  color: rgba(255, 255, 255, 0.5);
}
.text-custom-white:hover {
  color: #ffffff;
}
</style>
