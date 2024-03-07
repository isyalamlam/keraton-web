<template>
  <div class="navbar">
    <div class="navbar-left">
      <img alt="icon-aplikasi" src="../assets/images/logo_keraton.png" class="app-icon" />
      <span class="app-name">Keraton Kesepuhan Cirebon</span>
    </div>
    <div class="navbar-right">
      <nav>
        <ul>
          <li class="short"><a href="/beranda">Beranda</a></li>
          <li class="short"><a href="/sejarahkeraton">Sejarah</a></li>
          <li class="short"><a href="#">Booking</a></li>
          <li class="short"><a href="#">Objek Wisata</a></li>
          <button @click="getTickets" style="border-radius: 5px;border: none; background-color: #123B32; color: white;width:162px;height: 34px; font-family: 'Raleway'; font-weight: 700; cursor: pointer;">Dapatkan Tiket</button>
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
  align-items: center;
  padding: 10px 10px 10px 0px;
  position: relative;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: 'Raleway', sans-serif;
  width: 100%;
  height: 104px;
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


.short {
  margin-top: 8px;
  
}
</style>