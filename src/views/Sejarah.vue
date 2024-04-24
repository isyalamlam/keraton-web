<template>
  <div id="app">
    <div class="halatas">
      <div class="container-gambar">
        <div class="atas">
          <h6>Warisan Leluhur Cirebon</h6>
          <h4>Mengenal Lebih Dekat dengan Sejarah Keraton</h4>
        </div>
      </div>

      <div class="container-macan"></div>
      <div class="body">
        <p>
          Kota Cirebon merupakan kota yang memiliki nilai historis yang sangat
          kental terutama pada masa kerajaan dan penyebaran agama Islam di Pulau
          Jawa.<br /><br />

          Salah satu peninggalan pada masa kerajaan tersebut adalah sebuah
          bangunan yang hingga kini masih berdiri dengan kokoh di kota ini yaitu
          Rumah Adat Kasepuhan Cirebon.
        </p>
      </div>

      <!-- kanan -->
      <div class="container-p1"></div>
      <img class="timeline" src="../assets/images/timeline4.png" alt="" />
      <div class="info">
        <p class="Pada">Pada abad XV (-+1430)</p>
        <div class="sejajar">
          <p class="Par">
            Pangeran Cakrabuwana Putra mahkota Kerajaan Pajajaran membangun
            Keraton yang kemudian diserahkan kepada putrinya, Ratu Ayu
            Pakungwati. Maka Keratonnya dinamai Keraton Pakungwati (hingga
            sekarang dikenal dengan sebutan Dalem Agung Pakungwati)
          </p>
        </div>
      </div>

      <!-- kiri -->
      <div class="container-p2"></div>
      <img class="timeline2" src="../assets/images/timeline5.png" alt="" />
      <div class="info1">
        <p class="P2">Pada abad XVI</p>
        <div class="sejajar">
          <p class="Par2">
            Sunan Gunung Jati wafat. Kemudian<br />
            Pangeran Emas Mochammad Arifin,<br />
            cicit dari Sunan Gunung Jati, bertahta<br />
            menggantikannya. Kemudian pada<br />
            tahun Candra Sangkala Tunggal Tata<br />
            Gunaning Wong atau 1451 Saka yaitu<br />
            tahun 1529 Masehi beliau mendirikan<br />
            Keraton baru sebelah barat daya Dalem<br />
            Agung Pakungwati. Dan beliaupun<br />
            bergelar Panembahan Pakungwati I.
          </p>
        </div>
      </div>

      <!-- kanan -->
      <div class="container-p3"></div>
      <img
        class="timeline"
        src="../assets/images/timeline6.png
      "
        alt=""
      />
      <div class="info">
        <p class="P3">Pada -+ 1549 M</p>
        <div class="sejajar">
          <p class="Par3">
            Masjid Agung Sang Cipta Rasa <br />kebakaran. Ratu Ayu Pakungwati
            yang<br />
            sudah tua itu turut memadamkan api. <br />Api dapat dipadamkan,
            namun Ratu<br />
            Ayu Pakungwati kemudian wafat. <br />
            Semenjak itu, nama atau sebutan<br />
            Pakungwati dimuliakan dan diabadikan<br />
            oleh nasab Sunan Gunung Jati.
          </p>
        </div>
      </div>

      <!-- kiri -->
      <div class="container-p4"></div>
      <img class="timeline4" src="../assets/images/timeline7.png" alt="" />
      <div class="info3">
        <p class="P4">Pada -+ 1679 M</p>
        <div class="sejajar">
          <p class="Par4">
            Didirikan Keraton Kanoman oleh Sultan Anom I (Sultan Badridin). Maka
            <br />
            semenjak itu, Keraton Pakungwati <br />
            disebut Keraton Kasepuhan hingga <br />sekarang dan sultannya
            bergelar <br />
            Sultan Sepuh. Kasepuhan artinya <br />
            tempat sepuh atau tua. Jadi, antara <br />Kasepuhan dan Kanoman itu
            awalnya <br />
            yang tua dan yang muda (kakak <br />
            beradik). Lokasi bangunan Keraton <br />
            Kasepuhan membujur dari utara ke <br />
            Selatan atau menghadap ke utara,<br />
            karena keraton-keraton di Jawa semuanya menghadap ke utara, artinya
            menghadap magnet dunia,<br />
            artinya falsafahnya sang raja<br />
            mengharapkan kekuatan.
          </p>
        </div>
      </div>

      <!-- bawah -->
      <div class="halbawah">
        <div class="bawah"></div>
        <div class="sejajarB">
          <h5>
            Subscribes your email for<br />
            updates!
          </h5>
        </div>

        <div>
          <form @submit.prevent="submitForm" class="submit">
            <button class="button">Enter your email</button>
          </form>
        </div>
      </div>

      <div class="footer">
        <main>
          <section class="quick-links">
            <h4 class="quick-links-h4">Quick Links</h4>

            <h6 class="beranda"><a href="#">Beranda</a></h6>
            <h6 class="sejarah"><a href="#">Sejarah</a></h6>
            <h6 class="booking"><a href="#">Booking</a></h6>
            <h6 class="objek-wisata"><a href="#">Objek Wisata</a></h6>
          </section>

          <section class="socials">
            <h4 class="socials-h4">Socials</h4>

            <h6 class="whatsapp"><a href="#"> Whatsapp</a></h6>
            <h6 class="facebook"><a href="#"> Facebook</a></h6>
            <h6 class="instagram"><a href="#"> Instagram</a></h6>
            <h6 class="threads"><a href="#"> Threads</a></h6>
          </section>

          <section class="company">
            <h4 class="company-h4">Company</h4>
            <h6 class="about-us"><a href="#">About us</a></h6>
            <h6 class="partners"><a href="#">Partners</a></h6>
            <h6 class="contact"><a href="#">Contact</a></h6>
          </section>

          <div class="tulisan">
            Jalan Kasepuhan 43 Cirebon, Jawa Barat 45114
          </div>
          <div class="susun">
            <p>In collaboration</p>
          </div>
          <div class="collab">
            <img src="../assets/images/collab.png" alt="" class="collab" />
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    submitForm() {
      this.$router.push("/signin");
    },
  },
};
</script>

<style scoped>
@import "../assets/css/Sejarah.css";
</style>
