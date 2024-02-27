<template>
    <nav>
      <div class="menu-item"><a href="#">Home</a></div>
      <div class="menu-item"><a href="#">About</a></div>
      <Dropdown title="Services" :items="services" />
      <div class="menu-item"><a href="#">Contact</a></div>
    </nav>
  </template>
  
  <script>
  import Dropdown from './Dropdown';
  
  export default {
    
    components: {
      Dropdown
    },
    data () {
      return {
        services: [
          {
            title: 'Web',
            link: '#'
          },
          {
            title: 'Design',
            link:'#'
          },
          {
            title: 'Videos',
            link: '#'
          }
        ]
      }
    }
  }
  </script>