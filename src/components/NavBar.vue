<!-- navbar.vue -->

<template>
  <div class="navbar">
    <div class="navbar-left">
      <img alt="icon-aplikasi" src="../assets/images/logo_keraton.png" class="app-icon" />
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
          <li>
            <button class="btnAcc" @click="getTickets"><img src="../assets/images/avatar.png" alt="Avatar" class="imgAcc" /></button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
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
      isLoggedIn: false 
    }
  },
  methods: {
    getTickets() {
      console.log('Dapatkan Tiket', this.selectedBooking)
    }
  }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');

.navbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 10px 10px 0px;
  position: relative;
  background-color: white;
  box-shadow: 0 8px 12px rgba(17, 17, 17, 0.1);
  font-family: 'Raleway', sans-serif;
  width: 100%;
  height: 104px;
}
nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
}

nav ul li {
  margin-right: 30px;
  display: flex; 
}

nav ul li:last-child {
  margin-right: 0; 
}

.btnAcc {
  position: relative;
  border: none;
  background: none;
  cursor: pointer;
}

.imgAcc {
  border-radius: 50%;
  width: 50px;
  height: 50px;
}

.navbar-left {
  display: flex;
  align-items: center;
  flex: none;
  order: 0;
  flex-grow: 0;
  width: auto;
  height: 84px;
  margin-left: 40em;
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
  top: 14px;
  color: #212121;
  font-size: 20px;
}

nav ul {
  
  margin: 0;
  padding: 0;
  display: flex;
}



nav ul li a,
nav ul li button {
  display: block;
  color: #000000;
  background-color: transparent;
  border: none;
  align-items: flex-start;
  padding: 0px 25px;
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