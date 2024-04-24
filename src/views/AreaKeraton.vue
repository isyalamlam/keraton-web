<template>
  <nav>
    <navbar :transparent="true" />
  </nav>
  <body>
    <div class="image-container">
      <img
        alt="Area Keraton Image"
        class="image"
        src="../assets/images/image20.png"
      />
      <p class="image-text">BALUARTI KERATON</p>
      <p class="text-bottom1">
        Keraton Kasepuhan Cirebon adalah salah satu dari empat keraton di
        Cirebon, Jawa Barat.
      </p>
      <p class="text-bottom2">
        Didirikan pada tahun 1430 oleh Pangeran Cakrabuana, pendiri Kerajaan
        Cirebon.
      </p>
      <p class="text-bottom3">
        Keraton Kasepuhan merupakan salah satu peninggalan sejarah yang penting
        di Cirebon
      </p>
      <a class="arrow-down" @click="scrollToContent"
        ><img src="../assets/images/Frame.svg"
      /></a>
    </div>

    <div class="Destinasi">
      <p>Destinasi wisata yang <span class="bold">wajib</span> dikunjungi</p>
    </div>
    <p class="bawah-destinasi">
      Menawarkan berbagai hal menarik untuk dilihat dan dipelajari, mulai dari
      sejarah, arsitektur, hingga budaya.
    </p>

    <div class="slider">
      <div
        v-for="(card, index) in cards"
        :key="index"
        :id="'card-' + index"
        :class="{ cardd: true, active: index === currentIndex }"
      >
        {{ card.content }}
      </div>
    </div>

    <div class="button-container">
      <button class="button-slider" @click="prevCard">&lt;</button>
      <div
        class="bulet"
        v-for="(bullet, index) in bullets"
        :key="index"
        :class="{ active: index === currentIndex }"
      ></div>
      <button class="button-slider" @click="nextCard">&gt;</button>
    </div>

    <div class="Tourist">
      <p>Top <span class="bold">Tourist</span> attraction</p>
      <a class="arrow-down2" @click="scrollToContent2"
        ><img src="../assets/images/Frame.svg"
      /></a>
    </div>

    <div class="Tourist-Container">
      <div class="Tourist-content">
        <a class="Hiasan"><img src="../assets/images/Tagline.svg" /></a>
        <p class="Dalem">Dalem Agung Pakungwati</p>
        <p class="Isi-Dalem">
          Dalem Agung Pakungwati merupakan kompleks bangunan utama<br />
          keraton. Kompleks ini terdiri dari berbagai bangunan, seperti
          pendopo,<br />
          masjid, dan museum. Masjid Agung Kasepuhan merupakan salah satu<br />
          masjid tertua di Cirebon dan merupakan salah satu bangunan
          bersejarah<br />
          yang penting di kota ini.
        </p>
        <a class="Hiasan"><img src="../assets/images/Content.svg" /></a>
      </div>
      <img alt="" class="image-Tourist" src="../assets/images/image 21.png" />
    </div>

    <div class="Tourist-Container">
      <div class="Tourist-content2">
        <a class="Hiasan2"><img src="../assets/images/Tagline2.svg" /></a>
        <p class="Dalem2">Masjid Agung Kasepuhan</p>
        <p class="Isi-Dalem2">
          Masjid Agung Kasepuhan merupakan salah satu masjid tertua di Cirebon
          dan merupakan salah satu bangunan bersejarah yang penting di kota ini.
          Masjid ini dibangun pada tahun 1480 oleh Sunan Gunung Jati, salah satu
          Wali Songo.
        </p>
        <a class="Hiasan2"><img src="../assets/images/Content.svg" /></a>
      </div>
      <img alt="" class="image-Tourist2" src="../assets/images/image34.png" />
    </div>

    <div class="Tourist-Container">
      <div class="Tourist-content3">
        <a class="Hiasan"><img src="../assets/images/Tagline3.svg" /></a>
        <p class="Dalem">Museum Pusaka Kasepuhan</p>
        <p class="Isi-Dalem">
          Museum Pusaka Keraton Kasepuhan menyimpan berbagai koleksi benda
          bersejarah, seperti kereta kencana, gamelan, dan lukisan. Salah satu
          koleksi yang paling terkenal adalah kereta kencana Singa Barong, yang
          merupakan kereta kencana Sunan Gunung Jati.
        </p>
        <a class="Hiasan"><img src="../assets/images/Content.svg" /></a>
      </div>
      <img alt="" class="image-Tourist3" src="../assets/images/image 35.png" />
    </div>

    <div class="Lokasi-container">
      <div class="Lokasi">
        <p>Lokasi</p>
      </div>
      <div class="Lokasi-samping">
        <p>
          Dengan luas sekitar 13,5 hektar dan terdiri dari 2 komplek yaitu Dalem
          Agung Pakungwati dan kompleks Keraton Pakungwati.
        </p>
      </div>
    </div>

    <div class="Denah">
      <img src="../assets/images/Frame 80.png" />
    </div>

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.3439357079596!2d108.5708669!3d-6.7278234999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6ee263eaaaaaab%3A0x20ea18cbfb1df195!2sKeraton%20Kasepuhan!5e0!3m2!1sid!2sid!4v1710081749605!5m2!1sid!2sid"
      width="600"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>

    <div class="Fasilitas">
      <p>Fasilitas</p>
      <p class="Fasilitas-Text">
        Fasilitas di Keraton Kasepuhan Cirebon cukup lengkap untuk menunjang
        kegiatan wisata dan budaya.
      </p>
    </div>

    <div class="Fasilitas-Images">
      <div class="card">
        <p class="card-text">Area Parkir</p>
      </div>
      <div class="card2">
        <p class="card-text2">Tempat Ibadah</p>
      </div>
      <div class="Fasilitas-Images2">
        <div class="card3">
          <p class="card-text3">Toilet</p>
        </div>
        <div class="card4">
          <p class="card-text4">Tempat Penjualan Souvenir</p>
        </div>
      </div>
    </div>

    <div class="Kunjungan">
      <p>Kunjungan</p>
      <p class="Kunjungan-Text">
        Kunjungi Keraton Kasepuhan Cirebon dengan berbagai pilihan paket wisata
        yang menarik.
      </p>
    </div>

    <div class="Paket">
      <img src="../assets/images/Frame 81.png" />
      <img src="../assets/images/Frame 82.png" />
      <img src="../assets/images/Frame 83.png" />
      <img src="../assets/images/Frame 84.png" />
    </div>
    <div class="footer">
      <div class="logo">
        <img src="../assets/images/logo_keraton.png" alt="" />
        <p>KERATON <br />KASEPUHAN <br />CIREBON</p>
      </div>
      <div class="footer-col">
        <div class="footer-col-1">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Beranda</a></li>
            <li><a href="#">Sejarah</a></li>
            <li><a href="#">Booking</a></li>
            <li><a href="#">Objek Wisata</a></li>
          </ul>
        </div>
        <div class="footer-col-2">
          <h3>Socials</h3>
          <ul>
            <li><a href="#">Whatsapp</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Threads</a></li>
          </ul>
        </div>
        <div class="footer-col-3">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Partners</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div class="footer-col-4">
          <h3>Subscribes your email for updates!</h3>
          <button class="button">Enter your email</button>
        </div>
      </div>
      <div class="adress">Jalan Kasepuhan 43 Cirebon, Jawa Barat 45114</div>
      <div class="lower">
        <div class="inlower">@2024 Keraton Kasepuhan Cirebon</div>
        <div class="susun">
          <p>In collaboration</p>

          <div class="collab">
            <img src="../assets/images/logo_keraton.png" alt="" class="foto1" />
            <img src="../assets/images/1 931.png" alt="" class="foto2" />
            <img src="../assets/images/telkom.png" alt="" class="foto3" />
            <img src="../assets/images/bjb.png" alt="" class="foto4" />
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script setup>
import navbar from "../components/NavBar.vue";
</script>

<script>
const scrollToContent = () => {
  document.querySelector(".Destinasi").scrollIntoView({
    behavior: "smooth",
  });
};

const scrollToContent2 = () => {
  document.querySelector(".Tourist").scrollIntoView({
    behavior: "smooth",
  });
};

export default {
  data() {
    return {
      cards: [
        { id: "card-0" },
        { id: "card-1" },
        { id: "card-2" },
        { id: "card-3" },
        { id: "card-4" },
      ],
      currentIndex: 2, // Set currentIndex untuk menunjuk ke tengah awalnya
    };
  },
  computed: {
    bullets() {
      return Array(this.cards.length).fill("");
    },
  },
  methods: {
    prevCard() {
      // Cek apakah currentIndex adalah 0, jika ya, geser ke kartu terakhir
      if (this.currentIndex === 0) {
        this.currentIndex = this.cards.length - 1;
      } else {
        this.currentIndex--;
      }
    },
    nextCard() {
      // Cek apakah currentIndex adalah kartu terakhir, jika ya, geser ke kartu pertama
      if (this.currentIndex === this.cards.length - 1) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
    },
  },
};
</script>

<style scoped>
@import "../assets/css/AreaKeraton.css";
</style>
