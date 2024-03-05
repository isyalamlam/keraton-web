<!-- dropdown.vue -->
<template>
<<<<<<< HEAD
    <div class="menu-item" @click="isOpen = !isOpen">
      <a href="#">
        {{ title }}
      </a>
      <svg viewBox="0 0 1030 638" width="10">
        <path d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z" fill="#FFF"></path>
      </svg>
      <transition name="fade" appear>
        <div class="sub-menu" v-if="isOpen">
          <div v-for="(item, i) in items" :key="i" class="menu-item">
            <a :href="item.link">{{ item.title }}</a>
          </div>
        </div>
      </transition>
=======
    <div class="dropdown">
      <button @click="toggleDropdown" class="dropdown-button">
        {{ selectedOption ? selectedOption.name : '▼' }}
      </button>
      <ul v-if="isOpen" class="dropdown-menu">
        <li v-for="option in options" :key="option.value">
          <a @click="selectOption(option)">{{ option.name }}</a>
        </li>
      </ul>
>>>>>>> 033b0a5a55fcc5c7d7a3de67eb3840c78649fade
    </div>
  </template>
  
  <script>
  export default {
<<<<<<< HEAD
    name: 'dropdown',
    props: ['title', 'items'],
    data () {
      return {
        isOpen: false
=======
    props: {
      selectedOption: {
        type: Object,
        default: null
      },
      options: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        isOpen: false,
      }
    },
    methods: {
      toggleDropdown() {
        this.isOpen = !this.isOpen;
      },
      selectOption(option) {
        this.$emit('update:selectedOption', option);
        this.isOpen = false;
>>>>>>> 033b0a5a55fcc5c7d7a3de67eb3840c78649fade
      }
    }
  }
  </script>
<<<<<<< HEAD
  
  <style>
  nav .menu-item svg {
    width: 10px;
    margin-left: 10px;
  }
  
  nav .menu-item .sub-menu {
    position: absolute;
    background-color: #222;
    top: calc(100% + 18px);
    left: 50%;
    transform: translateX(-50%);
    width: max-content;
    border-radius: 0px 0px 16px 16px;
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: all .5s ease-out;
  }
  
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  </style>
=======
  <style>
  .dropdown{
    background-color: white;
  }
  .dropdown-button{
    border: 0px;
    background-color: white;
    color: white;
    transition: color;

  }
  .dropdown-button:hover {
    color: black;
  }
  .dropdown-menu{
  gap: 9px;
  position: absolute;
  padding: 11px 40px 11px 14px;
  width: auto;
  height: auto;
  top: 50px;
  background: #FFFFFF;
  border: 1px solid #123B32;
  border-radius: 10px;
  }
  ul li{
    list-style-type: none;
  }
</style>
>>>>>>> 033b0a5a55fcc5c7d7a3de67eb3840c78649fade
