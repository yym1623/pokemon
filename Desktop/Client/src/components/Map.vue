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


background.anchor.set(0.5);


// await Assets.load([
//       "../../public/character.json",
//       "../../public/character.png"
//   ]);
  


/**
 * If the preview is landscape, fill the width of the screen
 * and apply horizontal scale to the vertical scale for a uniform fit.
 */
if (app.screen.width > app.screen.height)
{
    background.width = app.screen.width * 1.2;
    background.scale.y = background.scale.x;
}
else
{
    /**
     * If the preview is square or portrait, then fill the height of the screen instead
     * and apply the scaling to the horizontal scale accordingly.
     */
    background.height = app.screen.height * 1.2;
    background.scale.x = background.scale.y;
}

// // Position the background sprite in the center of the stage.
background.x = app.screen.width / 2;
background.y = app.screen.height / 2;

// 애니메이션 2d 사진 이동 - https://chowonpapa.tistory.com/entry/PIXIAnimatedSprite-1-%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98-%EC%9E%AC%EC%83%9D
// triker - 간단한 움직임
// 복잡한 움직임 (ex 달리는 이미지 - 여러 이미지를 순차적으로 가져와 붙이기)
// 하지만 캐릭터가 달리거나 뛰는 것은 이런 방법으로 구현이 어렵다.
// 그래서 실제 애니메이션 제작 방식과 동일한 방법으로 구현한다.
// 프레임별 이미지를 하나씩 제작하고 순차적으로 렌더링하는 것
// 이런경우 triker가 아닌 PIXI.Js 에서는 AnimatedSprite() 메서드를 사용하여 쉽게 구현할 수 있다
// 여러이미지 및 하나의 이미지에 여러동작 넣어서 잘라서 쓰기 (이미지는 여러 장을 로드하기 보다는 하나의 이미지만 로드하는 것이 효율적 - 둘 다 가능하지만 하나의 이미지로 하는게 좋다)
// 그래서 여러 이미지를 하나의 이미지로 합치는데
// 이를 스프라이트 시트 또는 텍스처 아틀라스라고 한다

// 하나의 이미지에 여러동작이있는건 스프라이트 시트 -> 이걸 이미지에서 json변환툴을쓰면 해당 json에 해당 사진의 동작들이 다 담겨? 그거가지고 붙여서 사용한다?



// 스프라이시트 애니메이션 구현
// let loader = Loader.shared;
        

</script>


<template>
  <div>

  </div>
</template>


<style lang="scss" scoped>

</style>
