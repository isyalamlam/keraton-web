<script setup>
import { ref, computed } from 'vue'
import navbar from '../components/NavBar.vue'
import Payment from '../components/pembayaran.vue'
const count = ref(1)
const layanan = 2500
const jasaApp = 1000
const harga = ref(10000)

const tanggalSekarang = new Date().toISOString().substr(0, 10);

const hargaTiket = harga.value.toLocaleString('id-ID', {
  maximumFractionDigits: 2,
  minimumFractionDigits: 2
});

const hargaStringTiket = ref(hargaTiket);

const hargaString = computed(() => (harga.value).toLocaleString('id-ID'));
const layananString = layanan.toLocaleString('id-ID');
const jasaAppString = jasaApp.toLocaleString('id-ID');

const totalPemesanan = computed(() => (harga.value + layanan + jasaApp).toLocaleString('id-ID'));

const tambah = () => {
  count.value++;
  harga.value = 10000 * count.value;
}

const kurang = () => {
  if (count.value > 1) {
    count.value--;
    harga.value = 10000 * count.value;
  }
}
</script>

<style lang="css"></style>

<template>
  <nav class="navbar">
    <navbar border />
  </nav>
  <div>
    <div class="title">
      <div class="txt-tiket">
        <h4>Pesan Tiket Langsung</h4>
      </div>
      <div class="txt">
        <img src="../assets/svg/Frame.svg" class="image-koin">
        <div>
          <h6 class="pstikan">pastikan pesanan anda BENAR sebelum checkout ya!</h6>
        </div>
      </div>
    </div>
    <div class="nav2">
      <div class="content-1">
        <div class="txt2">
          <img src="../assets/svg/account.svg" class="img-user">
          <p class="det-pemesan">Detail Pemesan</p>
        </div>
        <div class="det-profil">
          <h6 class="nm-user">John Doe</h6>
          <h6 class="email-user">- (johndoe01@keraton.com)</h6>
        </div>
      </div>
      <div class="content-2">
        <div class="txt3">
          <img src="../assets/svg/Framecard.svg">
          <p class="pil-kategori">Pilih Kategori</p>
        </div>
        <div class="btn-pilih">
          <div class="umum">
            <label class="custom-radio-btn">
              <input type="radio" name="pilih-kategori" id="umum">
              <span class="checkmark"></span>
            </label>
            <label for="umum">Umum</label>
          </div>
          <div class="pelajar">
            <label class="custom-radio-btn">
              <input type="radio" name="pilih-kategori" id="pelajar">
              <span class="checkmark"></span>
            </label>
            <label for="pelajar">Pelajar</label>
          </div>
          <div class="mancanegara">
            <label class="custom-radio-btn">
              <input type="radio" name="pilih-kategori" id="mancanegara">
              <span class="checkmark"></span>
            </label>
            <label for="mancanegara">Mancanegara</label>
          </div>
        </div>
        <div class="content-3">
          <div class="txt4">
            <img src="../assets/svg/det-tiket.svg" class="img-det-tiket">
            <p class="det-tiket">Detail Tiket</p>
          </div>
          <div class="date">
            <form>
              <fieldset>
                <legend class="tgl-pemesan">Tanggal Pemesanan</legend>
                <input type="date" class="date-tgl">
              </fieldset>
            </form>
            <div class="mm-dd-yyy">
              <small>MM/DD/YYY</small>
            </div>
          </div>
          <div>
            <div class="content-4">
              <div>
                <h6 class="tiket-masuk">Tiket masuk Keraton Kesepuhan Cirebon</h6>
              </div>
              <div>
                <h6 class="hrg">Rp. {{ hargaStringTiket }}</h6>
              </div>
            </div>
            <div class="tmbh-brg">
              <div class="input-tiket1">
                <button @click="kurang" class="kurang"><img src="../assets/svg/iconKurang.svg"></button>
                <p class="input-tiket2">{{ count }}</p>
                <button @click="tambah" class="tambah"><img src="../assets/svg/iconTambah.svg"></button>
              </div>
            </div>
          </div>
          <div class="content-5">
            <payment />
          </div>
        </div>
      </div>
    </div>

  </div>
  <div id="ringkasanBooking">
    <h5>Ringkasan Booking</h5>
    <div class="totalPemesanan">
      <h6 class="ringkasan">Total Pemesanan</h6>
      <div class="totalHarga">
        <p>Total Harga ({{ count }} Tiket)</p>
        <p class="harga">Rp.{{ hargaString }}</p>
      </div>
    </div>
    <div class="biaya">
      <div class="biayaTransaksi">
        <h6 class="ringkasan">Biaya Transaksi</h6>
        <div class="totalHarga">
          <p>Biaya Layanan</p>
          <p class="harga">Rp.{{ layananString }}</p>
        </div>
        <div class="totalHarga">
          <p>Biaya Jasa Aplikasi</p>
          <p class="harga">Rp.{{ jasaAppString }}</p>
        </div>
      </div>
    </div>
    <hr>
    <div class="totalTagihan">
      <h5 class="txt-total-tagihan">Total Tagihan</h5>
      <h6 class="ringkasan">Rp.{{ totalPemesanan }}</h6>
    </div>
    <div class="containerbtn">
      <button class="btn">
        <div class="btn-checkout">
          <div class="txt-checkout">
            <p>Checkout</p>
          </div>
          <p><img src="../assets/svg/arrow-btn-checkout.svg" alt=""></p>
        </div>
      </button>
    </div>
  </div>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');

.custom-radio-btn {
  width: 20px;
  height: 20px;
  border: 2px solid goldenrod;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.custom-radio-btn .checkmark {
  width: calc(100% - 6px);
  height: calc(100% - 6px);
  background-color: goldenrod;
  border-radius: 50%;
  display: inline-block;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.custom-radio-btn input {
  display: none;
}

.custom-radio-btn input:checked+.checkmark {
  display: inline-block;
  opacity: 1;
}

.date {
  justify-content: center;
}

.pstikan {
  font-family: 'Raleway';
  color: black;
  width: 495px;
  height: 28px;
  top: 203px;
  left: 144px;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
}

input[type="date"]::-webkit-calendar-picker-indicator {
  background-image: url(../assets/svg/icon.svg);
  background-repeat: no-repeat;
  width: 20px;
  height: 20px;
  margin-right: 12px;

}

.plh-pembayaran {
  margin-top: 5px;
  margin-left: 6px;
  color: #5E5E5E;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}

.met-pembayaran {
  display: flex;
}

.content-5 {
  margin-top: 37px;
}

.input-tiket1 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100px;
}

.tmbh-brg {
  margin-top: 20px;
}


.tambah,
.kurang {
  width: 24px;
  height: 24px;
  border-radius: 8px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0;
}

.tmbh-brg {
  margin-top: 20px;
}

.tambah {
  border: solid 1.5px #B0BEC5;
  color: #B0BEC5;
  background-color: #FFFFFF;
  margin-left: 3%px;
}

.kurang {
  border: solid 1.5px #B0BEC5;
  color: #B0BEC5;
  background-color: #FFFFFF;
}

.tambah:hover,
.kurang:hover {
  border: none;
  color: #FFFFFF;
  background-color: #000000;
}

.tambah:hover img,
.kurang:hover img {
  filter: brightness(0) invert(1);
}


.input-tiket2 {
  margin-left: 3%;
  color: #000000;
  font-family: 'Manrope';
  font-weight: 600;
  font-size: 16px;
  line-height: 21.86px;
}

.hrg {
  margin-top: 4px;
  color: #000000;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
}

.content-4 {
  margin-top: 28px;
}

.tiket-masuk {
  color: #000000;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
}

.mm-dd-yyy {
  color: #49454F;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  margin-left: 16px;
}

.tgl-pemesan {
  font-family: 'Roboto';
  margin-bottom: -14px;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #DAA520;
}

fieldset {
  width: 312px;
  height: 56px;
  border: solid 3px;
  border-radius: 4px;
  gap: 10px;
  border-color: #DAA520;
}

.date-tgl {
  margin-left: 16px;
  margin-top: 5px;
  border: none;
  font-family: 'Roboto';
  background: transparent;
  font-size: 16px;
  width: 290px;
  height: 48px;
  line-height: 24px;
}

.date-tgl:focus {
  outline: transparent;
}

.content-3 {
  margin-top: 37px;
}

.txt4 {
  display: flex;
}

.det-tiket {
  margin-top: 4px;
  margin-bottom: 4px;
  margin-left: 6px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #5e5e5e;
}

.btn-pilih {
  margin-top: 6px;
  display: flex;
}

.umum,
.pelajar,
.mancanegara {
  display: flex;
  align-items: center;
}

.umum {
  margin-left: 20px;
  width: 122px;
  height: 48px;
  top: 133px;
  padding: 12px, 20px, 12px, 20px;
}

.pelajar {
  margin-left: 27px;
  width: 125px;
  height: 48px;
  top: 133px;
  left: 149px;
  padding: 12px, 20px, 12px, 20px;
}

.mancanegara {
  margin-left: 27px;
  width: 175px;
  height: 48px;
  top: 133px;
  left: 301px;
  padding: 12px, 20px, 12px, 20px;
}

input[type='radio'] {
  width: 18px;
  height: 18px;
  accent-color: yellow;

}

label {
  color: black;
  margin-left: 10px;
}

.nav2 {
  align-items: center;
  position: absolute;
  width: 522px;
  height: 600px;
  top: 295px;
  left: 88px;
  gap: 37px;
}

.pil-kategori {
  color: #5e5e5e;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-top: 5px;
  margin-left: 6px;
}

.email-user {
  color: black;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
}

.det-profil {
  display: flex;
  align-items: center;
  width: 1000px;
}

.nm-user {
  font-family: 'Raleway';
  color: black;
  width: 95px;
  height: 28px;
  top: 34px;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
}

.det-pemesan {
  color: #5e5e5e;
  width: 128px;
  height: 24px;
  top: 4px;
  left: 38px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-top: 5px;
  margin-left: 5px;
}

h1 {
  color: black
}

body {
  background-color: white;
  font-family: 'Raleway';
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  background-color: white;
  z-index: 10000;
}

.txt-tiket {
  font-family: 'Raleway';
  color: black;
  width: 305px;
  height: 40px;
  top: 146px;
  left: 88px;
  font-weight: 400;
  font-size: 30px;
  line-height: 40px;
}

.title {
  position: absolute;
  top: 146px;
  left: 88px;
}

.image-koin {
  top: 199px;
  left: 108px;
  margin-left: 20px;
  display: flex;
}

.img-user {
  display: flex;
}

.txt2 {
  display: flex;
}

.txt3 {
  display: flex;
}

.content-1 {
  width: 350px;
  height: 62px;
}

.content-2 {
  margin-top: 37px;
  width: 476px;
  height: 82px;
}

.txt {
  display: flex;
  margin-top: 13px;
}

.txt img {
  margin-right: 5px;
}



/* ...................................................................................... */
.text {
  width: 305px;
  height: 40px;
  background-color: yellow;
  top: 14.6%;
  left: 88px;
  font-weight: 400;
  font-size: 30px;
  line-height: 40px;
  color: #000000;
}

#ringkasanBooking {
  margin-left: 40px;
  position: absolute;
  margin-right: 88px;
  width: 542px;
  height: 348px;
  top: 295px;
  left: 650px;
  border-radius: 15px;
  /* padding: 20px, 23px,20px, 23px; */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 20px;
  background-color: #FFFFFF;
}

.containerbtn {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 22px;
}

.btn {
  width: 542px;
  top: 295px;
  left: 650px;
  height: 43.93px;
  margin-top: 22px;
  padding: 5px;
  gap: 10px;
  border-radius: 10px;
  border: none;
  background-color: #DAA520;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
}

.btn-checkout {
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.txt-checkout {
  margin-left: 10px;
  width: 74px;
  height: 24px;
}

.txt-checkout p {
  color: white;
  font-size: 16px;
  font-weight: 700;
  font-family: 'Raleway';
}

h5 {
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  font-family: 'Raleway';
  color: #000000;

}

.totalPemesanan {
  padding-top: 20px;
}

.ringkasan {
  font-size: 20px;
  font-weight: bold;
  line-height: 28px;
  color: #000000;
  font-family: 'Raleway';
}

.totalTagihan {
  padding-top: 10px;
  display: flex;
  justify-content: space-between;

}

.txt-total-tagihan {
  font-family: 'Raleway';
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
}

.totalHarga {
  width: 496px;
  height: 24px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-family: 'Raleway';
  color: #000000;
}

.biaya {
  width: 496px;
  height: 122px;
  padding: 15px, 0px, 15px, 0px;
}

hr {
  margin-top: 15px;
}

.biayaTransaksi {
  margin-top: 8px;
  padding-top: 20px;
}

@media screen and (min-width: 1440px) {
  #ringkasanBooking {
    margin-left: 100px;
  }
}

@media screen and (max-width: 1024px) {
  #ringkasanBooking {
    margin-left: -150px;
  }

  .nav2 {
    margin-left: -60px;
  }

  .title {
    margin-left: -60px;
  }

}

@media screen and (min-width: 1360px) {
  #ringkasanBooking {
    margin-left: 60px;
  }
}

@media screen and (min-width: 1600px) {
 #ringkasanBooking{
  margin-left: 250px;
 }
}

@media screen and (min-width: 1660px) {
 #ringkasanBooking{
  margin-left: 270px;
 }
}

@media screen and (min-width: 1920px) {
 #ringkasanBooking{
  margin-left: 550px;
 }
}
</style>