// var y;
// count=0
function setup() {
  createCanvas(600, 600);
  background(0);
}

function drawCircle (x,y,size) {
  ellipse(x,y,size,size);

  if (size>10){
    var new_size = size/2;
    drawCircle (x + random(new_size), y, new_size);
    drawCircle(x - new_size, y, random(new_size));
    drawCircle(x + y, new_size, y);
      drawCircle(x -y, new_size, y);
  }
}

function draw(){
  noFill();
  stroke(255);
  noLoop();
  drawCircle(width/2, height/2, 300);
}




//   y = height / 3;
// }
//
// function draw(){
//  background(225);
//  noStroke();
//  fill (255,100,200,100);
//  ellipse(width/2,y,100,100);
//
//  count+=1;
//  y=(height/4) + (sin(count/20)* 222);
//
// y+=1;
// if (y> height){
//   y=0;
// }
// }

// function flower(x,y,size) {
// fill(225)
// stroke(0)
// ellipse(x,y,size,size);
// fill(255,100,200,100)
// var new_size = size/2
// ellipse(x+ new_size,y,new_size, new_size);
// ellipse(x-new_size,y,new_size, new_size);
// ellipse(x,y + new_size, new_size, new_size);
// ellipse(x, y - new_size, new_size, new_size);
//
// }
//
// function draw() {
//   flower(200,200,200);
//   flower(100,200,100);
//   flower(30,30,30);
//
//   var y;
//
//
//
// }
