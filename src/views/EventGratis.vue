<template>
  <div class="navbar">
    <div class="navbar-left">
      <img src="../assets/images/logo_keraton.png" alt="icon-aplikasi" class="app-icon">
      <span class="app-name">Keraton Kesepuhan Cirebon</span>
    </div>
    <div class="navbar-right">
      <nav>
        <ul>
          <li><a href="#">Beranda</a></li>
          <li><a href="#">Sejarah</a></li>
          <li><a href="#">Booking</a></li>
          <li><a href="#">Objek Wisata</a></li>
          <li><a href="#"><img src="../assets/images/profile.jpg" alt="Foto Profil" class="profile-img"></a></li>
        </ul>
      </nav>
    </div>
  </div>
  <div class="header2">
    <div class="text1">
      <ul>
        <il href="#">Booking / Tiket Event</il>
      </ul>
      <ul>
        <a class="text2">
          <a>Tiket Event Upacara Adat Tradisi</a>
        </a>
      </ul>
    </div>
  </div>

  <div class="dropdown" id="myDropdown">
    <button class="dropbtn" onclick="toggleDropdown()">
      Pelaksanaan <img src="../assets/images/arrow.png" alt="Arrow" class="arrow">
    </button>
    <div class="dropdown-content">
      <div class="checkbox-container">
        <input type="checkbox" id="checkbox1">
        <label for="checkbox1">Perminggu</label>
      </div>
      <div class="checkbox-container">
        <input type="checkbox" id="checkbox2">
        <label for="checkbox2">Perbulan</label>
      </div>
      <div class="checkbox-container">
        <input type="checkbox" id="checkbox3">
        <label for="checkbox3">Pertahun</label>
      </div>
    </div>
  </div>

  <div class="dropdown" id="jenisDropdown">
    <button class="dropbtn" onclick="toggleJenisDropdown()">
      Jenis Event <img src="../assets/images/arrow.png" alt="Arrow" class="arrow">
    </button>
    <div class="dropdown-content">
      <div class="checkbox-container">
        <input type="checkbox" id="checkbox4">
        <label for="checkbox4">Gratis</label>
      </div>
      <div class="checkbox-container">
        <input type="checkbox" id="checkbox5">
        <label for="checkbox5">Berbayar</label>
      </div>
    </div>
  </div>



  <section>
    <div class="container">
      <div class="card-border">
        <div class="card">
          <img src="../assets/images/image1.png" alt="Cards 1">
          <div class="pelaksanaan">
            <p>Perminggu</p>
          </div>
          <div class="jenisEvent">
            <p>Gratis</p>
          </div>
          <div class="judul">
            <h3>Peringatan isra mi'raj di langgar alit</h3>
          </div>
          <div class="description">
            <p>Kegiatan tadarus Alquran ini biasanya dibimbing oleh kaum masjid dan dilakukan dua kali khatam selama
              bulan Ramadan</p>
          </div>
          <a href=""><button>Tambah<img src="../assets/images/Vector.png" alt="tiket"></button></a>
        </div>

        <div class="card">
          <img src="../assets/images/image2.png" alt="Cards 2">
          <div class="pelaksanaan">
            <p>Perminggu</p>
          </div>
          <div class="jenisEvent">
            <p>Gratis</p>
          </div>
          <div class="judul">
            <h3>Peringatan isra mi'raj di langgar alit</h3>
          </div>
          <div class="description">
            <p>Peringatan Nisfu Syaban adalah salah satu tradisi yang dilaksanakan di Langgar Alit Keraton Kasepuhan
              Cirebon</p>
          </div>
          <a href=""><button>Tambah<img src="../assets/images/Vector.png" alt="tiket"></button></a>
        </div>

        <div class="card">
          <img src="../assets/images/image3.png" alt="Cards 3">
          <div class="pelaksanaan">
            <p>Perminggu</p>
          </div>
          <div class="jenisEvent">
            <p>Gratis</p>
          </div>
          <div class="judul">
            <h3>Peringatan isra mi'raj di langgar alit</h3>
          </div>
          <div class="description">
            <p>Keluarga Keraton Kasepuhan mengadakan acara Isra Miraj di Langgar Alit yang rutin digunakan untuk
              peringatan hari besar Islam</p>
          </div>
          <a href=""><button>Tambah<img src="../assets/images/Vector.png" alt="tiket"></button></a>
        </div>

        <div class="card">
          <img src="../assets/images/image1.png" alt="Cards 4">
          <div class="pelaksanaan">
            <p>Perminggu</p>
          </div>
          <div class="jenisEvent">
            <p>Gratis</p>
          </div>
          <div class="judul">
            <h3>Peringatan isra mi'raj di langgar alit</h3>
          </div>
          <div class="description">
            <p>Kegiatan tadarus Alquran ini biasanya dibimbing oleh kaum masjid dan dilakukan dua kali khatam selama
              bulan Ramadan</p>
          </div>
          <a href=""><button>Tambah<img src="../assets/images/Vector.png" alt="tiket"></button></a>
        </div>

        <div class="card">
          <img src="../assets/images/image2.png" alt="Cards 5">
          <div class="pelaksanaan">
            <p>Perminggu</p>
          </div>
          <div class="jenisEvent">
            <p>Gratis</p>
          </div>
          <div class="judul">
            <h3>Peringatan isra mi'raj di langgar alit</h3>
          </div>
          <div class="description">
            <p>Peringatan Nisfu Syaban adalah salah satu tradisi yang dilaksanakan di Langgar Alit Keraton Kasepuhan
              Cirebon</p>
          </div>
          <a href=""><button>Tambah<img src="../assets/images/Vector.png" alt="tiket"></button></a>
        </div>

        <div class="card">
          <img src="../assets/images/image3.png" alt="Cards 6">
          <div class="pelaksanaan">
            <p>Perminggu</p>
          </div>
          <div class="jenisEvent">
            <p>Gratis</p>
          </div>
          <div class="judul">
            <h3>Peringatan isra mi'raj di langgar alit</h3>
          </div>
          <div class="description">
            <p>Keluarga Keraton Kasepuhan mengadakan acara Isra Miraj di Langgar Alit yang rutin digunakan untuk
              peringatan hari besar Islam</p>
          </div>
          <a href=""><button>Tambah<img src="../assets/images/Vector.png" alt="tiket"></button></a>
        </div>

        <div class="card">
          <img src="../assets/images/image1.png" alt="Cards 7">
          <div class="pelaksanaan">
            <p>Perminggu</p>
          </div>
          <div class="jenisEvent">
            <p>Gratis</p>
          </div>
          <div class="judul">
            <h3>Peringatan isra mi'raj di langgar alit</h3>
          </div>
          <div class="description">
            <p>Kegiatan tadarus Alquran ini biasanya dibimbing oleh kaum masjid dan dilakukan dua kali khatam selama
              bulan Ramadan</p>
          </div>
          <a href=""><button>Tambah<img src="../assets/images/Vector.png" alt="tiket"></button></a>
        </div>

        <div class="card">
          <img src="../assets/images/image2.png" alt="Cards 8">
          <div class="pelaksanaan">
            <p>Perminggu</p>
          </div>
          <div class="jenisEvent">
            <p>Gratis</p>
          </div>
          <div class="judul">
            <h3>Peringatan isra mi'raj di langgar alit</h3>
          </div>
          <div class="description">
            <p>Peringatan Nisfu Syaban adalah salah satu tradisi yang dilaksanakan di Langgar Alit Keraton Kasepuhan
              Cirebon</p>
          </div>
          <a href=""><button>Tambah<img src="../assets/images/Vector.png" alt="tiket"></button></a>
        </div>

        <div class="card">
          <img src="../assets/images/image3.png" alt="Cards 9">
          <div class="pelaksanaan">
            <p>Perminggu</p>
          </div>
          <div class="jenisEvent">
            <p>Gratis</p>
          </div>
          <div class="judul">
            <h3>Peringatan isra mi'raj di langgar alit</h3>
          </div>
          <div class="description">
            <p>Keluarga Keraton Kasepuhan mengadakan acara Isra Miraj di Langgar Alit yang rutin digunakan untuk
              peringatan hari besar Islam</p>
          </div>
          <a href=""><button>Tambah<img src="../assets/images/Vector.png" alt="tiket"></button></a>
        </div>

        <div class="card">
          <img src="../assets/images/image1.png" alt="Cards 10">
          <div class="pelaksanaan">
            <p>Perminggu</p>
          </div>
          <div class="jenisEvent">
            <p>Gratis</p>
          </div>
          <div class="judul">
            <h3>Peringatan isra mi'raj di langgar alit</h3>
          </div>
          <div class="description">
            <p>Kegiatan tadarus Alquran ini biasanya dibimbing oleh kaum masjid dan dilakukan dua kali khatam selama
              bulan Ramadan</p>
          </div>
          <a href=""><button>Tambah<img src="../assets/images/Vector.png" alt="tiket"></button></a>
        </div>

        <div class="card">
          <img src="../assets/images/image2.png" alt="Cards 11">
          <div class="pelaksanaan">
            <p>Perminggu</p>
          </div>
          <div class="jenisEvent">
            <p>Gratis</p>
          </div>
          <div class="judul">
            <h3>Peringatan isra mi'raj di langgar alit</h3>
          </div>
          <div class="description">
            <p>Peringatan Nisfu Syaban adalah salah satu tradisi yang dilaksanakan di Langgar Alit Keraton Kasepuhan
              Cirebon</p>
          </div>
          <a href=""><button>Tambah<img src="../assets/images/Vector.png" alt="tiket"></button></a>
        </div>

        <div class="card">
          <img src="../assets/images/image3.png" alt="Cards 12">
          <div class="pelaksanaan">
            <p>Perminggu</p>
          </div>
          <div class="jenisEvent">
            <p>Gratis</p>
          </div>
          <div class="judul">
            <h3>Peringatan isra mi'raj di langgar alit</h3>
          </div>
          <div class="description">
            <p>Keluarga Keraton Kasepuhan mengadakan acara Isra Miraj di Langgar Alit yang rutin digunakan untuk
              peringatan hari besar Islam</p>
          </div>
          <a href=""><button>Tambah<img src="../assets/images/Vector.png" alt="tiket"></button></a>
        </div>
      </div>
    </div>
  </section>

  <div class="footer-left">
    <img src="../assets/images/logo_keraton.png" alt="icon-aplikasi" class="footer-icon">
    <span class="footer-name">Keraton Kesepuhan Cirebon</span>


  </div>
  <div class="keraton_part m-top-15" v-for="(section, index) in sections" :key="index">
    <h5>{{ section.title }}</h5>
    <ul class="keraton_social_links">
      <li v-for="(link, i) in section.links" :key="i">
        <a :href="link.url"><i :class="link.icon" aria-hidden="true"></i> {{ link.label }}</a>
      </li>
    </ul>
  </div>
  <div class="keraton_part m-top-15">
    <h5>Subscribes your email for <br>updates!</h5>
    <button class="button-e" role="button">Enter your email</button>
  </div>
  <div class="Jalan">
    <div class="alamat">
      <p>Jalan Kasepuhan 43</p>
      <p>Cirebon, Jawa Barat</p>
      <p>45114</p>
    </div>
  </div>
  <div class="collab">
    <p>In collaboration </p>
  </div>
  <div>
    <img src="../assets/images/logo_keraton.png" alt="Foto 1" class="image1">
    <img src="../assets/images/curaweda.png" alt="Foto 2" class="image2">
    <img src="../assets/images/telkom.png" alt="Foto 3" class="image3">
    <img src="../assets/images/bjb.png" alt="Foto 4" class="image4">
  </div>
  <div class="kkcirebon">
    <p>@ 2024 Keraton Kasepuhan Cirebon <a><i class="fa fa-love"></i></a></p>
  </div>
</template>

<script setup>
function toggleDropdown() {
  var dropdown = document.getElementById("myDropdown");
  dropdown.classList.toggle("active");
}

function toggleJenisDropdown() {
  var dropdown = document.getElementById("jenisDropdown");
  dropdown.classList.toggle("active");
}

import { ref } from 'vue';

const sections = ref([
  {
    title: 'Quick Links',
    links: [
      { url: '#', icon: 'Beranda', label: 'Beranda' },
      { url: '#', icon: 'Sejarah', label: 'Sejarah' },
      { url: '#', icon: 'Booking', label: 'Booking' },
      { url: '#', icon: 'Objek-Wisata', label: 'Objek Wisata' }
    ]
  },
  {
    title: 'Socials',
    links: [
      { url: '#', icon: 'Whatsapp', label: 'Whatsapp' },
      { url: '#', icon: 'Facebook', label: 'Facebook' },
      { url: '#', icon: 'Instagram', label: 'Instagram' },
      { url: '#', icon: 'Threads', label: 'Threads' }
    ]
  },
  {
    title: 'Company',
    links: [
      { url: '#', icon: 'About-us', label: 'About us' },
      { url: '#', icon: 'Partners', label: 'Partners' },
      { url: '#', icon: 'Contact', label: 'Contact' }
    ]
  }
]);


</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap');

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.card-border {
  border-radius: 8px;
  padding: 40px;
  overflow: hidden;
}

.card-border {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.card {
  display: flex;
  align-items: center;
  width: 305px;
  height: 398.15px;
  padding: 20px;
  border-radius: 8px;
  box-sizing: border-box;
  margin: 13px 10px;
}

.card img {
  width: 200%;
  height: 50%;
  object-fit: cover;
  margin-top: -178px;
  margin-left: 0px;
  border-radius: 8px;
}

.card button {
  margin-top: 330px;
  margin-left: -118px;
  border-radius: 8px;
  border: none;
  width: 120px;
  height: 40px;
  background-color: #FAE084;
  font-weight: 600;
  display: flex;
  justify-content: flex-end;
  /* Aligns the content to the right */
  align-items: center;
  padding-right: 10px;
}

.judul h3 {
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  font-weight: 200;
  margin-top: 110px;
  margin-left: -320px;
}

.description p {
  font-family: 'Raleway', sans-serif;
  font-size: 14px;
  font-weight: 200;
  margin-top: 225px;
  margin-left: -320px;
  line-height: 1.5;
}

.card button img {
  width: 27px;
  /* Adjust image size as needed */
  height: 20px;
  /* Adjust image size as needed */
  margin-left: 10px;
  /* Adds space between button text and image */
  margin-top: 1px;
  border-radius: 0;
}

.pelaksanaan p {
  border: 1px solid #ccc;
  /* Style border */
  border-radius: 12px;
  padding: 6px;
  /* Menambahkan ruang padding di dalam border */
  width: 73px;
  font-size: 12px;
  margin-top: 55px;
  margin-left: -320px;
  color: gray;
}

.jenisEvent p {
  border: 1px solid #ccc;
  /* Style border */
  border-radius: 12px;
  padding: 7px;
  /* Menambahkan ruang padding di dalam border */
  width: 50px;
  font-size: 12px;
  margin-top: 55px;
  margin-left: -240px;
  color: gray;
}

/*css filter*/
.dropbtn {
  width: 150px;
  height: 40px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid;
  position: absolute;
  top: 240px;
  left: 267px;
  display: flex;
  align-items: center;
  text-align: center;
  background-color: #fff;
  font-size: 14px;
  font-weight: 700;
  font-family: Raleway;
  color: #333333;
}

/* Style the arrow image */
.arrow {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: auto;
}

.dropdown-content {
  display: none;
  position: absolute;
  width: 150px;
  top: 260px;
  left: 267px;
  border: 1px solid;
  border-radius: 8px;
  background-color: #ffffff;
  font-weight: bold;
  font-family: 'Lexend', sans-serif;
}

.checkbox-container {
  display: flex;
  align-items: center;
  width: 100%;
  height: 24px;
  padding: 8px;
  gap: 8px;
  font-family: Lexend;
  font-size: 14px;
}

.checkbox-container label {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.dropdown.active .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown.active .dropbtn {
  background-color: #ffffff;
}

/* Change the background color of checkbox when checked */
.dropdown-content input[type="checkbox"]:checked {
  background-color: #bba42d;
}

/* Show border around checkbox */
.dropdown-content input[type="checkbox"]::before {
  border: 1px solid #000;
}

/* Hide border around checked checkbox */
.dropdown-content input[type="checkbox"]:checked::before {
  border-color: transparent;
}

/* Additional Dropdown */
#jenisDropdown {
  position: absolute;
  top: 0px;
  /* Updated top position */
  left: 192px;
}

/* Make Jenis Event dropdown text bold */
#jenisDropdown .dropbtn {
  font-weight: bold;
}

.footer-icon {
  position: absolute;
  width: 68px;
  height: 70.62px;
  left: 88px;
  top: 280%;
}

.footer-left {
  display: flex;
  align-items: center;
  flex: none;
  order: 0;
  flex-grow: 0;
  width: 217px;
  height: 84px;
}

.footer-name {
  position: absolute;
  width: 139px;
  height: 84px;
  left: 166px;
  top: 280%;
  color: black;
  font-size: 20px;
}

.keraton_part.m-top-15 {
  margin-left: 80px;
  margin-top: 5px;
  float: left;
  margin-right: 90px;
}

.keraton_part.m-top-15 h5 {
  font-size: 30px;
  font-family: 'Raleway', sans-serif;
  font-weight: normal;
  margin-top: 85px;
}

.keraton_social_links {
  list-style: none;
}

.keraton_social_links a {
  color: #212121;
  /* Mengubah warna teks menjadi #212121 */
  margin-bottom: 70px;
  /* Memberikan jarak ke bawah sebanyak 11px */
  text-decoration: none;
  /* Menghapus garis bawah pada teks */
  margin-top: 95px;
}

.keraton_social_links li {
  margin-bottom: 21px;
  margin-left: 1px;
  margin-top: 30px;
  font-size: 20px;
}

.button-e {
  appearance: none;
  background-color: #123B32;
  border: 2px solid #123B32;
  border-radius: 15px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 20px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 60px;
  min-width: 0;
  outline: none;
  padding: 16px 24px;
  text-align: left;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
  will-change: transform;
  width: calc(100% + 60px);
}

.button-e:disabled {
  pointer-events: none;
}

.button-e:hover {
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

.button-e:active {
  box-shadow: none;
  transform: translateY(0);
}

.jalan {
  position: relative;
  width: 300px;
  /* Atur lebar sesuai kebutuhan */
  height: 150px;
  /* Atur tinggi sesuai kebutuhan */
  padding: 20px;
}

.alamat {
  position: absolute;
  top: 353%;
  left: 168px;
  transform: translate(-50%, -50%);
  text-align: left;
  font-size: 20px;
  font-weight: normal;
}

.collab {
  position: absolute;
  top: 336%;
  left: 1110px;
  transform: translate(-50%, -50%);
  text-align: left;
  font-size: 20px;
}

.image1 {
  position: absolute;
  width: 68px;
  height: 70.62px;
  left: 58%;
  top: 343%;
}

.image2 {
  position: absolute;
  width: 69px;
  height: 74px;
  left: 66%;
  top: 343%;
}

.image3 {
  position: absolute;
  width: 53px;
  height: 71px;
  left: 75%;
  top: 343%;
}

.image4 {
  position: absolute;
  width: 100px;
  height: 49.01px;
  left: 82%;
  top: 343%;
}

.kkcirebon {
  position: absolute;
  top: 370%;
  left: 95px;
}

.header2 {
  background: linear-gradient(90deg,
      rgba(218, 165, 32, 0.5) 0%,
      rgba(18, 59, 50, 0.5) 100%);
  padding: 20px;
  text-align: center;
  width: 1519px;
  height: 101px;
  top: 104%;
  left: 100%;
}

.text1 {
  margin-left: 110px;
  font-size: 24px;
  font-family: Raleway;
}

.text1 {
  font-size: 14px;
  color: #212121;
  font-family: "Arial", sans-serif;
  width: 400px;
  height: 22px;
  top: 86.69px;
  left: 156px;
  line-height: 22px;
  text-align: left;
}

.text2 {
  width: 372px;
  height: 32px;
  top: 151px;
  left: 132px;
  font-family: Raleway;
  font-size: 24px;
  line-height: 32px;
  text-align: left;
  font-weight: bold;
}

.header {
  background: linear-gradient(90deg,
      rgba(218, 165, 32, 0.5) 0%,
      rgba(18, 59, 50, 0.5) 100%);
  padding: 20px;
  text-align: center;
  width: 1580px;
  height: 101px;
  top: 104px;
}

.text1 {
  margin-left: 110px
}

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
  margin-right: 12px;
}

nav ul li a {
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

nav ul li a:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.profile-img {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  position: absolute;
  right: 140px;
  top: 55px;
  transform: translateY(-50%);
}
</style>