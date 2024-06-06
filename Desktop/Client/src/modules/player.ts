import { Application, Assets, AnimatedSprite } from 'pixi.js';

export default async function player() {

  const app = new Application();
  
  // canvas add
  await app.init({ background: '#fff'});
  
  document.body.appendChild(app.canvas);
  
  // sprite img load
  const sheet = await Assets.load('../../public/player.json');

  
  // 스프라이트시트(한 사진에 여러장면이 들어있는 사진)를 연속으로 돌릴경우 (컨트롤 하는법 미숙지)
  const player = new AnimatedSprite(sheet.animations['character']);
  

  app.stage.addChild(player);
  
  console.log(player)
  

  const playerWidth = app.canvas.width / 80;
  const playerHeight = app.canvas.height / 80;



  // player keyboard controller
  document.addEventListener('keydown', onKeyDown);
  // document.addEventListener('keyup', onKeyUp);
  
  // function onKeyUp() {
  //   animatedSprite.stop();
  // }

  function onKeyDown(key : KeyboardEvent) {
    // W - 87
    // Up arrow - 87
    if (key.keyCode === 87 || key.keyCode === 38) {
      // 위로 이동
      if (player.position.y != 0) {
        // map의 상단끝일 경우
        player.position.y -= playerHeight;
      } else {
        player.stop();
      }
    }

    // S - 83
    // Down arrow - 40
    if (key.keyCode === 83 || key.keyCode === 40) {
      // 아래로 이동
      if (player.position.y != app.canvas.height - playerHeight) {
          // map의 하단끝일 경우
          player.position.y += playerHeight;
      } else {
        player.stop();
      }
    }

    // A - 65
    // Left arrow - 37
    if (key.keyCode === 65 || key.keyCode === 37) {
      // 좌측 이동
      if (player.position.x != 0) {
          // map의 좌족끝일 경우
          player.position.x -= playerWidth;
      } else {
        player.stop();
      }
    }

    // D - 68
    // Right arrow - 39
    if (key.keyCode === 68 || key.keyCode === 39) {
      // 우측 이동
      if (player.position.x != app.canvas.width - playerWidth) {
          // map의 우측끝일 경우
          player.position.x += playerWidth;
        } else {
          player.stop();
        }
      }
      player.animationSpeed = .1;    
      player.play();
    
  }
}
