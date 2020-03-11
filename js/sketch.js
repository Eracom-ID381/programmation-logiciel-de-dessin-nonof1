let cursor;
let upArrow;
let downArrow;
let rightArrow;
let leftArrow;
let graphics;
let brushSize = 10;
let hue = 255;
let sat = 0;
let lum = 255;

function preload() {
    cursor = loadImage("../img/paintbrush.png");
    upArrow = loadImage("../img/up.png");
    downArrow = loadImage("../img/down.png");
    leftArrow = loadImage("../img/left.png");
    rightArrow = loadImage("../img/right.png");
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
        graphics.stroke(hue, sat, lum);
        graphics.strokeWeight(brushSize);
        graphics.line(mouseX, mouseY, pmouseX, pmouseY);
    }
    image(cursor, mouseX, mouseY, 35, 35);

    textSize(20);
    strokeWeight(0);
    fill(0);
    image(upArrow, 10, 10, 30, 30);
    text("Augmenter taille du pinceau", 45, 35);

    image(downArrow, 10, 70, 30, 30);
    text("Diminuer taille du pinceau", 45, 90);

    image(leftArrow, 10, 130, 30, 30);
    text("Aller vers le magenta", 45, 155);

    image(rightArrow, 10, 190, 30, 30);
    text("Aller vers le bleu", 45, 215);

    fill(hue, sat, lum);
    strokeWeight(0);
    rect(0, 250, 300, 40);

    strokeWeight(2);
    stroke(0);
    line(300, 0, 300, windowHeight);
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