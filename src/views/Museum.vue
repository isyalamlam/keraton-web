<template>
  <nav>
    <navbar :transparent="true" />
  </nav>
  <body>
    <div class="image-container">
      <img
        alt="Area Keraton Image"
        class="image"
        src="../assets/images/image 19.png"
      />
      <p class="image-text">MUSEUM PUSAKA</p>
      <p class="text-bottom1">
        Museum Pusaka ini terletak di dalam kompleks Keraton Kasepuhan, Cirebon,
        Jawa Barat.
      </p>
      <p class="text-bottom2">
        Didirikan pada tahun 1981 oleh Sultan Sepuh XIV, Pangeran Raja Mochamad
        Jayadiningrat.
      </p>
      <p class="text-bottom3">
        Museum ini memiliki luas sekitar 1.200 meter persegi dan terdiri dari
        dua lantai.
      </p>
      <a class="arrow-down" @click="scrollToContent"
        ><img src="../assets/images/Frame.svg"
      /></a>
    </div>

    <div class="Destinasi">
      <p><span class="bold">Mengenal</span> sejarah dan budaya Cirebon</p>
    </div>
    <p class="bawah-destinasi">
      Museum ini menyimpan berbagai koleksi benda bersejarah, seperti kereta
      kencana, gamelan, dan lukisan.
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

    <div class="Fasilitas">
      <p>Fasilitas</p>
      <p class="Fasilitas-Text">
        Fasilitas di Keraton Kasepuhan Cirebon cukup lengkap untuk menunjang
        kegiatan wisata dan budaya.
      </p>
    </div>

    <div class="Fasilitas-Images">
      <div class="card">
        <p class="card-text">Ruang Pameran</p>
      </div>
      <div class="card2">
        <p class="card-text2">Ruang Audio Visual</p>
      </div>
      <div class="Fasilitas-Images2">
        <div class="card3">
          <p class="card-text3">Ruang Kelas</p>
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
      <button class="button-Kunjungan">Dapatkan Tiket Sekarang!</button>
    </div>

    <div class="Paket">
      <p class="bold2">Tiket Masuk Museum Pusaka</p>
      <div class="teks-kunjungan">
        <p>Rp. 15.000/orang</p>
      </div>
      <div class="teks-kunjungan2">
        <p>Area Museum Pusaka</p>
      </div>

      <img class="paket-images" src="../assets/images/museumPaket.png" />
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

      currentIndex: 3,
    };
  },
  computed: {
    bullets() {
      return Array(this.cards.length).fill("");
    },
  },
  methods: {
    prevCard() {
      if (this.currentIndex === 0) {
        this.currentIndex = this.cards.length - 1;
      } else {
        this.currentIndex--;
      }
    },
    nextCard() {
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
@import "../assets/css/Museum.css";
</style>
