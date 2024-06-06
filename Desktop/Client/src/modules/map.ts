import { Application, Assets, Sprite } from 'pixi.js';



export default async function map() {
  const app = new Application();
  
  // Initialize the application
  await app.init({ resizeTo: window });
  
  // Append the application canvas to the document body
  document.body.appendChild(app.canvas);
  
  
  
  // Load the grass texture
  const grassTexture = await Assets.load('../../public/pokemon_map.png');
  
  // Create the grass background
  const background = new Sprite(grassTexture);
  
  app.stage.addChild(background);
  
  
  // 화면 포인트 (정중앙 - 0.5)
  background.anchor.set(0.5);
  // 화면 너비
  background.width = app.screen.width * 1;
  background.scale.y = background.scale.x;
  // 화면 위치
  background.x = app.screen.width / 2;
  background.y = app.screen.height / 2;
  
}