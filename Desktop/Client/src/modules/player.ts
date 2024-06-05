import { Application, Assets, AnimatedSprite } from 'pixi.js';

export default async function player() {

  const app = new Application();
  
  // canvas add
  await app.init({ background: '#fff'});
  
  document.body.appendChild(app.canvas);
  
  // sprite img load
  const sheet = await Assets.load('../../public/player.json');
  const animatedSprite = new AnimatedSprite(sheet.animations['character']);
  
  // sprite(animations options)
  // sprite -> speed
  animatedSprite.animationSpeed = 0.1;    
  // sprite -> animation start
  animatedSprite.play();
  // sprite -> stag add
  app.stage.addChild(animatedSprite);
}
