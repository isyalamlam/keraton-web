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
          <li class="short"><a href="./components/Beranda.vue">Beranda</a></li>
          <li><a href="#">Sejarah<div class="dropdown">
            <DropDown :selectedOption="selectedHistory" :options="historyOptions" @update:selectedOption="selectedHistory = $event" />
          </div></a></li>
          <li><a href="#">Booking<div class="dropdown">
            <DropDown :selectedOption="selectedBooking" :options="bookingOptions" @update:selectedOption="selectedBooking = $event" />
          </div></a></li>
          <li><a href="#">Objek Wisata<div class="dropdown">
            <DropDown :selectedOption="selectedAttraction" :options="attractionOptions" @update:selectedOption="selectedAttraction = $event" />
          </div></a></li>
          <button @click="getTickets" style="border-radius: 5px;border: none; background-color: #123B32; color: white;width:162px;height: 34px; font-family: 'Raleway'; font-weight: 700;">Dapatkan Tiket</button>
        </ul>
      </nav>
    </div>
    <li v-if="parentSelectedOption">{{ parentSelectedOption.name }}</li>
  </div>
  <beranda>
    <div class="dalam-gambar">
    <!-- Centered Text -->
    <div class="overlay-text">DALEM AGUNG PAKUNGWATI</div>
    
    <!-- Bottom Text Container -->
    <div class="bottom-text-container">
      <div class="bottom-text">Salah satu destinasi wisata yang wajib dikunjungi jika Anda berkunjung ke Cirebon.</div>
      <div class="bottom-text">Dibangun pada tahun 1430 oleh Pangeran Cakrabuana, pendiri Kerajaan Cirebon.</div>
      <div class="bottom-text">Memiliki koleksi benda bersejarah, seperti kereta kencana, gamelan, dan lukisan.</div>
    </div>

    <!-- Example image -->
    <img src="../assets/images/agung.png" alt="Descriptive Text" class="gambar">
  </div>
  <img src="../assets/images/arah1.png" alt="Descriptive Text" class="arah" @click="scrollToContent">
   <div class="teks-luar">
  <span class="tebal">Mengapresiasi</span> nilai seni <span>Cirebon</span>
</div>
<div class="teks-tambahan">
  <span class="text">Dalem Agung Pakungwati merupakan kompleks bangunan utama di Keraton <br><span>Kasepuhan, Cirebon, Jawa Barat.</span></span>
</div>

<div class="slider">
  <div v-for="(card, index) in cards" :key="index" :id="'card-' + index" :class="{ cardd: true, active: index === currentIndex }">{{ card.content }}</div>
  <div class="button-container">
    <button class="button-slider" @click="prevCard">&lt;</button>
    <div class="bulet" v-for="(bullet, index) in bullets" :key="index" :class="{ active: index === currentIndex }"></div>
    <button class="button-slider" @click="nextCard">&gt;</button>
  </div>
</div>

<!-- Teks baru di bawah swiper buttons -->
<div class="custom-text-container">
  <div class="text-left">Fasilitas</div>
  <div class="text-right">Fasilitas di Museum Pusaka cukup lengkap untuk<br>menunjang kegiatan wisata dan budaya.</div>

</div>
<div class="image2-container2">
  <div class="left-images">
    <div class="image-container">
      <img src="../assets/images/rec1.png" alt="Deskripsi Gambar 1" class="image">
      <div class="image-text">Panggung<br>Sanggabuwana</div>
    </div>
    <div class="image-container">
      <img src="../assets/images/rec3.png" alt="Deskripsi Gambar 3" class="image">
      <div class="image-text">Masjid Agung<br>Kasepuhan</div>
    </div>
  </div>
  <div class="right-images">
    <div class="image-container">
      <img src="../assets/images/rec2.png" alt="Deskripsi Gambar 2" class="image">
      <div class="image-text">Pendopo Agung<br>Pakungwati</div>
    </div>
    <div class="image-container">
      <img src="../assets/images/rec4.png" alt="Deskripsi Gambar 4" class="image">
      <div class="image-text">Museum Pusaka<br>Keraton Kasepuhan</div>
    </div>
  </div>
</div>

<!-- Teks baru di bawah image-container -->
<div class="new-text-container">
  <div class="new-text-left">KUNJUNGAN</div>
  <div class="new-text-right">
    <div>Kunjungi Keraton Kasepuhan Cirebon dengan berbagai</div>
    <div>pilihan paket wisata yang menarik.</div>
    <!-- Menggunakan <a> sebagai button -->
    <a href="#" class="get-tickets-button">Dapatkan tiket sekarang</a>
  </div>
</div>

<div class="info-container">
  <div class="info-text">
    <div class="text-bold">Tiker Masuk Dalem Agung Pakungwati</div>
    <div class="text-price">Rp. 10.000/orang</div>
    <div class="text-small">Area Dalem Agung Pakungwati</div>
  </div>
  <div class="info-image">
    <img src="../assets/images/sat1.png" alt="Paket Wisata">
  </div>
</div>
<div class="line"></div>

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
  </beranda>
  

</template>
<script>
import DropDown from '../components/DropDown.vue' // Pastikan path ini benar

export default {
components: {
  DropDown,
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
    bookingOptions: [
      { name: 'Paket Keraton', value: 1 },
      { name: 'Tiket Event', value: 2 },
    ],
    attractionOptions: [
      { name: 'Keraton Kesepuhan', value: 1 },
      { name: 'Museum Pusaka', value: 2 },
      { name: 'Dalem Agung Pakungwati', value: 3 },
      { name: 'Lotus', value: 4 },
    ],
    cards: [
      { id: 'card-0', content: '' },
      { id: 'card-1', content: '' },
      { id: 'card-2', content: '' },
      { id: 'card-3', content: '' },
      { id: 'card-4', content: '' },
    ],
    currentIndex: 3,
  };
},

computed: {
  bullets() {
    return Array(this.cards.length).fill('');
  },
},
methods: {
  prevCard() {
    this.currentIndex = this.currentIndex === 0 ? this.cards.length - 1 : this.currentIndex - 1;
  },
  nextCard() {
    this.currentIndex = this.currentIndex === this.cards.length - 1 ? 0 : this.currentIndex + 1;
  },
  getTickets() {
    console.log('Dapatkan Tiket', this.selectedBooking); // atau sesuai dengan logika yang Anda butuhkan
  },
  scrollToContent() {
      document.querySelector('.slider').scrollIntoView({ 
        behavior: 'smooth' 
      });
    },
},
};
</script>


<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 0px 10px 0px;
  position: relative;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: 'Raleway', sans-serif;
  width: 100%;
  height: 104px;
}
.navbar-right {
  
  margin-left: 21.5em;
  width: 100%;
  
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

nav ul li {
  margin-right: 1px;
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
li :first-child {
  padding-right: 0.4vw;
}
.short {
  margin-right: 27px;
}
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown button {
  padding: 5px 10px;
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  cursor: pointer;
}

.dropdown menu {
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

  

.dropdown menu li:hover {
  background-color: #f2f2f2;
}

.ticket-button {
  border-radius: 5px; 
  background-color: #123B32; 
  color: #FFFFFF;
}

.dalam-gambar {
  position: relative;
  margin-bottom: 140px; /* Adjust the value as needed */
}

.gambar {
  width: 110%;
  height: 100%;
  object-fit: cover; /* Ensures image covers the area */
  width: 100%;
  
}

.arah {
  width: 2%; /* Reduces the size to make the image very small */
  height: auto; /* Maintains the aspect ratio of the image */
  object-fit: cover; /* Ensures image covers the specified area without distorting */
  position: absolute; /* Allows precise positioning within its relative container */
  top: 50%; /* Centers the image vertically */
  left: 50%; /* Centers the image horizontally */
  transform: translate(-50%, -50%); /* Adjusts the position to truly center the image */
  margin-top: 610px;
  filter: invert(100%) contrast(200%) brightness(150%); /* Inverts the colors and adjusts contrast and brightness */
  
}




.overlay-text, .bottom-text-container {
  position: absolute;
  width: 100%;
  color: #FFFFFF; /* Adjust text color as necessary */
  text-align: left;

}

.overlay-text {
  top: 50%;
  transform: translateY(-50%);
  font-size: 56px; /* Adjust font size as necessary */
  text-align: center;
  font-weight: 400;
}

.bottom-text-container {
  bottom: 100px; /* Adjust distance from bottom as necessary */
  display: flex;
  justify-content: center;
  gap: 70px; /* Adjust gap between texts as necessary */
  
}

.bottom-text {
  font-size: 20px; /* Adjust font size as necessary */
  background-color: transparent; /* Optional: Adds semi-transparent background for readability */
  padding: 30px 20px; /* Adjust padding as necessary */
  
}

.teks-luar {
  position: relative; 
  text-align: center; /* Membuat teks berada di tengah */
  font-size: 50px; /* Ukuran font */
  width: 1104px;
height: 64px;
top: 50px;
left: 88px;

}

.teks-luar span {
  font-weight: normal; /* Gaya font normal */
}

.teks-luar span.tebal {
  font-weight: bold; /* Membuat teks menjadi tebal */
  font-size: 24px; /* Ukuran font yang lebih besar */
  font-size: 50px; /* Ukuran font */
  margin-left: 50px;
}
.teks-tambahan {
  text-align: center; /* Centers the text horizontally */
  max-width: 650px; /* Adjust based on your design needs */
  margin: 20px auto; /* Adds space around and auto-centers the block */
  line-height: 1.5; /* Adjusts the line height for better readability */
  display: flex; /* Enables flexbox properties */
  flex-direction: column; /* Stacks flex items vertically */
  justify-content: center; /* Centers the content vertically */
  height: 130px; /* Adjust height to ensure two lines of text fit */
  color: #808080; /* Sets the font color to a medium gray */
  font-size: 19px;
}

.slider{
  display: flex;
  justify-content: center;
  align-items: center;
}

.cardd{
  width: 255.72px;
  position: relative;
  height: 414px;
  backdrop-filter: blur(20px);
  background-color: #ccc;
  margin: 0 10px;
  margin-top: 50px;
  border: none;   
  justify-content: center;
  padding-top: 90px;
  text-align: center;
  align-items: center;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 30px;
  transition: all 0.3s ease-in-out;
  background-size: cover;
}

#card-0{
background: url(../assets/images/img1.png);
background-size:cover;

}

#card-1{
background: url(../assets/images/img2.png);
background-size:cover;
}#card-2{
background: url(../assets/images/img3.png);
background-size:cover;

}#card-3{
background: url(../assets/images/img4.png);
background-size:cover;

}#card-4{
background: url(../assets/images/img5.png);
background-size:cover;

}

.cardd.active{
  transform: translate(0px ,-20px);
  z-index: 9999;
  box-shadow: 0 0 10px #212121;
}

.button-container{
  position: absolute;
  left: 0;
  margin-top: 54%;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.button-slider{
  width: 22px;
  height: 25px;
  background:transparent;
  color: #212121;
  font-weight: bold;
  border: 3px solid #212121;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.5s ease;
}
.bulet{
  width: 6px;
  height: 2px;
  border-radius: 20%;
  background-color: #ccc;
}
.bulet.active{
  background-color: rgb(0, 0, 0);
}
.button-slider.active{
  background-color: rgb(0, 0, 0);
  color: blue;
}

.custom-text-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start; /* Atur posisi teks kiri dan kanan */
  margin-top: 200px; /* Jarak dari swiper button */
  font-size: 16px; /* Ukuran font default */
  color: #000000; /* Warna teks default */
}

.text-left {
font-family: Raleway;
line-height: 72px;
letter-spacing: 0em;
  font-size: 64px; /* Meningkatkan ukuran font */
  font-weight: 400; /* Teks lebih tebal */
  color: #000000; /* Warna teks hitam */
  width: 542px;
  height: 72px;
  margin-left: 100px; /* Menambahkan margin kiri untuk menggeser teks ke kanan */
  margin-top: 50px;


}


.text-right {
font-family: Raleway;
font-weight: 400;
line-height: 28px;
letter-spacing: 0em;
  font-size: 20px; /* Ukuran font lebih kecil */
  text-align: right; /* Teks rata kanan */
  color: #5E5E5E; /* Warna teks hitam */
  margin-top: 50px; /* Jarak teks kanan ke atas untuk posisi 'di bawah' */
  margin-right: 100px;
}

.image2-container2 {
  display: flex;
  justify-content: space-between; /* Menyebar div secara merata di sepanjang sumbu horizontal */
  margin-top: 40px;
}

.left-images, .right-images {
  display: flex;
  flex-direction: column; /* Menumpuk gambar secara vertikal */
}

.left-images img, .right-images img {
  width: 100%; /* Mengatur lebar gambar untuk menyesuaikan dengan container parent */
  margin-bottom: 20px; /* Jarak antar gambar vertikal */
  border-radius: 50px; /* Menerapkan border radius */
}

/* Jika ingin menyesuaikan margin khusus atau menghapus margin bottom dari gambar terakhir */
.left-images img:last-child, .right-images img:last-child {
  margin-bottom: 0; /* Menghapus margin bawah dari gambar terakhir */
}

.image2-container2 {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
}

.left-images, .right-images {
  display: flex;
  flex-direction: column;
  gap: 20px; /* Mengatur jarak antar gambar */
}

.image-container {
  position: relative;
  border-radius: 40px; /* Menerapkan border radius pada container */
  overflow: hidden; /* Memastikan konten ekstra tidak terlihat */
}

.image-container img {
  width: 100%;
  display: block; /* Menghilangkan ruang ekstra di bawah gambar */
}

.image-text {
  position: absolute;
  bottom: 10%; /* Menempatkan teks agak ke bawah */
  left: 50%;
  transform: translateX(-50%);
  color: #FFFFFF;
  font-size: 40px; /* Meningkatkan ukuran font */
  width: 80%; /* Mengontrol lebar teks agar bisa membagi menjadi dua baris jika perlu */
  line-height: 1.4; /* Mengontrol jarak antar baris */
font-family: Raleway;
font-weight: 700;
line-height: 48px;
letter-spacing: 0em;
text-align: center;

}


/* Menyesuaikan margin antara gambar kiri dan kanan */
.left-images, .right-images {
  width: 48%; /* Menyesuaikan lebar untuk mendekatkan gambar */
}

.left-images img:last-child, .right-images img:last-child {
  margin-bottom: 0;
}

.new-text-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 60px; /* Jarak dari elemen sebelumnya */
}

.new-text-left {
  font-size: 64px; /* Ukuran font besar */
  color: #000000; /* Warna tebal */
  font-weight: bold; /* Teks lebih tebal */
font-family: Raleway;
font-weight: 400;
line-height: 72px;
letter-spacing: 0em;
text-align: left;
margin-left: 50px;
margin-top: 20%;
}

.new-text-right > div {
  font-size: 20px; /* Ukuran font */
  color: #5E5E5E; /* Warna teks */
  margin-bottom: 5px; /* Jarak antar baris */
  text-align: right;
font-family: Raleway;
font-weight: 400;
line-height: 28px;
letter-spacing: 0em;
text-align: right;
}

.new-text-right {
  text-align: right; /* Menyelaraskan teks dan elemen di sebelah kanan */
  margin-top: 20%;
  margin-right: 45px;
}

.get-tickets-button {
  display: inline-block; /* Membuat link berperilaku seperti block namun inline */
  background-color: #123B32; /* Warna background */
  color: #FFFFFF; /* Warna teks */
  text-decoration: none; /* Menghapus garis bawah */
  padding: 10px 20px; /* Padding di sekitar teks */
  border-radius: 5px; /* Menerapkan border radius */
  font-weight: bold; /* Membuat teks lebih tebal */
}

.info-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 70px; /* Jarak dari elemen sebelumnya */
}

.info-text {
  max-width: 60%; /* Mengatur maksimum lebar teks */
  margin-right: 20px; /* Menggeser seluruh teks ke kanan sedikit */
}

.text-bold {
  font-size: 24px; /* Ukuran font */
  color: #000000; /* Warna teks */
  font-weight: bold; /* Teks lebih tebal */
  margin-bottom: 5px; /* Jarak antar baris */
  margin-left: 60px; /* Menambahkan margin kiri untuk teks */
}

.text-price {
  font-size: 20px; /* Ukuran font */
  color: #123B32; /* Warna teks */
  margin-bottom: 15px; /* Mengurangi jarak antar baris untuk mendekatkan teks ketiga */
  margin-left: 60px; /* Menambahkan margin kiri untuk teks */
}

.text-small {
  font-size: 16px; /* Ukuran font */
  color: #5E5E5E; /* Warna teks */
  margin-top: 20px; /* Meningkatkan jarak dari baris kedua */
  margin-bottom: 30px; /* Jarak antar baris */
  margin-left: 60px; /* Menambahkan margin kiri untuk teks */
}

.info-image img {
  width: 434px; /* Lebar gambar */
  height: 197px; /* Tinggi gambar menjadi otomatis */
  margin-left: -482px; /* Menggeser gambar ke kiri */
  margin-bottom: 1px; /* Mengurangi margin bawah untuk mendekatkan ke garis */
}

.line {
  width: 92%; /* Mengatur lebar garis */
  border-top: 1px solid #ccc; /* Membuat garis tipis */
  margin: 10px auto; /* Mengurangi margin top untuk mendekatkan garis ke konten di atasnya */
}

.footer {
 width: 100%;
 height: auto;
 margin-top: 278px;
 position: relative;
 margin-bottom: 10px;

 .button {
  display: inline-block; /* Membuat link berperilaku seperti block namun inline */
  background-color: #123B32; /* Warna background */
  color: #FFFFFF; /* Warna teks */
  text-decoration: none; /* Menghapus garis bawah */
  padding: 10px 20px; /* Padding di sekitar teks */
  border-radius: 5px; /* Menerapkan border radius */
  font-weight: bold; /* Membuat teks lebih tebal */
}

} 
a {
 text-decoration: none;
 color: #212121;
}
ul {
 list-style-type: none;
}
.footer-col {
 display: flex;
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
 width:184px;
 height: 84px;
 font-size: 20px;
 font-weight: 400;
 margin-top:62px;
 margin-left: 88px;
}
.lower {
  
  height: 142px;
  margin-left: 88px;
  display: flex;
}
.inlower {
 padding-top:118px;
 position: absolute;
 
 
}
.collab {
 display: flex;
 flex-direction: row;
 gap:46px;
 
}
.susun {
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 gap:46px;
 padding-left: 645px;
}



</style>