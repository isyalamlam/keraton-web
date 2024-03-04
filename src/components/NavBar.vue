<!-- navbar.vue -->
<template>
  <div class="navbar">
    <div class="navbar-left">
      <img alt="icon-aplikasi" src="../assets/svg/logo_keraton 3 (1).svg" class="app-icon" />
      <span class="app-name">Keraton Kesepuhan Cirebon</span>
    </div>
    <div class="navbar-right">
      <nav>
        <ul>
          <li><a href="./components/Beranda.vue">Beranda</a></li>
          <li><a href="#">Sejarah<div class="dropdown">
            <DropDown :selectedOption="selectedHistory" :options="historyOptions" @update:selectedOption="selectedHistory = $event" />
          </div></a></li>
          <li><a href="#">Booking<div class="dropdown">
            <DropDown :selectedOption="selectedBooking" :options="bookingOptions" @update:selectedOption="selectedBooking = $event" />
          </div></a></li>
          <li><a href="#">Objek Wisata<div class="dropdown">
            <DropDown :selectedOption="selectedAttraction" :options="attractionOptions" @update:selectedOption="selectedAttraction = $event" />
          </div></a></li>
          <button @click="getTickets" style="border-radius: 5px; background-color: #123B32; color: white;">Dapatkan Tiket</button>
        </ul>
      </nav>
    </div>
    <li v-if="parentSelectedOption">{{ parentSelectedOption.name }}</li>
  </div>
  <beranda>
    
  </beranda>
</template>

<script>

import DropDown from '../components/DropDown.vue'

export default {
  components: {
    DropDown
  },
  data() {
    return {
      selectedHistory: null,
      selectedBooking: null,
      selectedAttraction: null,
      historyOptions: [
        { name: 'Keraton', value: 1 },
        { name: 'Silsilah', value: 2 },
      ],
      attractionOptions: [
        { name: 'Keraton Kesepuhan', value: 1 },
        { name: 'Museum Pusaka', value: 2 },
        { name: 'Dalem Agung Pakungwati', value: 3 },
        { name: 'Lotus', value: 4 }
      ],
      bookingOptions: [
      { name: 'Paket Keraton', value: 1 },
        { name: 'Tiket Event', value: 2 },
      ]
    }
  },
  methods: {
    getTickets() {
      console.log('Dapatkan Tiket', this.parentSelectedOption)
    }
  }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');

.navbar {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
  gap: 327px;
  position: relative;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: 'Raleway', sans-serif;
  width: 100%;
  height: auto;
}

.navbar-left {
  display: flex;
  align-items: center;
  flex: none;
  order: 0;
  flex-grow: 0;
  width: 217px;
  height: 84px;
}

.app-icon {
  position: absolute;
  width: 68px;
  height: 70.62px;
  left: 88px;
  top: 16.69px;
}

.app-name {
  position: absolute;
  width: 139px;
  height: 84px;
  left: 166px;
  top: 10px;
  color: black;
  font-size: 20px;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}

nav ul li {
  margin-right: 30px;
}

nav ul li a,
nav ul li button {
  display: block;
  color: #000000;
  background-color: transparent;
  border: none;
  flex-direction: row;
  align-items: flex-start;
  padding: 5px 25px;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

nav ul li a:hover,
nav ul li button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}


.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-button {
  padding: 5px 10px;
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  cursor: pointer;
}

.dropdown-menu {
  gap: 9px;
position: absolute;
padding: 11px 40px 11px 14px;
width: auto;
height: auto;
top: 78px;
background: #FFFFFF;
border: 1px solid #123B32;
border-radius: 10px;

}

  

.dropdown-menu li:hover {
  background-color: #f2f2f2;
}
</style>
