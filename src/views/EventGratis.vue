<template>
  <nav>
    <navbar border/>
  </nav>
  <div class="header">
    <div class="text1">
      <ul>
        <il href="#">Booking / Tiket Event</il>
      </ul>
      <div class="kakaje">
        <ul>
          <a class="text2">
            <strong
              ><a class="text2">Tiket Event Upacara Adat Tradisi</a></strong
            >
          </a>
        </ul>
      </div>
    </div>
  </div>
  <div class="dropdown">
    <button @click="toggleDropdown" class="dropdown-toggle">
      {{ dropdownTitle }} <img src="../assets/images/shape.png" />
    </button>
    <div v-if="isOpen" class="dropdown-menu">
      <label
        v-for="(option, index) in options"
        :key="index"
        class="checkbox-container"
      >
        <input
          type="checkbox"
          :value="option.value"
          v-model="selectedOptions"
        />
        {{ option.label }}
      </label>
    </div>
    <div class="kami">
      <button @click="toggleDropdown2" class="dropdown-toggle2">
        {{ dropdownTitle2 }} <img src="../assets/images/shape.png" />
      </button>
      <div v-if="isOpen2" class="dropdown-menu2">
        <label
          v-for="(option2, index2) in options2"
          :key="index2"
          class="checkbox-container"
        >
          <input
            type="checkbox"
            :value="option2.value"
            v-model="selectedOptions2"
          />
          {{ option2.label }}
        </label>
      </div>
    </div>
    <div class="container">
      <div class="ni" v-for="(item, index) in items" :key="index">
    <img class="image" :src="item.image" alt="Gambar" />
     <div class="buttonaji">
    <button class="btn-small">{{ item.buttonText1 }}</button>
    <button class="btn-small">{{ item.buttonText2 }}</button>
          </div>
          <h2 class="judul-sedang">{{ item.titleMedium }}</h2>
          <h1 class="judul-besar">{{ item.titleBig }}</h1>
          <div class="tengah">
          <button class="tambah">
          Tambah <img class="photo" src="../assets/Frame.svg" />
        </button>
      </div>
    </div>
  </div>
</div>

<div class="footer">

<div class="logo">
  <img src="../assets/images/logo_keraton.png" alt="">
  <p>KERATON <br>KASEPUHAN <br>CIREBON</p>
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
<div class="adress">
  Jalan Kasepuhan 43
  Cirebon, Jawa Barat
  45114
</div>
<div class="lower">
  <div class="inlower">
    @2024 Keraton Kasepuhan Cirebon
  </div>
  <div class="susun">
    <p>In collaboration</p>

    <div class="collab">
      <img src="../assets/images/logo_keraton.png" alt="" class="foto1">
      <img src="../assets/images/1 931.svg" alt="" class="foto2">
      <img src="../assets/images/telkom.svg" alt="" class="foto3">
      <img src="../assets/images/bjb.svg" alt="" class="foto4">

    </div>
  </div>
</div>
</div>

</template>

<script setup>
import navbar from "../components/NavBarend.vue";
</script>

<script>
import { ref } from "vue";

export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    dropdownTitle: {
      type: String,
      default: "Pelaksanaan",
    },
    dropdownTitle2: {
      type: String,
      default: "Jenis Event",
    },
  },
  data() {
    return {
      isOpen: false,
      isOpen2: false,
      imageUrl: "../assets/trigger.svg",
      options: [
        { label: "Hari", value: "Perminggu" },
        { label: "Minggu", value: "Perminggu" },
        { label: "Bulan", value: "Perminggu" },
      ],
      options2: [
        { label: "Gratis", value: "Gratis" },
      ],
      selectedOptions: [],
      selectedOptions2: [],
      items: [
        {
          image: "src/assets/images/isra.png",
          buttonText1: "Perminggu",
          buttonText2: "Gratis",
          titleMedium: "Peringatan isra mi'raj di langgar alit",
          titleBig:
            "Keluarga Keraton Kasepuhan mengadakan acara Isra Miraj di Langgar Alit yang rutin digunakan untuk peringatan hari besar Islam",
        },
        {
          image: "/src/assets/images/sholat.png",
          buttonText1: "Perminggu",
          buttonText2: "Gratis",
          titleMedium: "Perayaan Maulid Nabi di Masjid Agung",
          titleBig:
            "Komunitas Muslim mengadakan acara perayaan Maulid Nabi di Masjid Agung setempat",
        },
        {
          image: "src/assets/images/bedug.png",
          buttonText1: "Perminggu",
          buttonText2: "Gratis",
          titleMedium: "Tadarus di langgar alit",
          titleBig:
            "Kegiatan tadarus Alquran ini biasanya dibimbing oleh kaum masjid dan dilakukan dua kali khatam selama bulan Ramadan",
        },
      ],
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    toggleDropdown2() {
      this.isOpen2 = !this.isOpen2;
    },
    selectOption(option) {
      this.selectedOptions.push(option);
    },
    selectOption2(option) {
      this.selectedOptions2.push(option);
    },
    applySelection() {
      // Close dropdowns
      this.isOpen = false;
      this.isOpen2 = false;
      // Filter items based on selected options
      const filteredItems = this.items.filter((item) => {
        // Check if item matches selected pelaksanaan option
        const pelaksanaanMatch =
          this.selectedOptions.length === 0 ||
          this.selectedOptions.includes(item.buttonText1.toLowerCase());
        // Check if item matches selected jenis event option
        const jenisEventMatch =
          this.selectedOptions2.length === 0 ||
          this.selectedOptions2.includes(item.buttonText2.toLowerCase());
        return pelaksanaanMatch && jenisEventMatch;
      });
      console.log("Filtered items:", filteredItems);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");

.header {
  background: linear-gradient(
    90deg,
    rgba(218, 165, 32, 0.5) 0%,
    rgba(18, 59, 50, 0.5) 100%
  );
  padding: 20px;
  text-align: center;
  width: 100%;
  height: 101px;
  top: 104px;
  flex-direction: row;
  gap: 327px;
  display: flex;
  flex: none;
  order: 0;
  flex-grow: 0;
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

.opsi1 {
  width: 150px;
  height: 40px;
  top: 228px;
  left: 132px;
  font-family: "Lexend", sans-serif;
  padding: 10px;
  border-radius: 8px;
  background: #ffffff;
  border: 1px solid;
  border-color: #e0e0e0;
  margin-left: 129px;
}

.opsi2 {
  width: 150px;
  height: 40px;
  top: 228px;
  left: 132px;
  font-family: "Lexend", sans-serif;
  padding: 10px;
  border-radius: 8px;
  background: #ffffff;
  border: 1px solid;
  border-color: #e0e0e0;
  margin-left: 30px;
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

.ni {
  width: 370px;
  height: 90px;
  margin-top: 90px;
  margin-right: 20px;
  position: relative;
}

.container {
  display: flex;
  margin-left: 131px;
  width: 250px; /* Contoh ukuran lebar */
  height: 200px; /* Contoh ukuran tinggi */
  
}


.buttonaji {
  display: flex; /* Use flexbox */
  justify-content: left; /* Center children horizontally */
  align-items: left; /* Center children vertically */
  margin-left: -10px;
}

.tengah {
  display: flex; /* Use flexbox */
  justify-content: left; /* Center children horizontally */
  align-items: left; /* Center children vertically */
}

.image {
  width: 325px;
  height: 181px;
  object-fit: cover;
  border-radius: 10px; /* Adjust the value to change the roundness */
  z-index: 2;
}

.btn-small {
  padding: 6px 12px; /* Reduced padding for a more compact button */
  font-size: 12px; /* Decreased font size */
  border-radius: 6.29px; /* Updated border-radius */
  background: transparent;
  border: 0.79px solid #49454f1f;
  color: #1d1b20;
  width: 75.15px; /* Width based on Hug dimension */
  height: 25.15px; /* Height based on Fixed dimension */
  font-family: Raleway; /* Corrected the font-family property */
  display: flex;
  justify-content: center; /* Center the content horizontally */
  align-items: center; /* Center the content vertically */
  margin-right: 0px;
  margin-left: 10px; /* Adjusted margin for spacing */
  cursor: pointer;
}

.btn-small:hover {
  background-color: #49454f1f; /* Darker shade when hovered */
}

.judul-sedang {
  width: 308px;
  height: 24px;
  font-family: Raleway;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
}

.judul-besar {
  width: 308px;
  height: 66px;
  font-family: Raleway;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: #5e5e5e;
}

.tambah {
  width: auto;
  height: auto;
  padding: 4px 14px;
  border-radius: 6.29px;
  gap: 4px;
  background: #fae084;
  margin-left: 220px;
  display: flex;
  align-items: center;
  border: none;
  font-weight: 700;
  font-family: Raleway;
  cursor: pointer;
}

/* .tambah :hover {
} */

.photo {
  text-align: center;
  margin-left: 6px;
}

.btn-small,
.btn-kall,
.tambah {
  width: auto;
}

.dropdown-toggle {
  width: 150px;
  height: 40px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid;
  position: absolute;
  top: 228px;
  left: 132px;
  display: flex;
  align-items: center;
  text-align: center;
  background-color: #fff;
  font-size: 14px;
  font-weight: 700;
  font-family: Raleway;
  color: #333333;
  cursor: pointer;
}

.dropdown-toggle span {
  margin-right: 8px;
  z-index: 1;
}

.dropdown-toggle img {
  margin-left: auto; /* Jarak antara teks dan gambar */
  z-index: 1;
}

.dropdown-menu {
  position: absolute;
  width: 150px;
  top: 274px;
  left: 132px;
  border: 1px solid;
  border-radius: 8px;
  background-color: #ffffff;
  font-family: Lexend;
  font-weight: 700;
  font-size: 14px;
  line-height: 17.5px;
  cursor: pointer;
  z-index: 1;
}

.checkbox-container {
  display: flex;
  align-items: center;
  width: 100%;
  height: 24px;
  padding: 8px;
  gap: 8px; /* Jarak antara checkbox dan teks */
  font-family: Lexend;
  font-size: 14px;
  cursor: pointer;
  z-index: 1;
}

.checkbox-container label {
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 1;
}

.checkbox-icon {
  width: 24px;
  height: 24px;
  fill: none;
  stroke: black; /* Warna default ikon centang */
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: stroke 0.3s ease; /* Efek transisi untuk perubahan warna */
}

.container input:checked ~ .checkmark {
  background-image: linear-gradient(gold, gold);
  z-index: 1;
}

.dropdown-toggle2 {
  width: 150px;
  height: 40px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid;
  position: absolute;
  top: 228px;
  left: 132px;
  display: flex;
  align-items: center;
  text-align: center;
  background-color: #fff;
  font-size: 14px;
  font-weight: 700;
  font-family: Raleway;
  color: #333333;
  margin-left: 170px;
  cursor: pointer;
  z-index: 1;
}

.dropdown-menu2 {
  position: absolute;
  width: 150px;
  top: 274px;
  left: 132px;
  border: 1px solid;
  border-radius: 8px;
  background-color: #ffffff;
  margin-left: 170px;
  cursor: pointer;
  z-index: 1;
}

.dropdown-toggle2 span {
  margin-right: 8px;
  z-index: 1;
}

.dropdown-toggle2 img {
  margin-left: auto; /* Jarak antara teks dan gambar */
  z-index: 1;
}

.footer {
 width: 100%;
 height: auto;
 margin-top: 278px;
 position: relative;
  margin-bottom: 100px;
 
} 
a {
 text-decoration: none;
 color: #212121;
}
ul {
 list-style-type: none;
}
.footer-col {
display: grid;
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
gap: 20px;
}

.footer-col h3 {
 font-size: 30px;
 font-weight: 40px;
 display: inline-block;
 margin-bottom: 11px;
 margin-top: 76px;
}
.footer-col-1 {
 
 margin-left: 88px;
 width: 20vw;
 
}



.logo {
font-size: 20px;
font-weight: 400;
display: flex;
flex-direction: row;
margin-left: 88px;


}

.logo img {
width: 70px;
margin-right: 9px;

}

.footer-col-2 {
margin-left: 60px;
}

.footer-col-3 {
margin-left: 60px;
}

.footer-col-4 {
margin-left: 139px;
width: 434px;
}

.footer-col li {
color: #212121;
}

.footer-col li:not(:last-child) {
margin-bottom: 11px;
}

.adress {
width: 184px;
height: 84px;
font-size: 20px;
font-weight: 400;
margin-top: 62px;
margin-left: 88px;
}

.lower {

height: 142px;
margin-left: 88px;
display: flex;
}

.inlower {
padding-top: 118px;
position: absolute;
}

.collab {
display: flex;
flex-direction: row;
gap: 46px;

}

.susun {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 46px;
padding-left: 795px;
}
</style>