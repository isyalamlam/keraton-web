<template>
  <nav>
    <navbar />
  </nav>
  <div class="body">
    <div class="group1">
      <div class="pesan-tiket-langsung">
        <div class="txt-pesan-tiket-langsung">
          <h4>Pesan Tiket Langsung</h4>
        </div>
      </div>
      <div class="group2">
        <div class="icon-group2">
          <img src="../assets/svg/Frame.svg" alt="" />
        </div>
        <div class="txt-group1">
          <h6>Pastikan pesanan Anda BENAR sebelum checkout ya!</h6>
        </div>
      </div>

      <div class="container">
        <div id="detailPemesanan">
          <div class="atas">
            <div class="icon">
              <img src="../assets/svg/account.svg" alt="" />
            </div>
            <div class="txt-group17">
              <p>Detail Pemesanan</p>
            </div>
          </div>

          <div class="nama">
            <div class="john-doe">
              <h6>John Doe</h6>
            </div>
            <div class="johndoe">
              <h6>- (johndoe01@keraton.com)</h6>
            </div>
          </div>
          <div class="pilih-kategori">
            <div class="atas">
              <div class="icon">
                <img src="../assets/svg/Framecard.svg" alt="" />
              </div>
              <div class="txt-group17">
                <p>Pilih Kategori</p>
              </div>
            </div>
            <div class="radioBtn">
              <div class="umum">
                <label class="custom-radio-btn">
                  <input type="radio" name="pilih-kategori" id="umum" checked />
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
          </div>
          <div class="detail-tiket">
            <div class="atas">
              <div class="icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.2"
                    d="M25 16C24.9998 16.9221 25.3182 17.816 25.9014 18.5303C26.4845 19.2447 27.2965 19.7356 28.2 19.92C28.4257 19.9661 28.6285 20.0886 28.7743 20.2669C28.92 20.4453 28.9998 20.6684 29 20.8988V24C29 24.2652 28.8946 24.5196 28.7071 24.7071C28.5196 24.8946 28.2652 25 28 25H12V7H28C28.2652 7 28.5196 7.10536 28.7071 7.29289C28.8946 7.48043 29 7.73478 29 8V11.1012C28.9998 11.3316 28.92 11.5547 28.7743 11.7331C28.6285 11.9114 28.4257 12.0339 28.2 12.08C27.2965 12.2644 26.4845 12.7553 25.9014 13.4697C25.3182 14.184 24.9998 15.0779 25 16Z"
                    fill="#DAA520"
                  />
                  <path
                    d="M28.3988 13.06C28.8505 12.9681 29.2567 12.7229 29.5484 12.366C29.8402 12.009 29.9998 11.5623 30 11.1012V8C30 7.46957 29.7893 6.96086 29.4142 6.58579C29.0391 6.21071 28.5304 6 28 6H4C3.46957 6 2.96086 6.21071 2.58579 6.58579C2.21072 6.96086 2 7.46957 2 8V11.1012C2.00026 11.5623 2.15977 12.009 2.45156 12.366C2.74335 12.7229 3.14949 12.9681 3.60125 13.06C4.27676 13.2001 4.88335 13.5687 5.31883 14.1038C5.75431 14.6388 5.99208 15.3076 5.99208 15.9975C5.99208 16.6874 5.75431 17.3562 5.31883 17.8912C4.88335 18.4263 4.27676 18.7949 3.60125 18.935C3.14865 19.0271 2.74186 19.273 2.44998 19.631C2.15809 19.9889 1.9991 20.4369 2 20.8988V24C2 24.5304 2.21072 25.0391 2.58579 25.4142C2.96086 25.7893 3.46957 26 4 26H28C28.5304 26 29.0391 25.7893 29.4142 25.4142C29.7893 25.0391 30 24.5304 30 24V20.8988C29.9998 20.4377 29.8402 19.9909 29.5484 19.634C29.2567 19.2771 28.8505 19.0319 28.3988 18.94C27.7232 18.7999 27.1167 18.4313 26.6812 17.8962C26.2457 17.3612 26.0079 16.6924 26.0079 16.0025C26.0079 15.3126 26.2457 14.6438 26.6812 14.1088C27.1167 13.5737 27.7232 13.2051 28.3988 13.065V13.06ZM4 20.9C5.12962 20.6699 6.14502 20.0565 6.8743 19.1637C7.60358 18.2708 8.00194 17.1534 8.00194 16.0006C8.00194 14.8478 7.60358 13.7304 6.8743 12.8376C6.14502 11.9448 5.12962 11.3314 4 11.1012V8H11V24H4V20.9ZM28 20.9V24H13V8H28V11.1C26.8704 11.3301 25.855 11.9435 25.1257 12.8363C24.3964 13.7292 23.9981 14.8466 23.9981 15.9994C23.9981 17.1522 24.3964 18.2696 25.1257 19.1624C25.855 20.0552 26.8704 20.6686 28 20.8988V20.9Z"
                    fill="#DAA520"
                  />
                </svg>
              </div>
              <div class="txt-group17">
                <p>Detail Tiket</p>
              </div>
            </div>
            <div class="date">
              <fieldset class="my-fieldset" @click.stop="focusInput">
                <legend class="my-legend">
                  <div class="tgl">
                    <small>Tanggal Pemesanan</small>
                  </div>
                </legend>
                <div class="test">
                  <input
                    type="date"
                    name=""
                    id="tanggalPemesanan"
                    :value="tanggalSekarang"
                    disabled
                  />
                  <div class="icon-date">
                    <img src="../assets/svg/Icondate.svg" alt="" />
                  </div>
                </div>
              </fieldset>
              <div class="supporting-text">
                <div class="supporting-txt">
                  <small>MM/DD/YY</small>
                </div>
              </div>
            </div>
            <div class="detail-tiket-masuk">
              <div class="tiket-masuk">
                <h6>Tadarus di Langgar Alit</h6>
              </div>
              <div class="txt-harga">
                <h6>Rp. {{ hargaStringTiket }}</h6>
              </div>
            </div>

            <div class="btn-tiket">
              <div class="">
                <button class="min" @click="kurang">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1512_471)">
                      <path
                        class="path"
                        d="M3.33398 7.33337H12.6673V8.66671H3.33398V7.33337Z"
                        fill="#B0BEC5"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1512_471">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
              <div class="count">
                <p>{{ count }}</p>
              </div>
              <div class="">
                <button class="plus" @click="tambah">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1512_477)">
                      <path
                        class="path"
                        d="M7.33398 7.33337V3.33337H8.66732V7.33337H12.6673V8.66671H8.66732V12.6667H7.33398V8.66671H3.33398V7.33337H7.33398Z"
                        fill="#B0BEC5"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1512_477">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
            <div class="pembayaran">
              <payment />
            </div>
          </div>
        </div>
        <div id="ringkasanBooking" :class="{ 'scroll-active': isScrollActive }">
          <h5>Ringkasan Booking</h5>
          <div class="totalPemesanan">
            <h6>Total Pemesanan</h6>
            <div class="totalHarga">
              <p>Total Harga ({{ count }} Tiket)</p>
              <p class="harga">Rp. {{ hargaString }}</p>
            </div>
          </div>
          <div class="biaya">
            <div class="biayaTransaksi">
              <h6>Biaya Transaksi</h6>
              <div class="totalHarga">
                <p>Biaya Layanan</p>
                <p class="harga">Rp. {{ layananString }}</p>
              </div>
              <div class="totalHarga">
                <p>Biaya Jasa Aplikasi</p>
                <p class="harga">Rp. {{ jasaAppString }}</p>
              </div>
            </div>
          </div>
          <hr />
          <div class="totalTagihan">
            <h5 class="txt-total-tagihan">Total Tagihan</h5>
            <h6 class="harga">Rp.{{ totalPemesanan }}</h6>
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
    </div>
  </div>
</template>

<style scoped>
@import "../assets/css/CheckOut.css";
</style>

<script setup>
import { ref, computed } from "vue";
import navbar from "../components/NavBar.vue";
import payment from "../components/Pembayaran.vue";
import SelectPopup from "../components/SelectPopup.vue";

const selectPopup = ref(null);

const count = ref(1);
const layanan = 2500;
const jasaApp = 1000;
const harga = ref(10000);

const hargaTiket = harga.value.toLocaleString("id-ID", {
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
});

const hargaStringTiket = ref(hargaTiket);

const hargaString = ref(harga.value.toLocaleString("id-ID"));
const layananString = layanan.toLocaleString("id-ID");
const jasaAppString = jasaApp.toLocaleString("id-ID");

const totalPemesanan = computed(() =>
  (harga.value + layanan + jasaApp).toLocaleString("id-ID")
);

const tambah = () => {
  count.value++;
  harga.value = 10000 * count.value;
  hargaString.value = harga.value.toLocaleString("id-ID");
};

const kurang = () => {
  if (count.value > 1) {
    count.value--;
    harga.value = 10000 * count.value;
    hargaString.value = harga.value.toLocaleString("id-ID");
  }
};
const tanggalSekarang = new Date().toISOString().substr(0, 10);

const focusInput = () => {
  const input = document.getElementById("tanggalPemesanan").focus();
  input.focus();
  input.click();
};
</script>
