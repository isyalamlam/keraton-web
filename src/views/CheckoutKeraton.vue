<script setup>
import { ref, computed } from "vue";
import navbar from "../components/NavBar.vue";
import Payment from "../components/Pembayaran.vue";
const count = ref(1);
const layanan = 2500;
const jasaApp = 1000;
const harga = ref(10000);

const tanggalSekarang = new Date().toISOString().substr(0, 10);

const hargaTiket = harga.value.toLocaleString("id-ID", {
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
});

const hargaStringTiket = ref(hargaTiket);

const hargaString = computed(() => harga.value.toLocaleString("id-ID"));
const layananString = layanan.toLocaleString("id-ID");
const jasaAppString = jasaApp.toLocaleString("id-ID");

const totalPemesanan = computed(() =>
  (harga.value + layanan + jasaApp).toLocaleString("id-ID")
);

const tambah = () => {
  count.value++;
  harga.value = 10000 * count.value;
};

const kurang = () => {
  if (count.value > 1) {
    count.value--;
    harga.value = 10000 * count.value;
  }
};
</script>

<style lang="css"></style>

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
        <img src="../assets/svg/Frame.svg" class="image-koin" />
        <div>
          <h6 class="pstikan">
            pastikan pesanan anda BENAR sebelum checkout ya!
          </h6>
        </div>
      </div>
    </div>
    <div class="nav2">
      <div class="content-1">
        <div class="txt2">
          <img src="../assets/svg/account.svg" class="img-user" />
          <p class="det-pemesan">Detail Pemesan</p>
        </div>
        <div class="det-profil">
          <h6 class="nm-user">John Doe</h6>
          <h6 class="email-user">- (johndoe01@keraton.com)</h6>
        </div>
      </div>
      <div class="content-2">
        <div class="txt3">
          <img src="../assets/svg/Framecard.svg" />
          <p class="pil-kategori">Pilih Kategori</p>
        </div>
        <div class="btn-pilih">
          <div class="umum">
            <label class="custom-radio-btn">
              <input type="radio" name="pilih-kategori" id="umum" />
              <span class="checkmark"></span>
            </label>
            <label for="umum">Umum</label>
          </div>
          <div class="pelajar">
            <label class="custom-radio-btn">
              <input type="radio" name="pilih-kategori" id="pelajar" />
              <span class="checkmark"></span>
            </label>
            <label for="pelajar">Pelajar</label>
          </div>
          <div class="mancanegara">
            <label class="custom-radio-btn">
              <input type="radio" name="pilih-kategori" id="mancanegara" />
              <span class="checkmark"></span>
            </label>
            <label for="mancanegara">Mancanegara</label>
          </div>
        </div>
        <div class="content-3">
          <div class="txt4">
            <img src="../assets/svg/det-tiket.svg" class="img-det-tiket" />
            <p class="det-tiket">Detail Tiket</p>
          </div>
          <div class="date">
            <form>
              <fieldset>
                <legend class="tgl-pemesan">Tanggal Pemesanan</legend>
                <input type="date" class="date-tgl" />
              </fieldset>
            </form>
            <div class="mm-dd-yyy">
              <small>MM/DD/YYY</small>
            </div>
          </div>
          <div>
            <div class="content-4">
              <div>
                <h6 class="tiket-masuk">
                  Tiket masuk Keraton Kesepuhan Cirebon
                </h6>
              </div>
              <div>
                <h6 class="hrg">Rp. {{ hargaStringTiket }}</h6>
              </div>
            </div>
            <div class="tmbh-brg">
              <div class="input-tiket1">
                <button @click="kurang" class="kurang">
                  <img src="../assets/svg/iconKurang.svg" />
                </button>
                <p class="input-tiket2">{{ count }}</p>
                <button @click="tambah" class="tambah">
                  <img src="../assets/svg/iconTambah.svg" />
                </button>
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
    <hr />
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
          <p><img src="../assets/svg/arrow-btn-checkout.svg" alt="" /></p>
        </div>
      </button>
    </div>
  </div>
</template>

<style scoped>
@import "../assets/css/CheckoutKeraton.css";
</style>
