<script setup lang="ts">
import type { Spritesheet, Texture } from 'pixi.js'
import { reactive, ref } from 'vue'
import { Loader } from 'vue3-pixi'

const props = defineProps<{
  mapWidth: number,
  mapHeight: number,
  playerMapX: number,
  playerMapY: number
}>()

const emit = defineEmits(["mapPositionChange"]);


const play = ref(true);

let playerMapX = ref(props.playerMapX)
let playerMapY = ref(props.playerMapY)

const playerX = ref(905);
const playerY = ref(430);

let playerStop = ref();

// tt

const playerWidth = props.mapWidth / 26;
const playerHeight = props.mapHeight / 20;


const resource = reactive({
  spritesheet: undefined as undefined | Spritesheet,
  animation: undefined as undefined | Texture[],
})

function onResolved(sheet : Spritesheet) {
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
    if (playerY.value - 280 > playerHeight) {
      // map의 상단끝이 아닐 경우
      playerY.value-= playerHeight;
      resource.animation = resource.spritesheet!.animations['top']
      playerStop.value = 'topStop'
      playerMapY.value -= 0.03;
      emit("mapPositionChange", playerMapX.value, playerMapY.value);
    }
  }
  // S - 83
  // Down arrow - 40
  if (key.keyCode === 83 || key.keyCode === 40) {
    // 아래로 이동
    if (playerY.value + 250 < props.mapHeight - playerHeight) {
        // map의 하단끝이 아닐 경우
        playerY.value += playerHeight;
        resource.animation = resource.spritesheet!.animations['bottom']
        playerStop.value = 'bottomStop'
        // playerMapY.value += 0.03;
        // emit("mapPositionChange", playerMapX.value, playerMapY.value);
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
        playerMapX.value -= 0.03;
        emit("mapPositionChange", playerMapX.value, playerMapY.value);
    }
  }
  // D - 68
  // Right arrow - 39
  if (key.keyCode === 68 || key.keyCode === 39) {
    // 우측 이동
    if (playerX.value + 500 < props.mapWidth - playerWidth) {
        // map의 우측끝이 아닐 경우
        playerX.value += playerWidth;
        resource.animation = resource.spritesheet!.animations['right']
        playerStop.value = 'rightStop'
        playerMapX.value += 0.03;
        emit("mapPositionChange", playerMapX.value, playerMapY.value)
      }
    }
    play.value = true;
  }
  
  
  console.log(resource.animation)

  function onKeyUp() {
    resource.animation = resource.spritesheet!.animations[playerStop.value]
    play.value = false;
  }


  // 메모
  // type error -> "as" 타입을 다시 지정해줘야한다

  // 로컬에서 npm build해서 index.html error cors 문제는 
  // 웹에서 로컬 파일에 접근하지 못하도록 하기 위해 이런 식의 방법을 사용한다
  // 해당 방법이란 - 실제는 경로/js/modules이 -> null/js/module로 요청된다 null이되버린다 로컬에선
  // 서버에 올려 프로토콜 호스트 포트를 같게 만들면 CORS 에러가 해결되었던 것이죠

  // 설정이 필요한게 아닌 로컬에선 오류나게끔 보안인지 뭔지 브라우저가 인지 설정해놓은거떄매 오류발생
  // <script type=module> 은 로컬에서 실행시 자바스크립트 모듈 보안 요구로 인해 CORS 에러가 발생한다
  // 로컬시스템에서 로컬 파일 리소스를 요청할 때는 origin(출처)이 null로 넘어가기 때문에 CORS에러가 발생한다.
</script>

<template>
  <Loader
    :resources="{ spritesheet: '../../public/player.json' }"
    @resolved="onResolved($event.spritesheet)"
  >
    <animated-sprite
      :textures="resource.animation as []"
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