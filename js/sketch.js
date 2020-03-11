let cursor;
let graphics;
let brushSize = 10;
let hue = 255;
let tint = 255;
let lum = 255;

function preload() {
    cursor = loadImage("../img/paintbrush.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    pixelDensity(1);
    graphics = createGraphics(windowWidth, windowHeight);
    graphics.background(255);
}

function draw() {
    background(255);
    image(graphics, 0, 0);

    if (mouseIsPressed) {
        graphics.stroke(0);
        graphics.strokeWeight(brushSize);
        graphics.line(mouseX, mouseY, pmouseX, pmouseY);
    }
    image(cursor, mouseX, mouseY, 35, 35);
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