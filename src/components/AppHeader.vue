<template>
  <header class="bg-gray-800 text-white body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src="@/assets/Logo (1).svg" alt="Logo" class="w-30 h-10">
        <!-- <span class="ml-3 text-xl">Tailblocks</span> -->
      </a>
      <nav class="md:ml-auto md:mr-auto flex flex-wrap gap-4 items-center text-base justify-center uppercase transition-all duration-300">
        <a class="mr-5 pt-3 mb-1 text-custom-white hover:text-white transition-all duration-300">Intro</a>  
        <a class="mr-5 pt-3 mb-1 text-custom-white hover:text-white transition-all duration-300">About</a>
        <a class="mr-5 pt-3 mb-1 text-custom-white hover:text-white transition-all duration-300">Services</a>
        <a class="mr-5 pt-3 mb-1 text-custom-white hover:text-white transition-all duration-300">Works</a>
      </nav>
        <div class="p-2 mt-2 flex gap-4 ml-auto">
          <a href="https://www.facebook.com/itzzzz.uzi" target="_blank" class="text-white text-3xl"><i class="fab fa-facebook-f" aria-hidden="true"></i></a>
          <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Flmao_uzi1" target="_blank" class="text-white text-3xl"><i class="fab fa-twitter" aria-hidden="true"></i></a>
          <a href="https://www.linkedin.com/in/uzair-/" target="_blank" class="text-white text-3xl"><i class="fab fa-linkedin" aria-hidden="true"></i></a> 
          <a href="https://github.com/Uzairrrrrr" target="_blank" class="text-white text-3xl"><i class="fab fa-github" aria-hidden="true"></i></a> 
        </div>
      </div>
</header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>