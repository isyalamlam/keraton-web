<template>
  <div class="navbar">
    <div class="navbar-left">
      <img
        src="../assets/images/logo_keraton.png"
        alt="icon-aplikasi"
        class="app-icon"
      />
      <span class="app-name">Keraton Kesepuhan Cirebon</span>
    </div>
    <div class="navbar-right">
      <nav>
        <ul>
          <li><a href="#">Beranda</a></li>
          <li><a href="#">Sejarah</a></li>
          <li><a href="#">Booking</a></li>
          <li><a href="#">Objek Wisata</a></li>
          <li>
            <a href="#"
              ><img
                src="../assets/images/profile.jpg"
                alt="Foto Profil"
                class="profile-img"
            /></a>
          </li>
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
      Pelaksanaan
      <img src="../assets/images/arrow.png" alt="Arrow" class="arrow" />
    </button>
    <div class="dropdown-content">
      <div class="checkbox-container">
        <input type="checkbox" id="checkbox1" />
        <label for="checkbox1">Perminggu</label>
      </div>
      <div class="checkbox-container">
        <input type="checkbox" id="checkbox2" />
        <label for="checkbox2">Perbulan</label>
      </div>
      <div class="checkbox-container">
        <input type="checkbox" id="checkbox3" />
        <label for="checkbox3">Pertahun</label>
      </div>
    </div>
  </div>

  <div class="dropdown" id="jenisDropdown">
    <button class="dropbtn" onclick="toggleJenisDropdown()">
      Jenis Event
      <img src="../assets/images/arrow.png" alt="Arrow" class="arrow" />
    </button>
    <div class="dropdown-content">
      <div class="checkbox-container">
        <input type="checkbox" id="checkbox4" />
        <label for="checkbox4">Gratis</label>
      </div>
      <div class="checkbox-container">
        <input type="checkbox" id="checkbox5" />
        <label for="checkbox5">Berbayar</label>
      </div>
    </div>
  </div>

  <section>
    <div class="container">
      <div class="card-border">
        <div class="card">
          <img src="../assets/images/image1.png" alt="Cards 1" />
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
            <p>
              Kegiatan tadarus Alquran ini biasanya dibimbing oleh kaum masjid
              dan dilakukan dua kali khatam selama bulan Ramadan
            </p>
          </div>
          <a href=""
            ><button>
              Tambah<img
                src="../assets/images/Vector.png"
                alt="tiket"
              /></button
          ></a>
        </div>

        <div class="card">
          <img src="../assets/images/image2.png" alt="Cards 2" />
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
            <p>
              Peringatan Nisfu Syaban adalah salah satu tradisi yang
              dilaksanakan di Langgar Alit Keraton Kasepuhan Cirebon
            </p>
          </div>
          <a href=""
            ><button>
              Tambah<img
                src="../assets/images/Vector.png"
                alt="tiket"
              /></button
          ></a>
        </div>

        <div class="card">
          <img src="../assets/images/image3.png" alt="Cards 3" />
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
            <p>
              Keluarga Keraton Kasepuhan mengadakan acara Isra Miraj di Langgar
              Alit yang rutin digunakan untuk peringatan hari besar Islam
            </p>
          </div>
          <a href=""
            ><button>
              Tambah<img
                src="../assets/images/Vector.png"
                alt="tiket"
              /></button
          ></a>
        </div>

        <div class="card">
          <img src="../assets/images/image1.png" alt="Cards 4" />
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
            <p>
              Kegiatan tadarus Alquran ini biasanya dibimbing oleh kaum masjid
              dan dilakukan dua kali khatam selama bulan Ramadan
            </p>
          </div>
          <a href=""
            ><button>
              Tambah<img
                src="../assets/images/Vector.png"
                alt="tiket"
              /></button
          ></a>
        </div>

        <div class="card">
          <img src="../assets/images/image2.png" alt="Cards 5" />
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
            <p>
              Peringatan Nisfu Syaban adalah salah satu tradisi yang
              dilaksanakan di Langgar Alit Keraton Kasepuhan Cirebon
            </p>
          </div>
          <a href=""
            ><button>
              Tambah<img
                src="../assets/images/Vector.png"
                alt="tiket"
              /></button
          ></a>
        </div>

        <div class="card">
          <img src="../assets/images/image3.png" alt="Cards 6" />
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
            <p>
              Keluarga Keraton Kasepuhan mengadakan acara Isra Miraj di Langgar
              Alit yang rutin digunakan untuk peringatan hari besar Islam
            </p>
          </div>
          <a href=""
            ><button>
              Tambah<img
                src="../assets/images/Vector.png"
                alt="tiket"
              /></button
          ></a>
        </div>

        <div class="card">
          <img src="../assets/images/image1.png" alt="Cards 7" />
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
            <p>
              Kegiatan tadarus Alquran ini biasanya dibimbing oleh kaum masjid
              dan dilakukan dua kali khatam selama bulan Ramadan
            </p>
          </div>
          <a href=""
            ><button>
              Tambah<img
                src="../assets/images/Vector.png"
                alt="tiket"
              /></button
          ></a>
        </div>

        <div class="card">
          <img src="../assets/images/image2.png" alt="Cards 8" />
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
            <p>
              Peringatan Nisfu Syaban adalah salah satu tradisi yang
              dilaksanakan di Langgar Alit Keraton Kasepuhan Cirebon
            </p>
          </div>
          <a href=""
            ><button>
              Tambah<img
                src="../assets/images/Vector.png"
                alt="tiket"
              /></button
          ></a>
        </div>

        <div class="card">
          <img src="../assets/images/image3.png" alt="Cards 9" />
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
            <p>
              Keluarga Keraton Kasepuhan mengadakan acara Isra Miraj di Langgar
              Alit yang rutin digunakan untuk peringatan hari besar Islam
            </p>
          </div>
          <a href=""
            ><button>
              Tambah<img
                src="../assets/images/Vector.png"
                alt="tiket"
              /></button
          ></a>
        </div>

        <div class="card">
          <img src="../assets/images/image1.png" alt="Cards 10" />
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
            <p>
              Kegiatan tadarus Alquran ini biasanya dibimbing oleh kaum masjid
              dan dilakukan dua kali khatam selama bulan Ramadan
            </p>
          </div>
          <a href=""
            ><button>
              Tambah<img
                src="../assets/images/Vector.png"
                alt="tiket"
              /></button
          ></a>
        </div>

        <div class="card">
          <img src="../assets/images/image2.png" alt="Cards 11" />
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
            <p>
              Peringatan Nisfu Syaban adalah salah satu tradisi yang
              dilaksanakan di Langgar Alit Keraton Kasepuhan Cirebon
            </p>
          </div>
          <a href=""
            ><button>
              Tambah<img
                src="../assets/images/Vector.png"
                alt="tiket"
              /></button
          ></a>
        </div>

        <div class="card">
          <img src="../assets/images/image3.png" alt="Cards 12" />
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
            <p>
              Keluarga Keraton Kasepuhan mengadakan acara Isra Miraj di Langgar
              Alit yang rutin digunakan untuk peringatan hari besar Islam
            </p>
          </div>
          <a href=""
            ><button>
              Tambah<img
                src="../assets/images/Vector.png"
                alt="tiket"
              /></button
          ></a>
        </div>
      </div>
    </div>
  </section>

  <div class="footer-left">
    <img
      src="../assets/images/logo_keraton.png"
      alt="icon-aplikasi"
      class="footer-icon"
    />
    <span class="footer-name">Keraton Kesepuhan Cirebon</span>
  </div>
  <div
    class="keraton_part m-top-15"
    v-for="(section, index) in sections"
    :key="index"
  >
    <h5>{{ section.title }}</h5>
    <ul class="keraton_social_links">
      <li v-for="(link, i) in section.links" :key="i">
        <a :href="link.url"
          ><i :class="link.icon" aria-hidden="true"></i> {{ link.label }}</a
        >
      </li>
    </ul>
  </div>
  <div class="keraton_part m-top-15">
    <h5>Subscribes your email for <br />updates!</h5>
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
    <p>In collaboration</p>
  </div>
  <div>
    <img src="../assets/images/logo_keraton.png" alt="Foto 1" class="image1" />
    <img src="../assets/images/curaweda.png" alt="Foto 2" class="image2" />
    <img src="../assets/images/telkom.png" alt="Foto 3" class="image3" />
    <img src="../assets/images/bjb.png" alt="Foto 4" class="image4" />
  </div>
  <div class="kkcirebon">
    <p>
      @ 2024 Keraton Kasepuhan Cirebon <a><i class="fa fa-love"></i></a>
    </p>
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

import { ref } from "vue";

const sections = ref([
  {
    title: "Quick Links",
    links: [
      { url: "#", icon: "Beranda", label: "Beranda" },
      { url: "#", icon: "Sejarah", label: "Sejarah" },
      { url: "#", icon: "Booking", label: "Booking" },
      { url: "#", icon: "Objek-Wisata", label: "Objek Wisata" },
    ],
  },
  {
    title: "Socials",
    links: [
      { url: "#", icon: "Whatsapp", label: "Whatsapp" },
      { url: "#", icon: "Facebook", label: "Facebook" },
      { url: "#", icon: "Instagram", label: "Instagram" },
      { url: "#", icon: "Threads", label: "Threads" },
    ],
  },
  {
    title: "Company",
    links: [
      { url: "#", icon: "About-us", label: "About us" },
      { url: "#", icon: "Partners", label: "Partners" },
      { url: "#", icon: "Contact", label: "Contact" },
    ],
  },
]);
</script>

<style scoped>
@import "../assets/css/EventGratis.css";
</style>
