let cursor;
let upArrow;
let downArrow;
let rightArrow;
let leftArrow;
let graphics;
let brushSize = 10;
let hue = 0;
let sat = 255;
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

    colorMode(HSB, 255);
    graphics.colorMode(HSB, 255);
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
    drawSidebar();
}

function keyPressed() {
    if (keyCode === DOWN_ARROW) {
        brushSize = brushSize - 5;
    }
    if (keyCode === UP_ARROW) {
        brushSize = brushSize + 5;
    }
    if (key === '1') {
        hue = 01;
    }
    if (key === '2') {
        hue = 20;
    }
    if (key === '3') {
        hue = 35;
    }
    if (key === '4') {
        hue = 60;
    }
    if (key === '5') {
        hue = 130;
    }
    if (key === '6') {
        hue = 160;
    }
    if (key === '7') {
        hue = 190;
    }
    if (key === '8') {
        hue = 0;
        sat = 0;
        lum = 0;
    }

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(255);
}

function drawSidebar() {
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