let cursor;
let brushSize = 10;
let hue = 350;
let tint = 255;
let lum = 255;

function preload() {
    cursor = loadImage("../img/paintbrush.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    noStroke();
}

function draw() {
    background(255);
    fill(hue, tint, lum);
    colorMode(HSB)
    stroke(hue, tint, lum);
    strokeWeight(brushSize);
    rect(0, 0, 180, 80);

    if (mouseIsPressed === true) {
        line(mouseX, mouseY, pmouseX, pmouseY);
    }

    image(cursor, mouseX, mouseY, 30, 30)
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
    }
    if (keyCode === LEFT_ARROW) {
        hue = hue + 10;
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(255);
}