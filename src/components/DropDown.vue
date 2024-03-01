<!-- dropdown.vue -->
<template>
    <div class="dropdown">
      <button @click="toggleDropdown" class="dropdown-button">
        {{ selectedOption ? selectedOption.name : '▼' }}
      </button>
      <ul v-if="isOpen" class="dropdown-menu">
        <li v-for="option in options" :key="option.value">
          <a @click="selectOption(option)">{{ option.name }}</a>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
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
      }
    }
  }
  </script>
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