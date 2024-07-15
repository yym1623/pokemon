<script setup lang="ts">
import { ref } from 'vue'
import { Application } from "vue3-pixi";

// components
import Player from './Player.vue'

const mapPath = 'public/map.png'
// const mapWidth = ref(window.innerWidth)
// const mapHeight = ref(window.innerHeight)

const mapWidth = ref(560)
const mapHeight = ref(480)

const mapX = ref(0.1);
const mapY = ref(0.1);



const mapPositionChange = (x : number, y : number) => {
  mapX.value = x
  mapY.value = y
};


function onClick() {
  console.log('sprite clicked!');
}
</script>
<template>
  <Application :width="mapWidth" :height="mapHeight">
    <container>
      <!-- <sprite :texture="mapPath" :anchor="[0.58, 0.28]"   @click="onClick"> -->
      <sprite :texture="mapPath" :anchorX="mapX" :anchorY="mapY" @click="onClick">
        <Player @mapPositionChange="mapPositionChange" :playerMapX="mapX" :playerMapY="mapY" :mapWidth="mapWidth" :mapHeight="mapHeight" />
      </sprite>
    </container>
  </Application>
</template>


<style scoped>

</style>