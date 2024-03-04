<script setup>
import { ref } from 'vue';



const detail = ref(false)

const openDetailTransaksi = () =>{
    detail.value = !detail.value
}
const closeDetailTransaksi = () => {
    detail.value = false;
}


</script>

<template>
    <div class="navbar">
            <div class="navbar-left">
              <img  alt="icon-aplikasi" src="../assets/images/logo_keraton.png" class="app-icon" />
              <span class="app-name">Keraton Kesepuhan Cirebon</span>
            </div>
            <div class="navbar-right">
              <nav>
                    <ul>
                        <li><a href="#">Beranda</a></li>
                        <li><a href="#">Sejarah</a></li>
                        <li><a href="#">Booking</a></li>
                        <li><a href="#">Objek Wisata</a></li>
                        <button @click="getTickets" style="border-radius: 5px; background-color: #123B32; color: white;">Dapatkan Tiket</button>
                    </ul>
                </nav>
            </div>
          </div>
        <div><h1 class="title">History transaksi</h1></div>
        <div class="container">
            <div class="form-input">
                <input type="search" v-model="searchQuery"  id="search" name="search" placeholder="Cari transaksi" class="Pencarian">
                <input value="Pilih tanggal" type="date" class="tanggal" placeholder="Pilih tanggal">
                <select name="Status" placeholder="status" value="Status">
                    <!-- <option value="" disabled selected>Status</option> -->
                    <option value="sudahDigunakan">Sudah digunakan</option>
                    <option value="dapatDigunakan">Dapat digunakan</option>
                    <option value="expired">Expired</option>
                    <option value="menungguPembayaran">Menunggu pembayaran</option>
                </select>
            </div>
        </div>
        <div class="tabel">
            <div class="tiket">
              <div class="tiket__header-container">
                <img src="../assets/images/Vector.png" alt="icon-tiket" class="icon-tiket">
                <p>Tiket</p>
                <label>17 Agu 2023</label>
                <p class="sudah__digunakan">Sudah digunakan</p>
              </div>
              <div class="tiket__content">
                <img src="../assets/images/img-1.jpg" alt="">
                <div class="tiket__content-details">
                  <h6>Tiket Masuk Keraton Kasepuhan Cirebon+Museum+...</h6>
                  <div class="label">
                  <label class="labelharga">1 tiket x Rp. 10.000</label><br>
                  <label>+2 tiket lainnya</label>
                </div>
                <div class="total">
                <div class="info">
                    <p class="total__belanja">Total belanja</p>
                    <p class="hrga">Rp. 33.500</p>
                </div>
                <div class="actions">
                    <a @click="openDetailTransaksi" class="detail"><p>Lihat detail transaksi</p></a>
                    |
                    <a href="" class="bantuan"><p>Bantuan</p></a>
                </div>
            </div>
                </div>
              </div>
            </div>
        </div>
        <div class="tabel">
            <div class="tiket">
              <div class="tiket__header-container">
                <img src="../assets/images/Vector.png" alt="icon-tiket" class="icon-tiket">
                <p>Tiket</p>
                <label>17 Agu 2023</label>
                <p class="dapat__digunakan">Dapat digunakan</p>
              </div>
              <div class="tiket__content">
                <img src="../assets/images/img-1.jpg" alt="">
                <div class="tiket__content-details">
                  <h6>Tiket Masuk Keraton Kasepuhan Cirebon+Museum+...</h6>
                  <div class="label">
                  <label class="labelharga">1 tiket x Rp. 10.000</label><br>
                  <label>+2 tiket lainnya</label>
                </div>
                <div class="total">
                <div class="info">
                    <p class="total__belanja">Total belanja</p>
                    <p class="hrga">Rp. 33.500</p>
                </div>
                <div class="actions">
                    <a @click="openDetailTransaksi" class="detail"><p>Lihat detail transaksi</p></a>
                    |
                    <a href="" class="bantuan"><p>Bantuan</p></a>
                </div>
            </div>
                </div>
              </div>
            </div>
        </div>
        <div class="tabel">
            <div class="tiket">
              <div class="tiket__header-container">
                <img src="../assets/images/Vector.png" alt="icon-tiket" class="icon-tiket">
                <p>Tiket</p>
                <label>17 Agu 2023</label>
                <p class="expired">Expired</p>
              </div>
              <div class="tiket__content">
                <img src="../assets/images/img-1.jpg" alt="">
                <div class="tiket__content-details">
                  <h6>Tiket Masuk Keraton Kasepuhan Cirebon+Museum+...</h6>
                  <div class="label">
                  <label class="labelharga">1 tiket x Rp. 10.000</label><br>
                  <label>+2 tiket lainnya</label>
                </div>
                <div class="total">
                <div class="info">
                    <p class="total__belanja">Total belanja</p>
                    <p class="hrga">Rp. 33.500</p>
                </div>
                <div class="actions">
                    <a @click="openDetailTransaksi" class="detail"><p>Lihat detail transaksi</p></a>
                    |
                    <a href="" class="bantuan"><p>Bantuan</p></a>
                </div>
            </div>
                </div>
              </div>
            </div>
        </div>
        <div class="tabel">
            <div class="tiket">
              <div class="tiket__header-container">
                <img src="../assets/images/Vector.png" alt="icon-tiket" class="icon-tiket">
                <p>Tiket</p>
                <label>17 Agu 2023</label>
                <p class="menunggu__pembayaran">Menunggu pembayaran</p>
              </div>
              <div class="tiket__content">
                <img src="../assets/images/img-1.jpg" alt="">
                <div class="tiket__content-details">
                  <h6>Tiket Masuk Keraton Kasepuhan Cirebon+Museum+...</h6>
                  <div class="label">
                  <label class="labelharga">1 tiket x Rp. 10.000</label><br>
                  <label>+2 tiket lainnya</label>
                </div>
                <div class="total">
                <div class="info">
                    <p class="total__belanja">Total belanja</p>
                    <p class="hrga">Rp. 33.500</p>
                </div>
                <div class="actions">
                    <a @click="openDetailTransaksi" class="detail"><p>Lihat detail</p></a>
                    |
                    <a href="" class="bantuan"><p>Cara Pembayaran</p></a>
                </div>
            </div>
                </div>
              </div>
            </div>
        </div>
        

        <section class="detail-transaksi" v-if="detail">
        <div class="popup">
            <div class="popup-content">
                <span class="close" @click="closeDetailTransaksi"><img src="../assets/images/close.png" class="Icon"></span>
                <div class="header">
                    <h1 class="p">Detail Transaksi</h1>
                </div>
                <div class="isi">
                <label>Sudah digunakan</label>
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
                </div>
              </div>
            </div>
        </div>
    </section>
    </template>
    
    
<style>
    @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');
    
    body {
        font-family: 'Raleway', sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f8f8f8;
    }
    
    h1.title {
        text-align: center;
        margin-top: 50px;
        color: #333;
    }
    
    .navbar {
        display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 10px 0px;
      gap: 327px;
      position: relative;
      background-color: white;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      font-family: 'Raleway', sans-serif;
       
      }
      
      .navbar-left {
        display: flex;
        align-items: center;
        flex: none;
        order: 0;
        flex-grow: 0;
        width: 217px;
        height: 84px;
      
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
    
    .Pencarian {
        width: 246px;
        height: 48px;
        padding: 12px;
        border: 1px solid #ddd;
        border-radius: 5px;
        box-sizing: border-box;
        margin-bottom: 10px;
    }
    
    .tanggal {
        width: 247px;
        height: 48px;
        padding: 12px;
        border: 1px solid #ddd;
        border-radius: 5px;
        box-sizing: border-box;
        margin-bottom: 10px;
    }
    
    select {
        width: 247px;
        padding: 12px;
        height: 48px;
        border: 1px solid #ddd;
        border-radius: 5px;
        box-sizing: border-box;
        margin-bottom: 10px;
        cursor: pointer;
    }


    option {
        padding: 10px;
        background-color: #ffffff;
        color: #333;
    }

    option:hover {
        background-color: #ddd;
    }

    option:selected {
        font-weight: bold;
    }

    
    .Pencarian::placeholder,
    .tanggal::placeholder {
        color: #999;
    }
    
    img{
        width: 200px;
        height: 98.95px;
    }
    
    .tabel {
        width: 779px;
        height: 225px;
        border-radius: 12px;
        box-shadow: 0 9px 6px rgba(0, 0, 0, 0.1);
        margin: 0 auto; /* Mengatur margin horizontal secara otomatis untuk memusatkan */
        margin-top: 48px;
        padding: 10px;
    }
    
    .icon-tiket {
        width: 18px;
        height: 13px;
    }
    
    .container{
      text-align: center;
      margin-top: 50px;
    }
    
    .tiket__header-container{
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }
    
    .tiket__content{
      display: flex;
      gap: 1rem;
    }

    .tiket p{
      font-size: 16px;
      font-weight: 700;
      font: bold;
    }
    
    .tiket label{
      padding-left: 9px;
      font-size: 14px;
      line-height: 22px;
      color: #5E5E5E;
    }
    
    .tiket__content h6{
        font-size: 20px;
        padding-top: 20px;
        line-height: 28px;
        padding-bottom: 10px;
    }
    
    p.sudah__digunakan {
      padding-left: 8px;
      padding-right: 8px;
      padding-top: 4px;
      padding-bottom: 4px;
      background-color: #A9FFD6;
      color: #149B5A;
      border-radius: 5px;
      font-size: 12px; 
      font-weight: 700;
    }
    p.dapat__digunakan {
      padding-left: 8px;
      padding-right: 8px;
      padding-top: 4px;
      padding-bottom: 4px;
      background-color: #A9D1FF;
      color: #146A9B;
      border-radius: 5px;
      font-size: 12px; 
      font-weight: 700;
    }
    p.expired {
      padding-left: 8px;
      padding-right: 8px;
      padding-top: 4px;
      padding-bottom: 4px;
      background-color: #E4E4E4;
      color: #828180;
      border-radius: 5px;
      font-size: 12px; 
      font-weight: 700;
    }
    p.menunggu__pembayaran {
      padding-left: 8px;
      padding-right: 8px;
      padding-top: 4px;
      padding-bottom: 4px;
      background-color: #FFCDA9;
      color: #9B5514;
      border-radius: 5px;
      font-size: 12px; 
      font-weight: 700;
    }
    
    .tiket__content img{
      padding-left: 29px;
      margin-top: 13px;
      width: 215px;
      height: 98.95px;
    }

    .label label{
        padding-right: 100px;
    }
    
    label.labelharga{
        font-weight: 400;
        line-height: 22px;

    }

    .total {
    display: flex;
    align-items: center;
    justify-content: space-between; /* Mendorong elemen ke tepi kiri dan kanan */
    }

    .info {
        padding-top: 25px;
        display: flex;
        flex-direction: column; /* Menyusun paragraf total belanja dan harga secara vertikal */
        gap: 0.5rem; /* Jarak antara paragraf */
    }

    .actions {
        color: #333;
        padding-top: 45px;
        display: flex;
        gap: 0.5rem; /* Jarak antara paragraf */
    }
    .detail{
        color: #DAA520;
        text-decoration: none;
        cursor: pointer;
    }
    a.bantuan{
        color: black;
        text-decoration: none;
        size: 16;
        font-weight: 400;

    }

    p.total__belanja {
        font-size: 12px;
        line-height: 20px;
        font-weight: 400;
        padding-bottom: 1px;
    }

    p.hrga{
        font-size: 16px;
    }

    .detail-transaksi h1{
        width: 671px;
        height: 512px;
        margin-top: 318px;
        margin-bottom: 304px;
    }

    .popup {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5); 
        backdrop-filter: blur(2px);
        z-index: 999; 
    }

    .popup-content h1 {
        margin-top: 0;
    }

    .popup-content {
        background-color: #fefefe;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        width: 671px; 
        height: 512px;
        overflow-x: auto; 
        position: relative; 
        overflow-x: hidden;
    }

    .close {
        color: #aaa;
        position: absolute; 
        right: 10px; 
        
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
    }   

    .close:hover,
    .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }

    .isi{
      padding: 20px;
      margin-left: 20px;
    }

    .isi label{
      padding-left: 8px;
      padding-right: 8px;
      padding-top: 4px;
      padding-bottom: 4px;
      background-color: #A9FFD6;
      color: #149B5A;
      border-radius: 5px;
      font-size: 12px; 
      font-weight: 400;
    }

    .info__details{
      display: grid;
      grid-template-columns: 2 200px;
    }
    .header {
        width: 671px;
        height: 70px;
        box-shadow: 0  1px rgba(0, 0, 0, 0.2);
    }
    .header h1{
      padding: 20px;
      margin-left: 25px;
      font-weight: 700;
    }

    .Icon{
      width: 20px;
      height: 20px;
      margin-top: 25px;
      margin-right: 50px;
    }

    .info__details {
        display: flex;
        flex-direction: column;
    }

    .flex-container > div {
      display: flex;
      justify-content: space-between;
    }

    .flex-container h6{
      font-weight: 400;
      size: 20px;
    }
    </style>
    