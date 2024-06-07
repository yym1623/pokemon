<script setup lang="ts">
import type { Spritesheet, Texture } from 'pixi.js'
import { reactive, ref } from 'vue'
import { Loader } from 'vue3-pixi'

const props = defineProps<{
  mapWidth: number,
  mapHeight: number
}>()

const play = ref(true);

const playerX = ref(905);
const playerY = ref(430);

let playerStop = ref();

const playerWidth = props.mapWidth / 13;
const playerHeight = props.mapHeight / 10;


const resource = reactive({
  spritesheet: undefined as undefined | Spritesheet,
  animation: undefined as undefined | Texture[],
})

function onResolved(sheet: Spritesheet) {
  resource.spritesheet = sheet
  resource.animation = sheet.animations['bottomStop']
}

document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', onKeyUp);

function onKeyDown(key : KeyboardEvent) {
    // W - 87
    // Up arrow - 87
    if (key.keyCode === 87 || key.keyCode === 38) {
      // 위로 이동
      if (playerY.value + 50 > playerHeight) {
        // map의 상단끝이 아닐 경우
        playerY.value-= playerHeight;
        resource.animation = resource.spritesheet!.animations['top']
        playerStop.value = 'topStop'
        

        
      }
    }
    // S - 83
    // Down arrow - 40
    if (key.keyCode === 83 || key.keyCode === 40) {
      // 아래로 이동
      if (playerY.value + 100 < props.mapHeight - playerHeight) {
          // map의 하단끝이 아닐 경우
          playerY.value += playerHeight;
          resource.animation = resource.spritesheet!.animations['bottom']
          playerStop.value = 'bottomStop'
      }
    }
    // A - 65
    // Left arrow - 37
    if (key.keyCode === 65 || key.keyCode === 37) {
      // 좌측 이동
      if (playerX.value + 50 > playerWidth) {
          // map의 좌족끝이 아닐 경우
          playerX.value -= playerWidth;
          resource.animation = resource.spritesheet!.animations['left']
          playerStop.value = 'leftStop'
      }
    }
    // D - 68
    // Right arrow - 39
    if (key.keyCode === 68 || key.keyCode === 39) {
      // 우측 이동
      if (playerX.value < props.mapWidth - playerWidth) {
          // map의 우측끝이 아닐 경우
          playerX.value += playerWidth;
          resource.animation = resource.spritesheet!.animations['right']
          playerStop.value = 'rightStop'
        }
      }
    play.value = true;
  }

  function onKeyUp() {
    resource.animation = resource.spritesheet!.animations[playerStop.value]
    play.value = false;
  }
</script>

<template>
  <Loader
    :resources="{ spritesheet: '../../public/player.json' }"
    @resolved="onResolved($event.spritesheet)"
  >
    <animated-sprite
      :textures="resource.animation"
      :animation-speed="0.1"
      :x="playerX"
      :y="playerY"
      :scale="3"
      :playing="play"
    />
  </Loader>
</template>


<style lang="scss" scoped>

</style>