function setup() {
  createCanvas(800, 600);
  background (102,205,170)
}

function draw() {
if(mouseIsPressed){
  fill(10);
} else {
  fill(255);
}
ellipse(mouseX, mouseY,80,80);
}
