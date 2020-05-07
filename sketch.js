var line,lines;
function setup() {
  createCanvas(800,800);
  mousePressed(line = createSprite(mouse.X,mouse.Y)); 
}

function draw() {
  background(100);
  drawSprites();
}
function mousePressed(){
  lines = [line.x,line.y]
  }
  