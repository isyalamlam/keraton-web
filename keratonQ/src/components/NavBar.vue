<template>
  <div class="navbar" :class="{ 'transparent': transparent }">
    <div class="navbar-left">
      <img alt="icon-aplikasi" src="../assets/images/logo_keraton.png" class="app-icon" />
      <span class="app-name text">KERATON KASEPUHAN CIREBON</span>
    </div>
    <div class="navbar-right">
      <nav>
        <ul>
          <li @click="keBeranda" class="short text"><a href="/">Beranda</a></li>
          <li @click="toggleDropdown('history')" class="short text">
            <a href="#">
              Sejarah
            </a>
          </li>
          <li @click="keBooking" class="short text">
            <a href="#">
              Booking
            </a>
          </li>
          <li class="short text">
            <a href="#">
              Objek Wisata
            </a>
          </li>
          <button @click="keSignIn"
            style=" margin-top: 10px ;border-radius: 5px;border: none; background-color: #123B32; color: white;width:162px;height: 34px; font-family: 'Raleway'; font-weight: 700; cursor: pointer;">Dapatkan
            Tiket</button>
        </ul>
      </nav>
    </div>
    <li v-if="parentSelectedOption">{{ parentSelectedOption.name }}</li>
  </div>
  <beranda>
  </beranda>
</template>

<script setup>
import { ref } from 'vue';

const showHistoryDropdown = ref(false);
const transparent = ref(false);
const selectedBooking = ref(null);
const bookingOptions = ref([]);
const selectedAttraction = ref(null);
const attractionOptions = ref([]);

const keSejarah = () => {
  showHistoryDropdown.value = !showHistoryDropdown.value;
};

const toggleDropdown = (dropdown) => {
  if (dropdown === 'history') {
    showHistoryDropdown.value = !showHistoryDropdown.value;
  }
};

const keSignIn = () => {
  // Implement sign-in logic here
};

// Implement other methods

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');

.dropdown {
  position: relative;
}

.dropdown ul {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #ffffff; /* tambahkan warna latar belakang sesuai kebutuhan */
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* tambahkan bayangan sesuai kebutuhan */
  display: none;
}

.dropdown:hover ul {
  display: block;
}

.dropdown ul li {
  display: block;
  margin-bottom: 5px; /* tambahkan jarak antar item dropdown */
}

.dropdown ul li a {
  color: #000000; /* warna teks dropdown */
  text-decoration: none;
  font-size: 16px;
}

.dropdown ul li a:hover {
  color: #333333; /* warna teks dropdown saat dihover */
}


.caret-down-svg {
  display: inline-block;
  vertical-align: middle;
  width: 16px; /* sesuaikan dengan ukuran SVG */
  height: 16px; /* sesuaikan dengan ukuran SVG */
  margin-left: 5px; /* sesuaikan dengan jarak yang diinginkan */
}

.navbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 10px 10px 0px;
  position: relative;
  font-family: 'Raleway', sans-serif;
  width: 100%;
  height: 104px;
}

.navbar-right {
  margin-left: 30%;
  width: 50%;
  margin-top: 28px;
}

.navbar-left {
  display: flex;
  align-items: center;
  flex: none;
  order: 0;
  flex-grow: 0;
  width: auto;
  height: 84px;
  margin-left: 17em;
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

nav ul li a,
nav ul li button {
  display: flex; /* membuat elemen berada dalam flex container */
  color: #000000;
  background-color: transparent;
  border: none;
  align-items: center; /* mengatur penempatan elemen secara vertikal */
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

li :first-child {
  padding-right: 0.1vw;
}

.navbar-right button {
  margin-bottom: 35px;
}

.short {
  margin-right: 33px;
  margin-top: 12px;
  height: fit-content;
  width: fit-content;
}

/* Gaya untuk navbar transparan */
.navbar.transparent {
  background-color: transparent;
}

/* Gaya untuk teks putih */
.navbar.transparent .app-name,
.navbar.transparent nav ul li a,
.navbar.transparent nav ul li button {
  color: white;
}
</style>
