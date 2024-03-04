<template>
    <body>
      
    <header>
  
  
      <div class="image-container">
        <img alt="Area Keraton Image" class="image" src="../assets/images/image 19.png" />
        <p class="image-text">MUSEUM PUSAKA</p>
        <p class="text-bottom1">Museum Pusaka ini terletak di dalam kompleks Keraton Kasepuhan, Cirebon, Jawa Barat.</p>
        <p class="text-bottom2">Didirikan pada tahun 1981 oleh Sultan Sepuh XIV, Pangeran Raja Mochamad Jayadiningrat.</p>
        <p class="text-bottom3">Museum ini memiliki luas sekitar 1.200 meter persegi dan terdiri dari dua lantai.</p>
        <a class="arrow-down" @click="scrollToContent"><img src="../assets/images/Frame.svg"></a>
      </div>
  
      <div class="Destinasi">
       <p> Destinasi wisata yang <span class="bold">wajib</span> dikunjungi</p> 
      </div>
      <p class="bawah-destinasi">Menawarkan berbagai hal menarik untuk dilihat dan dipelajari, mulai dari sejarah, arsitektur, hingga budaya.</p>
  
    <!-- <div class="image-slider">
    <img alt="" class="imageSlider" src="./assets/image 22.png" />
    <img alt="" class="imageSlider" src="./assets/image 23.png" />
    <img alt="" class="imageSlider" src="./assets/image 24.png" />
    <img alt="" class="imageSlider" src="./assets/image 25.png" />
    </div> -->
    
  
  <div class="Fasilitas">
    <p>Fasilitas</p>
    <p class="Fasilitas-Text">Fasilitas di Keraton Kasepuhan Cirebon cukup lengkap untuk menunjang kegiatan wisata dan budaya.</p>
  </div>

  <div class="Fasilitas-Images">
    <div class="card">
      <p class="card-text">Area Parkir</p>
      </div>
      <div class="card2">
        <p class="card-text2">Tempat Ibadah</p>
    </div>
    <div class="Fasilitas-Images2">
    <div class="card3">
      <p class="card-text3">Toilet</p>
      </div>
      <div class="card4">
        <p class="card-text4">Tempat Penjualan Souvenir</p>
    </div>
  </div>
</div>

<div class="Kunjungan">
    <p>Kunjungan</p>
    <p class="Kunjungan-Text">Kunjungi Keraton Kasepuhan Cirebon dengan berbagai pilihan paket wisata yang menarik.</p>
    <button class="button-Kunjungan">Dapatkan Tiket Sekarang!</button>
  </div>

  <div class="Paket">
    <img src="../assets/images/Frame85.png">
  
  </div>
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
             <img src="../assets/images/1 931.png" alt="" class="foto2">
             <img src="../assets/images/telkom.png" alt="" class="foto3">
             <img src="../assets/images/bjb.png" alt="" class="foto4">
             
          </div>
       </div>
       </div>
      </div>

  
  </header>
  </body>
  </template>
  
  <script setup>
    const scrollToContent = () => {
      document.querySelector('.Destinasi').scrollIntoView({ 
        behavior: 'smooth' 
      });    };
  
      const scrollToContent2 = () => {
      document.querySelector('.Tourist').scrollIntoView({ 
        behavior: 'smooth' 
    });}
  </script>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');
  </style>
  
  <style scoped>
   body {
   width: 1280px;
   height: 4948px;
    }
  *{
      margin: 0;
      top: 0;
      left: 0;
      right: 0;
      padding: 0;
  }
  .Paket{
    position: absolute;
    width: 1,085px;
height: 207px;
top: 7661px;
left: 119px;
padding: 0px, 0px, 10px, 0px;
border: 0px, 0px, 1px, 0px;
gap: 109px;

  }
    .image-container {
      position: absolute;
      width: 1280px;
      left: 10px;
      height: auto; 
    }
  
    .image {
      display: flex;
      width: 1300px;
      height: 859px;
      object-fit: cover; 
      filter: brightness(60%);
    }

 

  
  .Fasilitas{
      position: absolute;
      width: 542px;
      height: 72px;
      top: 5500px;
      left: 120px;
      margin-left: -120px;
      font-family: Raleway;
      font-size: 64px;
      font-weight: 400;
      line-height: 400px;
      letter-spacing: 0em;
      text-align: left;
      color: #000000;
  
  
  }
  .Fasilitas-Text{
    width: 542px;
      height: 72px;
      margin-top: -220px;
        margin-left: 700px;
      font-family: Raleway;
      font-size: 20px;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 0em;
      text-align: right;
  }
  .Fasilitas-Images{
    gap: 20px;
}
.Fasilitas-Images2{
    gap: 20px;

}
  
  
  .card{
    width: 656px;
  height: 649px;
  top: 5773px;
  left: 55px;
  margin-top: 4680px;
  border-radius: 30px;
  filter: opacity(70%);
  background-size: cover;
  background-image: url(../assets/images/Rectangle63.png);
  

  }

  .card2{
    width: 656px;
  height: 649px;
  top: 4153px;
  left: 685px;
  margin-top: 1600px;
  border-radius: 30px;
  filter: opacity(70%);
  background-size: cover;
  background-image: url(../assets/images/Rectangle58.png);
  position: absolute;
  }
  .card3{
    width: 656px;
  height: 649px;
  top: 4850px;
  left: 0;
  margin-top: 1600px;
  border-radius: 30px;
  filter: opacity(70%);
  background-size: cover;
  position: absolute;
  }
  .card3{
    background-image: url(../assets/images/Rectangle61.png);

  }

  .card4{
    width: 656px;
  height: 649px;
  top: 4850px;
  left: 685px;
  margin-top: 1600px;
  border-radius: 30px;
  filter: opacity(70%);
  background-image: url(../assets/images/Rectangle62.png);
  background-size: cover;
  position: absolute;
  }
  .card-text{
    width: 210px;
    height: 48px;
    top: 662px;
    left: 242px;
    font-family: Raleway;
    font-size: 40px;
    font-weight: 700;
    line-height: 1000px;
    margin-left: 220px;
    letter-spacing: 0em;
    text-align: center;
    color: #ffffff;
    }
    .card-text2{
    width: 1000px;
    height: 48px;
    top: 662px;
    left: 242px;
    font-family: Raleway;
    font-size: 40px;
    font-weight: 700;
    line-height: 1000px;
    margin-left: -170px;
    letter-spacing: 0em;
    text-align: center;
    color: #ffffff;
    }
    .card-text3{
    width: 210px;
    height: 48px;
    top: 662px;
    left: 242px;
    font-family: Raleway;
    font-size: 40px;
    font-weight: 700;
    line-height: 1000px;
    margin-left: 220px;
    letter-spacing: 0em;
    text-align: center;
    color: #ffffff;
    }
    .card-text4{
    width: 1000px;
    height: 48px;
    top: 662px;
    left: 242px;
    font-family: Raleway;
    font-size: 40px;
    font-weight: 700;
    line-height: 1000px;
    margin-left: -170px;
    letter-spacing: 0em;
    text-align: center;
    color: #ffffff;
    }

    .Kunjungan{
      position: absolute;
      width: 542px;
      height: 72px;
      top: 7339px;
      left: 100px;
      margin-left: -100px;
      font-family: Raleway;
      font-size: 64px;
      font-weight: 400;
      line-height: 400px;
      letter-spacing: 0em;
      text-align: left;
      color: #000000;
  
  
  }
  .Kunjungan-Text{
    width: 542px;
      height: 72px;
      margin-top: -220px;
        margin-left: 700px;
      font-family: Raleway;
      font-size: 20px;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 0em;
      text-align: right;
  }
  
    .image-text {
      font-family: Raleway;
      position: absolute;
      width: 625px;
      height: 72px;
      top: 390px;
      left: 327px;
      color: white;
      font-size: 64px;
      font-weight: 700;
      line-height: 72px;
      letter-spacing: 0em;
      text-align: center;
  
    }
    .text-bottom1 {
      position: absolute;
      width: 362px;
      height: 48px;
      top: 690px;
      left: 90px;
      font-size: 16px;
      line-height: 24px;
      color: white;
    }
    .text-bottom2 {
      position: absolute;
      width: 360px;
      height: 48px;
      top: 690px;
      left: 489px;
      font-size: 16px;
      line-height: 24px;
      color: white;
  
    }
    .text-bottom3 {
      position: absolute;
      width: 362px;
      height: 48px;
      top: 690px;
      left: 849px;
      font-size: 16px;
      line-height: 24px;
      color: white;
    }
    .arrow-down {
      position: absolute;
      width: 32px;
      height: 32px;
      top: 801px;
      left: 624px;
      cursor: pointer; 
    }
    
    
    .Destinasi {
      font-family: Raleway;
      margin-top: 900px; 
      width: 1104px;
      height: 64px;
      top: 922px;
      left: 88px;
      margin-left: 80px;
      color: #000000;
      font-size: 56px;
      font-weight: 400;
      line-height: 64px;
      text-align: center;
    }
    
    .bold {
      font-family: Raleway;
      font-weight: bold;
      font-size: 56px;
      font-weight: 700;
      line-height: 64px;
      text-align: center;
    }
  .bawah-destinasi{
      width: 886px;
      height: 68px;
      top: 1014px;
      left: 197px;
      margin-left: 200px;
      margin-top: 40px;
      font-family: Raleway;
      font-size: 24px;
      font-weight: 400;
      line-height: 30px;
      text-align: center;
  }
  
  

  .foto1 {
   width:68px;
   height: 71px;
  }
  .foto2 {
   width:69px;
   height: 74px;
  }
  .foto3 {
   width:53px;
   height: 71px;
  }
  .foto4 {
   width : 100px;
   height: 49px;
  }
  .footer {
   width:1280px;
   height: 650px;
   margin-top: 2300px;
   position: relative;
 
   
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
   color: #212121;
   
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
    width:1080px;
    height: 142px;
    margin-left: 88px;
    display: flex;
  }
  .inlower {
   padding-top:600px;
   margin-left: 80px;
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

  .button {
   width:431px;
   height: 58px;
   border-radius: 10px;
   background-color: #123B32;
   color: #FFFFFF;
   text-align: left;
   padding-left: 22px;
   font-size: 20px;
   font-weight: 800;
   margin-top: 22px;
   line-height: 28px;
   font-family: Raleway;
  }
  .button-Kunjungan {
   width:431px;
   height: 58px;
   border-radius: 10px;
   background-color: #123B32;
   color: #FFFFFF;
   text-align: left;
   padding-left: 22px;
   font-size: 20px;
   font-weight: 800;
   margin-top: 250px;
   margin-left: 800px;
   line-height: 28px;
   font-family: Raleway;
   position: absolute;
  }
  
  </style>
  