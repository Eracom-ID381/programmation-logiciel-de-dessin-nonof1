let brushSize = 10;
let hue = 255;
let tint = 255;
let lum = 255;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    noStroke();
}

function draw() {
    fill(red, green, blue);
    colorMode(HSB)
    stroke(hue, tint, lum);
    strokeWeight(brushSize);

    if (mouseIsPressed === true) {
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
}

function keyPressed() {
    if (keyCode === DOWN_ARROW) {
        brushSize = brushSize - 5;
    }
    if (keyCode === UP_ARROW) {
        brushSize = brushSize + 5;
    }
    if (keyCode === RIGHT_ARROW) {
        hue = hue - 10;
        tint = tint - 10;
        lum = lum - 10;
    }
    if (keyCode === LEFT_ARROW) {
        hue = hue + 10;
        tint = tint + 10;
        lum = lum + 10;
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(255);
}