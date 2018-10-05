function setup() {
  createCanvas(1000, 1000);
  background (102,205,170)
}

function draw() {
if(mouseIsPressed){
  fill(100,200,150);
} else {
  fill(255,192,203);
}
ellipse(mouseX, mouseY,80,80);
}
