<script setup>
import {ref, computed} from 'vue'
import navbar from '../components/NavBar.vue'
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
          <h6 class="pstikan">pastikan pesanan anda BENAR sebelum checkout ya!</h6>
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
                    <p class="harga">Rp.{{ harga }}</p>
                </div>
            </div>
            <div class="biaya">
              <div class="biayaTransaksi">
                <h6 class="ringkasan">Biaya Transaksi</h6>
                <div class="totalHarga">
                    <p>Biaya Layanan</p>
                    <p class="harga">Rp.{{ layanan }}</p>
                </div>
                <div class="totalHarga">
                    <p>Biaya Jasa Aplikasi</p>
                    <p class="harga">Rp.{{ jasaApp }}</p>
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
              <p><img src="./assets/image/Frame.svg" alt=""></p>
            </div>
          </button>
          </div>
        </div>
    
  </template>

  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');

  .pstikan{
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
  input[type="date"]::-webkit-calendar-picker-indicator{
    background-image: url(../assets/icon.svg);
    background-repeat: no-repeat;
    background-size: 14px;
  }

  .plh-pembayaran{
    margin-top: 5px;
    margin-left: 6px;
    color: #5E5E5E;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  .met-pembayaran{
    display: flex;
  }

  .content-5{
    margin-top: 37px;
  }

  .input-tiket1{
    display: flex;
  }

  .tmbh-brg{
    margin-top: 20px;
  }

  .tambah{
    position:relative;
    margin-left: 16px;
    width: 24px;
    height: 24px;
    border-radius: 8px;
    color: white;
    background-color: #000000;
  }

  .kurang{
    width: 24px;
    height: 24px;
    border-radius: 8px;
    border: solid 1.5px;
    color: #B0BEC5;
    background-color: #FFFFFF;
  }

  .input-tiket2{
    margin-left: 16px;
    width: 28px;
    color: #000000;
    font-family: 'Manrope';
    font-weight: 600;
    font-size: 16px;
    line-height: 21.86px;
  }
  .hrg{
    margin-top: 4px;
    color: #000000;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
  }

  .content-4{
    margin-top: 28px;
  }

  .tiket-masuk{
    color: #000000;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
  }

  .mm-dd-yyy{
    color: #49454F;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    margin-left: 16px;
  }

  .tgl-pemesan{
    font-family: 'Roboto';
    margin-bottom: -14px;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #DAA520;
  }

  fieldset{
    width: 312px;
    height: 56px;
    border: solid 3px;
    border-radius: 4px;
    gap: 10px;
    border-color: #DAA520;
  }

  .date-tgl{
    background: transparent;
    border: none;
    width: 312px;
    height: 48px;
    padding: 4px, 0px, 4px, 0px;
  }
  .date-tgl:focus{
    outline: transparent;
  }

  .content-3{
    margin-top: 37px;
  }
  .txt4{
    display: flex;
  }

  .det-tiket{
    margin-top: 4px;
    margin-bottom: 4px;
    margin-left: 6px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #5e5e5e;
  }

  .btn-pilih{
      margin-top: 6px;
    display: flex;
  }

  .btn-umum,
  .btn-pelajar,
  .btn-mancanegara {
    display: flex;
    align-items: center;
  }

  .btn-umum{
    margin-left: 20px;
    width: 122px;
    height: 48px;
    top: 133px;
    padding: 12px, 20px, 12px, 20px;
  }
  .btn-pelajar{
    width: 125px;
    height: 48px;
    top: 133px;
    left: 149px;
    padding: 12px, 20px, 12px, 20px;
  }
  .btn-mancanegara{
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

  label{
    color: black;
    margin-left: 10px;
  }

  .nav2{
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

  .email-user{
    color: black;
    margin-left: 5px;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
  }

  .det-profil{
    display: flex;
    align-items: center;
  }

  .nm-user{
    font-family: 'Raleway';
    color: black;
    width: 90px;
    height: 28px;
    top: 34px;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
  }

  .det-pemesan{
    color: #5e5e5e;
    width: 116px;
    height: 24px;
    top: 4px;
    left: 38px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-top: 5px;
    margin-left: 5px;
  }

  h1{
    color :black
  }
  body{
    background-color: white;
    font-family: 'Raleway';
  }

  .navbar{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    z-index: 10000;
  }
  .txt-tiket{
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
  .title{
    position: absolute;
    top: 146px;
    left : 88px;
  }

  .image-koin{
    top: 199px;
    left: 108px;
    margin-left: 20px ;
    display: flex;
  }

  .img-user{
    display: flex;
  }

  .txt2{
    display: flex;
  }

  .txt3{
    display: flex;
  }
  .content-1{
    width: 350px;
    height: 62px;
  }

  .content-2{
    margin-top: 37px;
    width: 476px;
    height: 82px;
  }

  .txt{
    display: flex;
    margin-top: 13px;
  }
  .txt img{
    margin-right: 5px;
  }



  /* ...................................................................................... */
  .text{
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
    #ringkasanBooking{
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
    .containerbtn{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 22px;
    }
    .btn{
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
    .btn-checkout{
      align-items: center;
      display: flex;
      justify-content: space-between;
    }
    .txt-checkout{
      margin-left: 10px;
      width: 74px;
      height: 24px;
    }
    .txt-checkout p{
      color: white;
      font-size: 16px;
      font-weight: 700;
      font-family: 'Raleway';
    }
    h5{
      font-size: 24px;
      font-weight: 400;
      line-height: 32px;
      font-family: 'Raleway';
      color: #000000;
    
    }
    .totalPemesanan{
      padding-top: 20px;
    }
    .ringkasan{
      font-size: 20px;
      font-weight: bold;
      line-height: 28px;
      color: #000000;
      font-family: 'Raleway';
    }
    .totalTagihan{
      padding-top: 10px;
      display: flex;
      justify-content: space-between;
    
    }
    .txt-total-tagihan{
      font-family: 'Raleway';
      font-weight: bold;
      font-size: 24px;
      line-height: 32px;
    }
    .totalHarga{
      width: 496px;
      height: 24px;
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
      font-family: 'Raleway';
      color: #000000;
    }
    .biaya{
      width: 496px;
      height: 122px;
      padding: 15px, 0px, 15px, 0px;
    }
    hr{
      margin-top: 15px;
    }
    .biayaTransaksi{
      margin-top: 8px;
      padding-top: 20px;
    }
    
  </style>