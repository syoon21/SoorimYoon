let mx = 1;
let my = 1;
let easing = 0.05;
let radius = 24;
let edge = 0;
let inner = edge + radius;

function setup() {
//   createCanvas(720, 400);
  let canvas = createCanvas(windowWidth, windowHeight * 6);
  canvas.parent("#sketch");
  noStroke();
  ellipseMode(RADIUS);
  rectMode(CORNERS);
  pg = createGraphics(1000,250);
  // color(35, 39, 71);
}
function windowResized(){
    resizedCanvas(windowWidth, windowHeight);
    
  }
function draw() {
  background(230);

  if (abs(mouseX - mx) > 0.1) {
    mx = mx + (mouseX - mx) * easing;
  }
  if (abs(mouseY - my) > 0.1) {
    my = my + (mouseY - my) * easing;
  }

  mx = constrain(mx, inner, width - inner);
  my = constrain(my, inner, height - inner);
  fill(35, 39, 71);
  rect(edge, edge, width - edge, height - edge);
  fill(255, 149, 0);
  ellipse(mx, my, radius, radius);
}
