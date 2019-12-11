function setup() {
    let canvas = createCanvas(windowWidth, windowHeight * 8);
    canvas.parent("#sketch");
    background(35, 39, 71);
    strokeWeight(2);
  }
  
  function draw() {
    if (mouseIsPressed) {
      stroke(255);
    } else {
      stroke(237, 34, 93);
    }
    line(mouseX - 66, mouseY, mouseX + 66, mouseY);
    line(mouseX, mouseY - 66, mouseX, mouseY + 66);
  }
  