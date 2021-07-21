var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["81f9638b-e906-4b38-b12e-eed9d0aa070e","78dc792b-79d8-4520-bdb9-232a66c8fcf0","37d5e9b4-e135-4b99-a1a1-156bfea96a41","9209c0cf-c333-4623-9156-a460c4506f1e","feb525fc-7444-42d6-aa9d-ccac364358a8"],"propsByKey":{"81f9638b-e906-4b38-b12e-eed9d0aa070e":{"name":"virus1","sourceUrl":null,"frameSize":{"x":390,"y":390},"frameCount":1,"looping":true,"frameDelay":12,"version":"7L.Mn9z3hChoh.ID1ks1CkbkUbitPt2A","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":390},"rootRelativePath":"assets/81f9638b-e906-4b38-b12e-eed9d0aa070e.png"},"78dc792b-79d8-4520-bdb9-232a66c8fcf0":{"name":"virus2","sourceUrl":"assets/api/v1/animation-library/gamelab/ZdtNFtOiydwR9zKYWovoGTaaRFuvBF6p/category_germs/gameplaywacky_05.png","frameSize":{"x":397,"y":372},"frameCount":1,"looping":true,"frameDelay":2,"version":"ZdtNFtOiydwR9zKYWovoGTaaRFuvBF6p","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":397,"y":372},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ZdtNFtOiydwR9zKYWovoGTaaRFuvBF6p/category_germs/gameplaywacky_05.png"},"37d5e9b4-e135-4b99-a1a1-156bfea96a41":{"name":"virus3","sourceUrl":"assets/api/v1/animation-library/gamelab/KoZz0QksHdpzqfX71bq5vgJR__O0e4sP/category_germs/virus03_03.png","frameSize":{"x":388,"y":390},"frameCount":1,"looping":true,"frameDelay":2,"version":"KoZz0QksHdpzqfX71bq5vgJR__O0e4sP","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":390},"rootRelativePath":"assets/api/v1/animation-library/gamelab/KoZz0QksHdpzqfX71bq5vgJR__O0e4sP/category_germs/virus03_03.png"},"9209c0cf-c333-4623-9156-a460c4506f1e":{"name":"Mask.png_1","sourceUrl":"assets/v3/animations/qKRUXbyGr63oZNfOLVGqt_O6LkSMhs_aDmLJCDqPIBU/9209c0cf-c333-4623-9156-a460c4506f1e.png","frameSize":{"x":455,"y":356},"frameCount":1,"looping":true,"frameDelay":4,"version":"p1AoWfLiVIDIaah80I54kURQILlYSDr_","loadedFromSource":true,"saved":true,"sourceSize":{"x":455,"y":356},"rootRelativePath":"assets/v3/animations/qKRUXbyGr63oZNfOLVGqt_O6LkSMhs_aDmLJCDqPIBU/9209c0cf-c333-4623-9156-a460c4506f1e.png"},"feb525fc-7444-42d6-aa9d-ccac364358a8":{"name":"mask2.png","sourceUrl":"assets/v3/animations/qKRUXbyGr63oZNfOLVGqt_O6LkSMhs_aDmLJCDqPIBU/feb525fc-7444-42d6-aa9d-ccac364358a8.png","frameSize":{"x":487,"y":630},"frameCount":1,"looping":true,"frameDelay":4,"version":"zuRpVi9A1CLrGp5fu8EUYpLAt2GaEE2z","loadedFromSource":true,"saved":true,"sourceSize":{"x":487,"y":630},"rootRelativePath":"assets/v3/animations/qKRUXbyGr63oZNfOLVGqt_O6LkSMhs_aDmLJCDqPIBU/feb525fc-7444-42d6-aa9d-ccac364358a8.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var mask = createSprite(200,335,10,10);

mask.setAnimation("Mask.png_1");
mask.scale = 0.3;

mask.debug = true;
mask.setCollider ("circle",0,0,40);

var VirusGroup = createGroup();


var ground = createSprite(200,390,400,5);
ground.visible=false;

var danger =  0;



var gameState=0;
var mask2 = createSprite (200,335,10,10);
mask2.visible = false;
mask2.setAnimation("mask2.png");
mask2.scale = 0.2;
 playSound("assets/demon_slayer_op_1_mb.mp3");


function draw() {
  background("white");

 if ( gameState===0){
   

   
 
 
 if (keyDown("right")){
   
   mask.x = mask.x+5;
   
 }
 
if (keyDown("left")){
  
  mask.x = mask.x - 5;
  
} 
 
 for(var i =0; i<VirusGroup.length;i++){
   
   if (VirusGroup.get(i).isTouching(mask)){
     playSound("assets/oh_no.mp3", false);
     VirusGroup.get(i).remove();
     
   }
   
 }
 
 
for(var m =0; m<VirusGroup.length;m++){
   
   if (VirusGroup.get(m).isTouching(ground)){
     playSound("Devil-Laugh-(mp3cut.net).mp3", false);
     VirusGroup.get(m).remove();
     danger = danger+1;
   }
   
 }
  
 if (danger>=5){
   
   gameState = 1;
   
 }
 
 
 spawnVirus();
  
 }
 
if (gameState === 1){
  
  background("yellow");
  mask2.visible = true;
  
  /*
  if (keyDown("up")){
    
    mask2.x = mask2.x + 5;
    
  }
 if (keyDown("down")){
    
    mask2.x = mask2.x - 5;
    
  }
  */
  
  if (keyDown("right")){
   
   mask.x = mask.x+5;
   
 }
 
if (keyDown("left")){
  
  mask.x = mask.x - 5;
  
}
mask2.x = mask.x;

spawnVirus();

for(var a =0; a<VirusGroup.length;a++){
   
   if (VirusGroup.get(a).isTouching(mask)){
     playSound("assets/oh_no.mp3", false);
     VirusGroup.get(a).remove();
     
   }
   
 }
 
 
for(var b=0; b<VirusGroup.length;b++){
   
   if (VirusGroup.get(b).isTouching(ground)){
     playSound("Devil-Laugh-(mp3cut.net).mp3", false);
     
     VirusGroup.get(b).remove();
     danger = danger+1;
   }
   
 }

for(var c =0; c<VirusGroup.length;c++){
   
   if (VirusGroup.get(c).isTouching(mask2)){
     
     VirusGroup.get(c).remove();
     
   }
   
 }
 
 

}
 
 
 text ("danger "+danger,300,50);
 
  drawSprites();
}

function spawnVirus() {
  
 if (World.frameCount % 60 === 0){
   
   var coronaVirus = createSprite(200,-10,10,10);
   coronaVirus.x = randomNumber (10,390);
   coronaVirus.velocityY = 5+danger/5; 
  
  coronaVirus.lifetime = 150;
  
var rand = randomNumber (1,3);
   coronaVirus.setAnimation ("virus" + rand);
   coronaVirus.scale = 0.2;
   
   VirusGroup.add(coronaVirus);
 } 
  
  
  
  
}









// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
