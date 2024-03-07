<template>
 <nav>
    <navbar />
  </nav>
    <section class="sec-home" id="section1">
      <div class="container">
        <div class="text1">
          <p class="wlcText"> Warisan Leluhur Cirebon</p>
          <p class="wlcText2"> Bersama Lestarikan <br> Keraton Tertua Di Kota Cirebon</p>
          <a href="https://your-link-here.com" target="_blank" rel="noopener" class="btn1"> <img class="btn1" src="../assets/images/btn1.png"> </a>
        </div>
      </div>
    </section>
    
    <section class="sec-home" id="section2">
      <div class="container">
        <div class="text"  >
          <p class="aboutText">Tentang</p>
          <h2 class="ksc2Text">Keraton Kesepuhan Cirebon</h2>
          <p class="sej1Text">Pada awal pembangunannya, Keraton Kasepuhan dibangun oleh Pangeran Emas Zainul Arifin dengan maksud untuk memperluas bangunan pesanggerahan Keraton Pangkuwati.</p>
        </div>
      </div>
    </section>


    <section class="sec-home" id="section3">
      <div class="container">
        <div class="text">
          <a href="https://your-link-here.com" target="_blank" rel="noopener"> <img src="../assets/images/Frame.png"> </a>
        </div>
      </div>
    </section>


    <section class="sec-home" id="section4">
      <div class="container">
        <div class="text">
          <p class="sej2Text">Sejarah</p>
          <h2 class="ksc4Text">Keraton Kesepuhan Cirebon</h2>
          <div class="card">
            <div class="card1">
              <a href="https://your-link-here.com" target="_blank" rel="noopener">
                <img src="../assets/images/sej.png" alt="sejarah1">
              </a>
            </div>
            <div class="card2">
              <a href="https://your-link-here.com" target="_blank" rel="noopener">
                <img src="../assets/images/sej2.png" alt="sejarah2">
              </a>
            </div>
           <div class="card3">
            <!-- <div class="card-text">Silsilah Keraton Cirebon</div> -->
              <a href="https://your-link-here.com" target="_blank" rel="noopener"> 
                <img src="../assets/images/sej3.png" alt="sejarah3">
              </a>
            </div>
          </div>
          <a href="https://your-link-here.com" target="_blank" rel="noopener"> 
            <img class="pls" src="../assets/images/btninfo.png">
          </a>
        </div>
      </div>
    </section>

    <section id="section5">
      <div class="container">
        <div class="text">
          <p class="eventText">Event</p>
          <p class="ksc5Text">Keraton Kesepuhan Cirebon</p>
        </div>
      </div>
    </section>

    <section class="sec-home" id="section6">
      <div class="container">
        <div class="text">
          <p class="owText">Objek Wisata</p>
          <p class="ksc6Text">Keraton Kesepuhan Cirebon</p>
        </div>
        <div class="tiket" >
          <div class="text2">
          <p class="sej3Text">Mari mengenal budaya kasepuhan Cirebon. Bersama kita lestarikan dan apresiasikan beragam budaya dan
            tradisi Indonesia dengan mengunjungi Keraton Kasepuhan Cirebon.</p>
            <a > <img class="btn2" src="../assets/images/tiket.png"> </a></div>
        </div>
      </div>
    </section>

    <section class="sec-home" id="section7">
      <div class="container">
        <div class="text">
        </div>
      </div>
    </section>

    <section class="sec-home" id="section8">
      <div class="container">
        <div class="header">
          <img src="../assets/image/logo_keraton.png"> <p class="headerText">Keraton Kesepuhan Cirebon</p>
        </div>
        <div class="text">
        </div>
      </div>
    </section>

</template>
<script setup>
import navbar from "../components/NavBar.vue";
</script>

<style scoped>
 @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');
 @import url('https://fonts.googleapis.com/css2?family=Inria+Serif:wght@400;700&display=swap');


 @media screen and (max-width: 601px) {
  .desktop {
    display: block;
  }

  .handphone {
    display: none;
  }
 }
#section1 .container {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('../assets/images/bg1.png');
  background-size: cover;
}
#section2 .container {
  background-image: url('../assets/images/batik.png');
}
#section3 .container {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('../assets/images/keraton1.jpg');
  background-size: auto;
}
#section4 .container {
  background-image: url('../assets/images/batik.png');
}
#section5 .container {
  background-image: url('../assets/images/keraton2.png');
  filter: blur(3px); /* Efek blur untuk latar belakang */
}

#section5 .container > .text {
  position: relative;
  z-index: 1; 
  filter: blur(0);
}
#section5 .container > .text > * {
  filter: blur(0); /* Menghilangkan efek blur pada elemen-elemen di dalam .text */
}
#section6 .container {
  background-image: url('../assets/images/batik.png');
}
#section7 .container {
  background-image: url('../assets/images/batik.png');
}
#section8 .container {
  background-image: url('../assets/images/batik.png');
}
.container {
  background-size: cover;
  text-align: center;
  position: relative;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 120vh;  
  flex-direction: column;
  
  background-position: center;
  color: white;
  font-family: Raleway, sans-serif;
}
.wlcText {
  font-size: 24px; 
  color:#FFFD8C;
  position: absolute;
  left: 530px;
  top: 280px;
}
.wlcText2 {
  position: relative;
  font-size: 64px;
  top: 30px;
}
.btn1 {
  top: 250px;
  left: 320px;
  position: absolute;
}
.aboutText {
  text-align: center;
  font-size: 25px; 
  font-family: 'Inria Serif'; 
  color: #DAA520;
  top: -90px;
  position: relative;
}

.ksc2Text {
  text-align: center;
  top: -100px;
  position: relative;
  color: #212121;
  font-family: 'Inria Serif', Bold; 
  font-size: 40px;
  width: 485px;
  line-height: 40px;
}

.sej1Text {
  text-align: center;
  position: absolute;
  top: 350px;
  font-family: 'Raleway';
  width: 457px;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: #212121;



}
.sej2Text {
  text-align: center;
  font-size: 25px; 
  font-family: 'Inria Serif'; 
  color: #DAA520;
  margin-bottom:50px;

}
.ksc4Text {
  position: relative;
  color: #212121; 
  font-size: 40px;
  font-family: 'Inria Serif'; 
  width: 485px;
  top: -40px;
  line-height: 40px;
}
.eventText {
  font-family: 'Inria Serif'; 
  font-size: 25px; color:#FAE084;
  position: absolute;
}
.owText {
  font-size: 25px; 
  font-family: 'Inria Serif'; 
  color: #DAA520;
position: absolute;
width: 153px;
height: 30px;
left: 563px;
top: 60px;
line-height: 30px;
}
.ksc6Text {
position: absolute;
width: 485px;
height: 96px;
left: 398px;
top: 90px;
font-family: 'Inria Serif';
font-style: normal;
font-weight: 700;
font-size: 40px;
color: #212121;
}
.sej3Text {
position: absolute;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 28px;
color: #000000;
text-align: left;
}
 .btn2 {
  display: flex;
  flex-direction: row;
  align-items: left;
  padding: 5px;
  gap: 10px;
  position: absolute;
  top: 150px;
  left: -5px;
 }
.card1 {
  position: absolute;
  left: 57px;
  transition: transform 0.3s ease;
}
.card1:hover {
  transform: scale(1.1); 

}
.card1:hover img {
  filter: brightness(70%); 
}
.card1 img{
  border-radius: 50px;
  width: 100%;
  height: 100%;
  top: -5px;
  position: relative;
}

.card2 img {
  border-radius: 50px;
  width: 78%;
  height: 78%;
  position: relative;
  top: -30px;
}
.card2 {
  transition: transform 0.3s ease;
}
.card2 :hover {
  transform: scale(1.1); 
}
.card2:hover img {
  filter: brightness(70%); 
}

.card3 {
  position: absolute;
  right: 57px; 
  transition: transform 0.3s ease;
  display: inline-block;
}
.card3 img{
  position: relative;
  border-radius: 50px;
  width: 100%;
  height: 100%;
  top: -380px;
  display: block;
}
.card-text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  top: -200px;
  transform: translate(-50%, -50%);
  z-index: 1;
}
.card3 :hover {
  transform: scale(1.1); 
}
.card3:hover img {
  filter: brightness(70%); 
}
.pls {
  position: relative;
  top: -10px;
  
}
.pls:hover{
  filter: brightness(70%);
}
.tiket {
  background: linear-gradient(90deg, rgba(218, 165, 32, 0.5) 0%, rgba(18, 59, 50, 0.5) 100%);
  width: 100%;
  height: 45%;
  position: relative; 
  margin-top: 158px;
}

.text2 {
  position: absolute;
  font-family: 'Raleway';
  font-style: normal;
  width: 557px;
  height: 112px;
  left: 93px;
  top: 80px;
  justify-content: left;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: #000000;
}
.header img {
  position: absolute;
  width: 68px;
  height: 70.62px;
  left: 88px;
  top: 140px; 
}

.headerText {
  position: absolute;
  width: 139px;
  height: 84px;
  left: 165px;
  top: 140px; 
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: #212121;
}
/*----------------------------------------------------------------------------HP*/

@media screen and (max-width: 600px) {
  .desktop {
    display: none;
  }

  .handphone {
    display: block;
  }
  .highlight{
  text-decoration: none;
}

#section1 .container {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('../assets/images/bg1.png');
  background-size: cover;
}
#section2 .container {
  background-image: url('../assets/images/batik.png');
}
#section3 .container {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('../assets/images/keraton1.jpg');
  background-size: auto;
}
#section4 .container {
  background-image: url('../assets/images/batik.png');
}
#section5 .container {
  background-image: url('../assets/images/keraton2.png');
  filter: blur(3px); /* Efek blur untuk latar belakang */
}

#section5 .container > .text {
  position: relative;
  z-index: 1; 
  filter: blur(0);
}
#section5 .container > .text > * {
  filter: blur(0); /* Menghilangkan efek blur pada elemen-elemen di dalam .text */
}
#section6 .container {
  background-image: url('../assets/images/batik.png');
}
#section7 .container {
  background-image: url('../assets/images/batik.png');
}
#section8 .container {
  background-image: url('../assets/images/batik.png');
}
.container {
  background-size: cover;
  text-align: center;
  position: relative;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 120vh;  
  flex-direction: column;
  
  background-position: center;
  color: white;
  font-family: Raleway, sans-serif;
}
.wlcText {
  font-size: 24px; 
  color:#FFFD8C;
  position: absolute;
  left: 530px;
  top: 280px;
}
.wlcText2 {
  position: relative;
  font-size: 64px;
  top: 30px;
}
.btn1 {
  top: 250px;
  left: 320px;
  position: absolute;
}
.aboutText {
  text-align: center;
  font-size: 25px; 
  font-family: 'Inria Serif'; 
  color: #DAA520;
  top: -90px;
  position: relative;
}

.ksc2Text {
  text-align: center;
  top: -100px;
  position: relative;
  color: #212121;
  font-family: 'Inria Serif', Bold; 
  font-size: 40px;
  width: 485px;
  line-height: 40px;
}

.sej1Text {
  text-align: center;
  position: absolute;
  top: 350px;
  font-family: 'Raleway';
  width: 457px;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: #212121;



}
.sej2Text {
  text-align: center;
  font-size: 25px; 
  font-family: 'Inria Serif'; 
  color: #DAA520;
  margin-bottom:50px;

}
.ksc4Text {
  position: relative;
  color: #212121; 
  font-size: 40px;
  font-family: 'Inria Serif'; 
  width: 485px;
  top: -40px;
  line-height: 40px;
}
.eventText {
  font-family: 'Inria Serif'; 
  font-size: 25px; color:#FAE084;
  position: absolute;
}
.owText {
  font-size: 25px; 
  font-family: 'Inria Serif'; 
  color: #DAA520;
position: absolute;
width: 153px;
height: 30px;
left: 563px;
top: 60px;
line-height: 30px;
}
.ksc6Text {
position: absolute;
width: 485px;
height: 96px;
left: 398px;
top: 90px;
font-family: 'Inria Serif';
font-style: normal;
font-weight: 700;
font-size: 40px;
color: #212121;
}
.sej3Text {
position: absolute;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 28px;
color: #000000;
text-align: left;
}
 .btn2 {
  display: flex;
  flex-direction: row;
  align-items: left;
  padding: 5px;
  gap: 10px;
  position: absolute;
  top: 150px;
  left: -5px;
 }
.card1 {
  position: absolute;
  left: 57px;
  transition: transform 0.3s ease;
}
.card1:hover {
  transform: scale(1.1); 

}
.card1:hover img {
  filter: brightness(70%); 
}
.card1 img{
  border-radius: 50px;
  width: 100%;
  height: 100%;
  top: -5px;
  position: relative;
}

.card2 img {
  border-radius: 50px;
  width: 78%;
  height: 78%;
  position: relative;
  top: -30px;
}
.card2 {
  transition: transform 0.3s ease;
}
.card2 :hover {
  transform: scale(1.1); 
}
.card2:hover img {
  filter: brightness(70%); 
}

.card3 {
  position: absolute;
  right: 57px; 
  transition: transform 0.3s ease;
  display: inline-block;
}
.card3 img{
  position: relative;
  border-radius: 50px;
  width: 100%;
  height: 100%;
  top: -380px;
  display: block;
}
.card-text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  top: -200px;
  transform: translate(-50%, -50%);
  z-index: 1;
}
.card3 :hover {
  transform: scale(1.1); 
}
.card3:hover img {
  filter: brightness(70%); 
}
.pls {
  position: relative;
  top: -10px;
  
}
.pls:hover{
  filter: brightness(70%);
}
.tiket {
  background: linear-gradient(90deg, rgba(218, 165, 32, 0.5) 0%, rgba(18, 59, 50, 0.5) 100%);
  width: 100%;
  height: 45%;
  position: relative; 
  margin-top: 158px;
}

.text2 {
  position: absolute;
  font-family: 'Raleway';
  font-style: normal;
  width: 557px;
  height: 112px;
  left: 93px;
  top: 80px;
  justify-content: left;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: #000000;
}
.header img {
  position: absolute;
  width: 68px;
  height: 70.62px;
  left: 88px;
  top: 140px; 
}

.headerText {
  position: absolute;
  width: 139px;
  height: 84px;
  left: 165px;
  top: 140px; 
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: #212121;
}
}
</style>
