<script setup lang="ts">

// import Button from 'primevue/button';

// components
import Map from './components/Map.vue'
</script>


<template>
  <div>
    <Map class="map" />
  </div>
</template>


<!-- app.vue - scoped하면 컴포넌트 style 안먹음 -->
<style lang="scss">
body {
  padding: 0;
  margin: 0;
  .map {
    height: 100vh;
  }
}
</style>