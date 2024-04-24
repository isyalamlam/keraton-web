<script setup>
import { ref, computed, onMounted } from "vue";
import navbar from "../components/NavBar.vue";
import Payment from "../components/Pembayaran.vue";
const count = ref(35);
const layanan = 2500;
const jasaApp = 1000;
const harga = ref(85000);
const tanggalSekarang = new Date().toISOString().substr(0, 10);
const totalHarga = computed(() => count.value * harga.value);

const hargaTiket = harga.value.toLocaleString("id-ID", {
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
});

const hargaStringTiket = ref(harga);

const hargaString = computed(() => totalHarga.value.toLocaleString("id-ID"));
const layananString = layanan.toLocaleString("id-ID");
const jasaAppString = jasaApp.toLocaleString("id-ID");

const totalPemesanan = computed(() =>
  (totalHarga.value + layanan + jasaApp).toLocaleString("id-ID")
);

const tambah = () => {
  count.value++;
  harga.value = 85000;
};

const kurang = () => {
  if (count.value > 35) {
    count.value--;
    harga.value = 85000;
  }
};

onMounted(() => {
  const optionMenu = document.querySelector(".select-menu");
  const selectBtn = optionMenu.querySelector(".select-btn");
  const options = optionMenu.querySelectorAll(".option");
  const sBtn_text = optionMenu.querySelector(".sBtn-text");

  selectBtn.addEventListener("click", () =>
    optionMenu.classList.toggle("active")
  );
  options.forEach((option) => {
    option.addEventListener("click", () => {
      let selectedOption = option.querySelector(".option-text").innerText;
      sBtn_text.innerText = selectedOption;
      optionMenu.classList.remove("active");
    });
  });
});
</script>

<style lang="css"></style>

<template>
  <nav class="navbar">
    <navbar />
  </nav>
  <div class="body">
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
              <input
                type="radio"
                name="pilih-kategori"
                id="umum"
                checked
                disabled
              />
              <span class="checkmark"></span>
            </label>
            <label for="umum">Umum</label>
          </div>
          <div class="pelajar">
            <label class="custom-radio-btn">
              <input type="radio" name="pilih-kategori" id="pelajar" disabled />
              <span class="checkmark"></span>
            </label>
            <label for="pelajar">Pelajar</label>
          </div>
          <div class="mancanegara">
            <label class="custom-radio-btn">
              <input
                type="radio"
                name="pilih-kategori"
                id="mancanegara"
                disabled
              />
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
          <div class="pil-jam">
            <div class="select-menu">
              <div class="select-btn">
                <span class="sBtn-text">Pilih Jam</span>
                <i class="trigger"><img src="../assets/svg/trigger.svg" /></i>
              </div>
              <ul class="options">
                <li class="option">
                  <i class="bx bxl-github" style="color: #171515"></i>
                  <span class="option-text">10:00</span>
                </li>
                <li class="option">
                  <i class="bx bxl-instagram-alt" style="color: #e1306c"></i>
                  <span class="option-text">11:00</span>
                </li>
                <li class="option">
                  <i class="bx bxl-linkedin-square" style="color: #0e76a8"></i>
                  <span class="option-text">12:00</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="content-4">
            <div>
              <h6 class="tiket-masuk">Paket Wisata Silaturahmi I</h6>
            </div>
            <div>
              <h6 class="hrg">Rp. 85.000,00</h6>
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
          <div class="content-5">
            <Payment />
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
  </div>
</template>

<style scoped>
@import "../assets/css/PilihanPaket.css";
</style>
