<template>
  <div id="app">
    <AppHeader />
    <!-- Other components or content can go here -->
    <main class="container mx-auto p-4">
      <!-- <h1 class="text-2xl font-bold">Welcome to My Portfolio</h1> -->
      <!-- Additional content or components -->
    </main>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue' 
import '@fortawesome/fontawesome-free/css/all.css';
export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style>
/* Global styles can go here */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
