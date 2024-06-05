<script setup lang="ts">
import { Application, Assets, Sprite } from 'pixi.js';


const app = new Application();
// app.canvas (canvas -> 위쪽 init부분에 생성해야 canvas 생성됨 기준이 init인지 몬진 검색)
await app.init({ resizeTo: window });
document.body.appendChild(app.canvas);

const assets = [
  // assets 접근불가 (빌드하면 가능?), public 접근가능 - 검색
  { alias: 'background', src: '../../public/pokemon_map.png' },
];
// alias 저장 { alias : '', src : '' }
await Assets.load(assets);




// sprite.from - alias로 해당 주소 사용
const background = Sprite.from('background');
// stage - alias로 해당 사용한 주소 app에 추가
app.stage.addChild(background);

// 화면 포인트 (정중앙 - 0.5)
background.anchor.set(0.5);
// 화면 너비
background.width = app.screen.width * 1.2;
background.scale.y = background.scale.x;
// 화면 위치
background.x = app.screen.width / 2;
background.y = app.screen.height / 2;


        

</script>


<template>
  <div>

  </div>
</template>


<style lang="scss" scoped>

</style>
