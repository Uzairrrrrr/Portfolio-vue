<template>
  <div id="app">
    <AppHeader />
    <AppIntro />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue' 
import AppIntro from './components/AppIntro.vue'
import '@fortawesome/fontawesome-free/css/all.css';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppIntro
  }
};
</script>

<style>
/* Global styles can go here */
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
} */
</style>
