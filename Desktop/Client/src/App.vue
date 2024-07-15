<script setup lang="ts">

const msg = ref<string>('msg')

const ready = ref<Boolean>(false);

// components
import Map from '@/components/Map.vue'
import Message from '@/components/Message.vue'
// import Battle from '@/components/Battle.vue'
</script>


<template>
  
  <div class="container">
    <div class="main">
      <Map class="map-position" />
      <Message v-if="ready" class="msg-position" :msg="msg" />
    </div>
    <!-- <Battle /> -->

  </div>
   
</template>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
  canvas {
    display: block;
  }

  .container {
    width: 100vw;
    margin: auto;
    background: black;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .main {
      position: relative;
      width: 35rem;
      height: 30rem;

      display: flex;
      justify-content: center;
      .map-position {
        position: absolute;
        top: 0;
      }
      .msg-position {
        position: absolute;
        bottom: 4rem;
      }
    }
  }
}

</style>