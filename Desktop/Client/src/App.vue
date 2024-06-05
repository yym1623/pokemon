<script setup lang="ts">

// import Button from 'primevue/button';

// components
import Map from './components/Map.vue'

// canvas modules
import Player from './modules/player'
</script>


<template>
  <div>
    <!-- <Map class="map" /> -->
    <Map class="map" />
    <Suspense>
      <Player class="player" />
    </Suspense>
  </div>
</template>

<style lang="scss">
body {

  padding: 0;
  margin: 0;
  .map {
    height: 100vh;
    position: relative;
  }
  .player {
    position: absolute;
  }
}
canvas {
  display: block;

}
</style>