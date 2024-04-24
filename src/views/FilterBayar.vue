<template>
  <nav>
    <navbar />
  </nav>
  <div class="header">
    <div class="text1">
      <ul>
        <li><a>Booking / Tiket Event</a></li>
      </ul>
      <div class="kakaje">
        <ul>
          <li>
            <a class="text2"
              ><strong>Tiket Event Upacara Adat Tradisi</strong></a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="dropdown">
    <button @click="toggleDropdown" class="dropdown-toggle">
      {{ dropdownTitle }} <img src="../assets/svg/trigger.svg" />
    </button>
    <div v-if="isOpen" class="dropdown-menu">
      <label
        v-for="(option, index) in options"
        :key="index"
        class="checkbox-container"
      >
        <input
          type="checkbox"
          :value="option.value"
          v-model="selectedOptions"
        />
        {{ option.label }}
      </label>
    </div>
    <div class="kami">
      <button @click="toggleDropdown2" class="dropdown-toggle2">
        {{ dropdownTitle2 }} <img src="../assets/svg/trigger.svg" />
      </button>
      <div v-if="isOpen2" class="dropdown-menu2">
        <label
          v-for="(option2, index2) in options2"
          :key="index2"
          class="checkbox-container"
        >
          <input
            type="checkbox"
            :value="option2.value"
            v-model="selectedOptions2"
          />
          {{ option2.label }}
        </label>
      </div>
    </div>
    <div class="container">
      <div class="ni" v-for="(item, index) in filteredItems" :key="index">
        <img class="image" :src="item.image" alt="Gambar" />
        <div class="buttonaji">
          <button class="btn-small">{{ item.buttonText1 }}</button>
          <button class="btn-small">{{ item.buttonText2 }}</button>
        </div>
        <h2 class="judul-sedang">{{ item.titleMedium }}</h2>
        <h1 class="judul-besar">{{ item.titleBig }}</h1>
        <div class="tengah">
          <h3 class="judul-kecil">{{ item.price }}</h3>
          <button class="tambah">
            Tambah <img class="photo" src="../assets/Frame.svg" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import navbar from "../components/NavBar.vue";
</script>

<script>
import { ref } from "vue";

export default {
  components: {
    navbar,
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    dropdownTitle: {
      type: String,
      default: "Pelaksanaan",
    },
    dropdownTitle2: {
      type: String,
      default: "Jenis Event",
    },
  },
  setup() {
    const isOpen = ref(false);
    const isOpen2 = ref(false);
    const selectedOptions = ref([]);
    const selectedOptions2 = ref([]);

    const options = [
      { label: "Hari", value: "Perhari" },
      { label: "Minggu", value: "Perminggu" },
      { label: "Bulan", value: "Perbulan" },
    ];

    const options2 = [
      { label: "Gratis", value: "Gratis" },
      { label: "Berbayar", value: "Berbayar" },
    ];

    const items = [
      {
        image: "../assets/images/isra.png",
        buttonText1: "Perbulan",
        buttonText2: "Berbayar",
        titleMedium: "Peringatan isra mi'raj di langgar alit",
        titleBig:
          "Keluarga Keraton Kasepuhan mengadakan acara Isra Miraj di Langgar Alit yang rutin digunakan untuk peringatan hari besar Islam",
        price: "Rp. 25.000",
      },
      {
        image: "../assets/images/MaskGroup.png",
        buttonText1: "Perhari",
        buttonText2: "Berbayar",
        titleMedium: "Perayaan Maulid Nabi di Masjid Agung",
        titleBig:
          "Komunitas Muslim mengadakan acara perayaan Maulid Nabi di Masjid Agung setempat",
        price: "Rp.40.000",
      },
      {
        image: "../assets/images/bedug.png",
        buttonText1: "Perminggu",
        buttonText2: "Berbayar",
        titleMedium: "Tadarus di langgar alit",
        titleBig:
          "Kegiatan tadarus Alquran ini biasanya dibimbing oleh kaum masjid dan dilakukan dua kali khatam selama bulan Ramadan",
        price: "Rp.40.000",
      },
    ];

    const filteredItems = ref(items);

    const toggleDropdown = () => {
      isOpen.value = !isOpen.value;
    };

    const toggleDropdown2 = () => {
      isOpen2.value = !isOpen2.value;
    };

    return {
      isOpen,
      isOpen2,
      options,
      options2,
      selectedOptions,
      selectedOptions2,
      items,
      filteredItems,
      toggleDropdown,
      toggleDropdown2,
    };
  },
};
</script>

<style scoped>
@import "../assets/css/FilterBayar.css";
</style>
