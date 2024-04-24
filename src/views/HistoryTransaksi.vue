<script setup>
import { ref } from "vue";
import NavBar from "../components/NavBar.vue";

const detail = ref(false);
const selectedStatus = ref("sudahDigunakan");
const statusSelected = ref(false);

const openDetailTransaksi = () => {
  detail.value = !detail.value;
};

const closeDetailTransaksi = () => {
  detail.value = false;
};
</script>

<template>
  <div>
    <nav class="navbar">
      <NavBar />
    </nav>
    <div class="projekk">
      <div>
        <h1 class="title">History transaksi</h1>
      </div>
      <div class="container">
        <div class="form-input">
          <div class="search">
            <label for="search" class="search-label">
              <img src="../assets/svg/search.svg" class="search-icon" />
              <input
                type="search"
                v-model="searchQuery"
                id="search"
                name="search"
                placeholder="Cari transaksi"
                class="Pencarian"
              />
            </label>
          </div>
          <div class="date">
            <input
              value="Pilih tanggal"
              type="date"
              class="tanggal"
              placeholder="Pilih tanggal"
            />
          </div>
          <div class="status">
            <select
              name="Status"
              placeholder="status"
              value="Status"
              v-model="selectedStatus"
              @change="statusSelected = true"
            >
              <option value="sudahDigunakan">Sudah digunakan</option>
              <option value="dapatDigunakan">Dapat digunakan</option>
              <option value="expired">Expired</option>
              <option value="menungguPembayaran">Menunggu pembayaran</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div
      class="tabel"
      v-if="!statusSelected || selectedStatus === 'sudahDigunakan'"
    >
      <div class="card-1">
        <div class="tiket">
          <div class="tiket__header-container">
            <img
              src="../assets/images/Vector.png"
              alt="icon-tiket"
              class="icon-tiket"
            />
            <p>Tiket</p>
            <label>17 Agu 2023</label>
            <p class="sudah__digunakan">Sudah digunakan</p>
          </div>
          <div class="tiket__content">
            <img src="../assets/images/img-1.jpg" alt="" />
            <div class="tiket__content-details">
              <h6>Tiket Masuk Keraton Kasepuhan Cirebon+Museum+...</h6>
              <div class="label">
                <label class="labelharga">1 tiket x Rp. 10.000</label><br />
                <label>+2 tiket lainnya</label>
              </div>
              <div class="total">
                <div class="info">
                  <p class="total__belanja">Total belanja</p>
                  <p class="hrga">Rp. 33.500</p>
                </div>
                <div class="actions">
                  <a @click="openDetailTransaksi" class="detail"
                    ><p>Lihat detail transaksi</p></a
                  >
                  |
                  <a href="" class="bantuan"><p>Bantuan</p></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="tabel"
      v-if="!statusSelected || selectedStatus === 'dapatDigunakan'"
    >
      <div class="card-1">
        <div class="tiket">
          <div class="tiket__header-container">
            <img
              src="../assets/images/Vector.png"
              alt="icon-tiket"
              class="icon-tiket"
            />
            <p>Tiket</p>
            <label>17 Agu 2023</label>
            <p class="dapat__digunakan">Dapat digunakan</p>
          </div>
          <div class="tiket__content">
            <img src="../assets/images/img-1.jpg" alt="" />
            <div class="tiket__content-details">
              <h6>Tiket Masuk Keraton Kasepuhan Cirebon+Museum+...</h6>
              <div class="label">
                <label class="labelharga">1 tiket x Rp. 10.000</label><br />
                <label>+2 tiket lainnya</label>
              </div>
              <div class="total">
                <div class="info">
                  <p class="total__belanja">Total belanja</p>
                  <p class="hrga">Rp. 33.500</p>
                </div>
                <div class="actions">
                  <a @click="openDetailTransaksi" class="detail"
                    ><p>Lihat detail transaksi</p></a
                  >
                  |
                  <a href="" class="bantuan"><p>Bantuan</p></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="tabel" v-if="!statusSelected || selectedStatus === 'expired'">
      <div class="card-3">
        <div class="tiket">
          <div class="tiket__header-container">
            <img
              src="../assets/images/Vector.png"
              alt="icon-tiket"
              class="icon-tiket"
            />
            <p>Tiket</p>
            <label>17 Agu 2023</label>
            <p class="expired">Expired</p>
          </div>
          <div class="tiket__content">
            <img src="../assets/images/img-1.jpg" alt="" />
            <div class="tiket__content-details">
              <h6>Tiket Masuk Keraton Kasepuhan Cirebon+Museum+...</h6>
              <div class="label">
                <label class="labelharga">1 tiket x Rp. 10.000</label><br />
                <label>+2 tiket lainnya</label>
              </div>
              <div class="total">
                <div class="info">
                  <p class="total__belanja">Total belanja</p>
                  <p class="hrga">Rp. 33.500</p>
                </div>
                <div class="actions">
                  <a @click="openDetailTransaksi" class="detail"
                    ><p>Lihat detail transaksi</p></a
                  >
                  |
                  <a href="" class="bantuan"><p>Bantuan</p></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="tabel"
      v-if="!statusSelected || selectedStatus === 'menungguPembayaran'"
    >
      <div class="card-4">
        <div class="tiket">
          <div class="tiket__header-container">
            <img
              src="../assets/images/Vector.png"
              alt="icon-tiket"
              class="icon-tiket"
            />
            <p>Tiket</p>
            <label>17 Agu 2023</label>
            <p class="menunggu__pembayaran">Menunggu pembayaran</p>
          </div>
          <div class="tiket__content">
            <img src="../assets/images/img-1.jpg" alt="" />
            <div class="tiket__content-details">
              <h6>Tiket Masuk Keraton Kasepuhan Cirebon+Museum+...</h6>
              <div class="label">
                <label class="labelharga">1 tiket x Rp. 10.000</label><br />
                <label>+2 tiket lainnya</label>
              </div>
              <div class="total">
                <div class="info">
                  <p class="total__belanja">Total belanja</p>
                  <p class="hrga">Rp. 33.500</p>
                </div>
                <div class="actions">
                  <a @click="openDetailTransaksi" class="detail"
                    ><p>Lihat detail</p></a
                  >
                  |
                  <a @click="openMenungguPembayaran" class="cara"
                    ><p>Cara Pembayaran</p></a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- popup -->
    <section class="detail-transaksi" v-if="detail">
      <div class="popup">
        <div class="popup-content">
          <div class="header">
            <h1 class="p">Detail Transaksi</h1>
            <span class="close" @click="closeDetailTransaksi"
              ><img src="../assets/images/close.png" class="Icon"
            /></span>
          </div>
          <div class="isi">
            <small class="label-card1">Sudah digunakan</small>
            <div class="info__details">
              <div class="flex-container">
                <div>
                  <h6>No. Transaksi</h6>
                  <p>INV/20230817/MPL/3721648145</p>
                </div>
                <div>
                  <h6>Tanggal Pembelian</h6>
                  <p>15 Agustus 2023, 10:00 WIB</p>
                </div>
              </div>
              <h6 class="detailtiket">Detail tiket</h6>
              <div class="detail-tiket">
                <img src="../assets/svg/gambarKraton.svg" alt="" />
                <div class="info-detail-tiket">
                  <p>Tiket Masuk Keraton Kasepuhan (UMUM)</p>
                  <label class="harga">17 Agu 2023; 10:00</label>
                  <label class="harga">1 x Rp. 10.000</label>
                </div>
              </div>
              <div class="all-tiket">
                <small
                  >Lihat semua tiket
                  <img src="../assets/svg/panahBawah.svg" alt=""
                /></small>
              </div>
              <h6 class="info-pembayaran">Info pembayaran</h6>
              <div class="status-pembayaran">
                <h6>Status pembayaran</h6>
                <small>Berhasil</small>
              </div>
              <div class="pemesan">
                <h6>Pemesan</h6>
                <p>John Doe<label>/johndoe@keraton.com</label></p>
              </div>
              <div class="metode-pmbayaran">
                <h6>Metode Pembayaran</h6>
                <p>BJB Virtual Account</p>
              </div>
              <div class="total-harga-3-Tiket">
                <h6>Total Harga(3 Tiket)</h6>
                <p>Rp. 30.000</p>
              </div>
              <div class="biaya-layanan">
                <h6>Biaya Layanan</h6>
                <p>Rp. 3.500</p>
              </div>
              <div class="line"></div>
              <div class="total-biaya">
                <h6>Total Biaya</h6>
                <p>Rp. 33.500</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="detail-transaksi" v-if="cara">
      <div class="popup">
        <div class="popup-content">
          <div class="header">
            <h1 class="p">Cara Pembayaran</h1>
            <span class="close" @click="closeMenungguPembayaran"
              ><img src="../assets/images/close.png" class="Icon"
            /></span>
          </div>
          <div class="isi">
            <div class="bjb">
              <h4>BJB Virtual Account</h4>
              <img src="../assets/svg/GKL7_Bank BJB Logo.svg" alt="" />
            </div>
            <div class="nomor-virtual-account">
              <div class="nva">
                <h6>Nomor Virtual Account</h6>
                <h5>8883xxxxxxxxxx</h5>
              </div>
              <div class="clipboard">
                <p>
                  Salin <img src="../assets/svg/ClipboardText.svg" alt="" />
                </p>
              </div>
            </div>
            <div class="nomor-virtual-account">
              <div class="nva">
                <h6>Total Pembayaran</h6>
                <h5>Rp. 33.500</h5>
              </div>
              <div class="clipboard">
                <p>
                  Salin <img src="../assets/svg/ClipboardText.svg" alt="" />
                </p>
              </div>
            </div>
            <div class="steps">
              <div class="atm-bjb">
                <h5>ATM BJB</h5>
                <img src="../assets/svg/CaretDown.svg" alt="" />
              </div>
              <div class="mobile-banking-bjb">
                <h5>Mobile Banking BJB</h5>
                <img src="../assets/svg/CaretDown.svg" alt="" />
              </div>
              <div class="internet-banking-bjb">
                <h5>Internet Banking BJB</h5>
                <img src="../assets/svg/CaretDown.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@import "../assets/css/HistoryTransaksi.css";
</style>
