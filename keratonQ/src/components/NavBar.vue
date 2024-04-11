<template>
  <div class="navbar" :class="{ 'transparent': transparent }">
    <div class="navbar-left">
      <img alt="icon-aplikasi" src="../assets/images/logo_keraton.png" class="app-icon" />
      <span class="app-name">Keraton Kesepuhan Cirebon</span>
    </div>
    <div class="navbar-right">
      <nav>
        <ul>
          <li @click="keBeranda" class="short"><a href="/">Beranda</a></li>
          <li @click="keSejarah" class="short">
            <a href="#">
              Sejarah
              <span class="caret-down-svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32" fill="none">
                  <path d="M26.7081 12.7071L16.7081 22.7071C16.6152 22.8001 16.5049 22.8738 16.3835 22.9241C16.2621 22.9745 16.132 23.0004 16.0006 23.0004C15.8691 23.0004 15.739 22.9745 15.6176 22.9241C15.4962 22.8738 15.3859 22.8001 15.2931 22.7071L5.29306 12.7071C5.10542 12.5194 5 12.2649 5 11.9996C5 11.7342 5.10542 11.4797 5.29306 11.2921C5.4807 11.1044 5.73519 10.999 6.00056 10.999C6.26592 10.999 6.52042 11.1044 6.70806 11.2921L16.0006 20.5858L25.2931 11.2921C25.386 11.1992 25.4963 11.1255 25.6177 11.0752C25.7391 11.0249 25.8692 10.999 26.0006 10.999C26.132 10.999 26.2621 11.0249 26.3835 11.0752C26.5048 11.1255 26.6151 11.1992 26.7081 11.2921C26.801 11.385 26.8747 11.4953 26.9249 11.6167C26.9752 11.7381 27.0011 11.8682 27.0011 11.9996C27.0011 12.131 26.9752 12.2611 26.9249 12.3825C26.8747 12.5039 26.801 12.6142 26.7081 12.7071Z" fill="#343330"/>
                </svg>
              </span>
            </a>
            <div class="dropdown" v-show="showHistoryDropdown">
              <ul>
                <li><a href="#">Silsilah</a></li>
                <li><a href="#">Keraton</a></li>
              </ul>
            </div>
          </li>
          <!-- Tambahkan menu dropdown 'silsilah' dan 'keraton' di sini -->
          <li @click="keBooking" class="short">
            <a href="#">
              Booking
              <span class="caret-down-svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32" fill="none">
                  <path d="M26.7081 12.7071L16.7081 22.7071C16.6152 22.8001 16.5049 22.8738 16.3835 22.9241C16.2621 22.9745 16.132 23.0004 16.0006 23.0004C15.8691 23.0004 15.739 22.9745 15.6176 22.9241C15.4962 22.8738 15.3859 22.8001 15.2931 22.7071L5.29306 12.7071C5.10542 12.5194 5 12.2649 5 11.9996C5 11.7342 5.10542 11.4797 5.29306 11.2921C5.4807 11.1044 5.73519 10.999 6.00056 10.999C6.26592 10.999 6.52042 11.1044 6.70806 11.2921L16.0006 20.5858L25.2931 11.2921C25.386 11.1992 25.4963 11.1255 25.6177 11.0752C25.7391 11.0249 25.8692 10.999 26.0006 10.999C26.132 10.999 26.2621 11.0249 26.3835 11.0752C26.5048 11.1255 26.6151 11.1992 26.7081 11.2921C26.801 11.385 26.8747 11.4953 26.9249 11.6167C26.9752 11.7381 27.0011 11.8682 27.0011 11.9996C27.0011 12.131 26.9752 12.2611 26.9249 12.3825C26.8747 12.5039 26.801 12.6142 26.7081 12.7071Z" fill="#343330"/>
                </svg>
              </span>
            </a>
            <div class="dropdown">
              <DropDown :selectedOption="selectedBooking" :options="bookingOptions"
                @update:selectedOption="selectedBooking = $event" />
            </div>
          </li>
          <li class="short">
            <a href="#">
              Objek Wisata
              <span class="caret-down-svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32" fill="none">
                  <path d="M26.7081 12.7071L16.7081 22.7071C16.6152 22.8001 16.5049 22.8738 16.3835 22.9241C16.2621 22.9745 16.132 23.0004 16.0006 23.0004C15.8691 23.0004 15.739 22.9745 15.6176 22.9241C15.4962 22.8738 15.3859 22.8001 15.2931 22.7071L5.29306 12.7071C5.10542 12.5194 5 12.2649 5 11.9996C5 11.7342 5.10542 11.4797 5.29306 11.2921C5.4807 11.1044 5.73519 10.999 6.00056 10.999C6.26592 10.999 6.52042 11.1044 6.70806 11.2921L16.0006 20.5858L25.2931 11.2921C25.386 11.1992 25.4963 11.1255 25.6177 11.0752C25.7391 11.0249 25.8692 10.999 26.0006 10.999C26.132 10.999 26.2621 11.0249 26.3835 11.0752C26.5048 11.1255 26.6151 11.1992 26.7081 11.2921C26.801 11.385 26.8747 11.4953 26.9249 11.6167C26.9752 11.7381 27.0011 11.8682 27.0011 11.9996C27.0011 12.131 26.9752 12.2611 26.9249 12.3825C26.8747 12.5039 26.801 12.6142 26.7081 12.7071Z" fill="#343330"/>
                </svg>
              </span>
            </a>
            <div class="dropdown">
              <DropDown :selectedOption="selectedAttraction" :options="attractionOptions"
                @update:selectedOption="selectedAttraction = $event" />
            </div>
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

<script>
export default {
  data() {
    return {
      showHistoryDropdown: false,
      // Your other data properties
    };
  },
  methods: {
    keSejarah() {
      this.showHistoryDropdown = !this.showHistoryDropdown;
    },
    toggleDropdown() {
      this.showHistoryDropdown = !this.showHistoryDropdown;
    },
    // Your other methods
  },
};
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
  margin-left: 24em;
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
