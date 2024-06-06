<script setup lang="ts">
import { ref } from 'vue'
import { Application } from "vue3-pixi";


function onClick() {
  console.log('sprite clicked!');
}
const mapPath = '../../public/pokemon_map.png'
const width = ref(window.innerWidth)
const height = ref(window.innerHeight)
</script>
<template>
  <Application :width="width" :height="height">
    <container>
      <sprite :texture="mapPath"  @click="onClick" />
    </container>
  </Application>
</template>


<style scoped>

</style>