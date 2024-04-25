<template>
  <div class="navbar">
    <div class="navbar-left">
      <img
        alt="icon-aplikasi"
        src="../assets/images/logo_keraton.png"
        class="app-icon"
      />
      <span class="app-name">Keraton Kesepuhan Cirebon</span>
    </div>
    <div class="navbar-right">
      <nav>
        <ul>
          <li><a href="beranda">Beranda</a></li>
          <li><a href="sejarah">Sejarah</a></li>
          <li><a href="booking">Booking</a></li>
          <li><a href="areakraton">Objek Wisata</a></li>
          <button
            @click="getTickets"
            style="border-radius: 5px; background-color: #123b32; color: white"
          >
            Dapatkan Tiket
          </button>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getTickets() {
      this.$router.push({ name: "signin" });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  font-family: "Raleway", sans-serif;
  background-color: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-left {
  display: flex;
  align-items: center;
}

.app-icon {
  width: 68px;
  height: 70.62px;
}

.app-name {
  margin-left: 10px; /* Tambahkan margin antara ikon dan nama aplikasi */
  font-size: 20px;
  width: 139px;
  color: #fff;
  height: 84px;
  left: 166px;
  top: 10px;
}

/* Navigasi */
.navbar-right {
  flex-grow: 1; /* Navigasi akan menempati sisa ruang yang tersedia */
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end; /* Navigasi akan ditata dari kanan */
}

nav ul li {
  margin-right: 20px; /* Sesuaikan margin antar item */
}

nav ul li:last-child {
  margin-right: 0; /* Hapus margin kanan pada item terakhir */
}

nav ul li a,
nav ul li button {
  color: #fff;
  text-decoration: none;
  cursor: pointer;
}

/* Media queries untuk responsif */
@media screen and (max-width: 768px) {
  .navbar {
    flex-direction: column; /* Ubah menjadi tata letak kolom */
    padding: 10px; /* Sesuaikan padding agar tidak terlalu besar */
  }

  .navbar-left {
    margin-bottom: 10px; /* Tambahkan margin bawah agar terpisah dari navbar-right */
  }

  .navbar-right {
    width: 100%; /* Navigasi akan mengisi lebar penuh */
  }

  nav ul {
    justify-content: center; /* Tengahkan item navigasi */
  }
}
</style>
