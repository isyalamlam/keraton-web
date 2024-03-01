  <!-- <script setup>
    import navbar from './components/navbar.vue'
  </script> -->

<script setup>
import {ref, computed} from 'vue'
 const count = ref(1)
  const layanan = 2500
  const jasaApp = 1000
  const harga = ref(10000)
  
  const tanggalSekarang = new Date().toISOString().substr(0, 10); 
  
  const totalPemesanan = computed(() => harga.value + layanan + jasaApp)
  
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
  <style lang="css">
  </style>
  <template>
      <nav class="navbar">
      <navbar />
    </nav>
    <div>
    <div class="title">
      <div class="txt-tiket">
      <h4>Pesan Tiket Langsung</h4>
      </div>
      <div class="txt">
        <img src="../assets/images/Frame.png" class="image-koin">
        <div>
          <h6>pastikan pesanan anda BENAR sebelum checkout ya!</h6>
        </div>
      </div>
      </div>
      <div class="nav2">
      <div class="content-1">
        <div class="txt2">
          <img src="../assets/images/Frame (1).png" class="img-user">
          <p class="det-pemesan">Detail Pemesan</p>
        </div>
        <div class="det-profil">
          <h6 class="nm-user">John Doe</h6>
          <h6 class="email-user">- (johndoe01@keraton.com)</h6>
        </div>
      </div>
      <div class="content-2">
        <div class="txt3">
          <img src="../assets/images/card.png">
          <p class="pil-kategori">Pilih Kategori</p>
        </div>
      <div class="btn-pilih">
        <div class="btn-umum">
          <input type="radio" name="pilih-kategori"><label >Umum</label>
        </div>
        <div class="btn-pelajar">
          <input type="radio" name="pilih-kategori"><label>Pelajar</label>
        </div>
        <div class="btn-mancanegara">
          <input type="radio" name="pilih-kategori"><label>Mancanegara</label>
        </div>
      </div>
      <div class="content-3">
        <div class="txt4">
          <img src="../assets/images/Frame (5).png" class="img-det-tiket">
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
          <h6 class="hrg">Rp. 10.000,00</h6>
        </div>
      </div>
      <div class="tmbh-brg">
        <div class="input-tiket1">
          <button @click="kurang" class="kurang">-</button>
          <p class="input-tiket2">{{ count }}</p>
          <button @click="tambah" class="tambah">+</button>
        </div>
      </div>
      </div>
      <div class="content-5">
        <div class="met-pembayaran">
          <img src="../assets/images/Frame.svg">
          <p class="plh-pembayaran">Pilih Pembayaran</p>
        </div>
        <div>
          <button>
          pop up <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.8354 1.5855L7.21055 7.21031C7.15831 7.26261 7.09628 7.30409 7.02799 7.3324C6.95971 7.36071 6.88652 7.37528 6.8126 7.37528C6.73868 7.37528 6.66548 7.36071 6.5972 7.3324C6.52892 7.30409 6.46688 7.26261 6.41464 7.21031L0.789838 1.5855C0.684294 1.47996 0.625 1.33681 0.625 1.18755C0.625 1.03829 0.684294 0.895138 0.789838 0.789594C0.895382 0.68405 1.03853 0.624756 1.18779 0.624756C1.33706 0.624756 1.4802 0.68405 1.58575 0.789594L6.8126 6.01715L12.0394 0.789594C12.0917 0.737334 12.1537 0.695879 12.222 0.667596C12.2903 0.639313 12.3635 0.624756 12.4374 0.624756C12.5113 0.624756 12.5845 0.639313 12.6528 0.667596C12.7211 0.695879 12.7831 0.737334 12.8354 0.789594C12.8876 0.841854 12.9291 0.903896 12.9574 0.972177C12.9856 1.04046 13.0002 1.11364 13.0002 1.18755C13.0002 1.26146 12.9856 1.33464 12.9574 1.40292C12.9291 1.4712 12.8876 1.53324 12.8354 1.5855Z" fill="black"/>
          </svg>
        </button>
        </div>
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
                    <p class="harga">Rp.10. 000</p>
                </div>
            </div>
            <div class="biaya">
              <div class="biayaTransaksi">
                <h6 class="ringkasan">Biaya Transaksi</h6>
                <div class="totalHarga">
                    <p>Biaya Layanan</p>
                    <p class="harga">Rp.2. 500</p>
                </div>
                <div class="totalHarga">
                    <p>Biaya Jasa Aplikasi</p>
                    <p class="harga">Rp.1. 000</p>
                </div>
            </div>
            </div>
            <hr>
            <div class="totalTagihan">
                <h5 class="txt-total-tagihan">Total Tagihan</h5>
                <h6 class="ringkasan">Rp.{{ totalTagihan }}</h6>
            </div>
            <div class="containerbtn">
              <button class="btn">
            <div class="btn-checkout">
              <div class="txt-checkout">
                <p>Checkout</p>
              </div>
              <p><img src="./assets/image/Frame.svg" alt=""></p>
            </div>
          </button>
          </div>
        </div>
    
  </template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');

.highlight{
  text-decoration: none;
}

h1{
  margin-bottom: 73px;
}

b{
  font-weight: 1000;
}
.error {
  color: #FF5656;
  font-size: 12px; 
  margin-top: 5px; 
}

.error-border {
  border: 2px solid #FF5656;
}

.error-message {
  color: #FF5656;
  font-size: 12px;
  margin-top: 8px; 
  font-weight: 700;
}


body {
  justify-content: center;
  align-items: center;
  font-family: 'Raleway';
  width: fit-content;
  height: fit-content;
}

.container{
  width: 1280px;
  height: 832px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto 1fr;
}

h1{
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  font-family: 'Raleway';
}

.form {
  height: 354px;
  width: 418px;
  margin: auto;
  margin-top: 169px;
}

.text{
  font-size: 16px;
  font-weight: 700;
  text-align: left;
  font-family: 'Raleway';
  margin-bottom: 4px;
}

.box {
  background-color: #f0f0f0; 
  border-radius: 8px;
  width: 416px;
  height: 40px;
  margin-bottom: 38px;
}

.box input {
  border: none; 
  outline: none; 
  background: none; 
  width: 416px;
  height: 40px;
  border-radius: 8px;
  font-size: 16px;
  padding-left: 10px;
  box-sizing: border-box;
}
.box input::placeholder {
  font-size: 14px;
  font-weight: 400;
  justify-content: center ;
  top:36px;
}

.button {
  background-color: #123B32;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  width: 416px;
  height: 40px;
  font-weight: 500;
  font-size: 14px;
  font-family: 'Raleway';
}

.signup{
  font-weight: 400;
  width: 418px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 38px;
  font-family: 'Raleway';
  text-decoration: none;
}

.highlight{
  color: #4F3CC9;
  cursor: pointer;
}

.terms{
  font-family: 'Inter';
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  color: #AFAFAF;
}

.image{
  width: 66%; /* Ubah lebar gambar menjadi 66% dari lebar kontainer */
  height: 832px;
  position: relative;
}

.image h1{
  font-size: 30px;
  color: #FAE084;
  font-weight: 700;
  line-height: 40px;
  position: absolute;
  width: 313px;
  height: 120px;
  text-align: left;
}

.decor{
  padding: 64px 137.16px 30px 64px;
  width: 100%;
  height: 304px;
  margin-left: 64px;
  margin-top: 64px;
  position: absolute;
  z-index: 1;
}

.logo{
  display: grid;
  grid-template-columns: auto auto;
  width: 152px;
  height: 59px;
  padding: 0px 0px 0px 0px;
  align-items: center;
  gap: 10px;
  margin-bottom: 31px;
}

.logo h5{
  color: #FAE084;
  font-size: 14px;
  line-height: 20px;
  width: 98px;
  height: 59px;
}
</style>
