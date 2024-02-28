<template>
  <div id="app">
    <header>
      <Navbar />
    </header>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView, createRouter, createWebHistory } from 'vue-router';
import Navbar from './components/NavBar';
import SignIn from './views/signIn.vue';

const routes = [
  {
    path: '/signin',
    component: SignIn
  }
];

// Menggunakan createWebHistory
createRouter({
  history: createWebHistory(),
  routes
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
}

header {
  width: 60vw;
  height: 40vw;
  background-color: white;
  box-shadow: 0px 2px 0px rgb(51, 51, 51);
  padding: 15px;
  margin-left: 20vh;
  margin-top: 10vh;
}
</style>
