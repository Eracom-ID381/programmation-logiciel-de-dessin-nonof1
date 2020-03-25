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
let palette;
let white;
let red;

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
        graphics.strokeWeight(constrain(brushSize, 5, 10));
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
        sat = 255;
        lum = 255;
    }
    if (key === '2') {
        hue = 20;
        sat = 255;
        lum = 255;
    }
    if (key === '3') {
        hue = 35;
        sat = 255;
        lum = 255;
    }
    if (key === '4') {
        hue = 60;
        sat = 255;
        lum = 255;
    }
    if (key === '5') {
        hue = 130;
        sat = 255;
        lum = 255;
    }
    if (key === '6') {
        hue = 160;
        sat = 255;
        lum = 255;
    }
    if (key === '7') {
        hue = 190;
        sat = 255;
        lum = 255;
    }
    if (key === '8') {
        hue = 0;
        sat = 0;
        lum = 0;
    }
    if (key === '9') {
        hue = 0;
        sat = 0;
        lum = 255;
        cursor = loadImage("../img/eraser.png");
    } else {
        cursor = loadImage("../img/paintbrush.png");
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

    fill(hue, sat, lum);
    strokeWeight(2);
    rect(0, 120, 300, 40);

    strokeWeight(2);
    stroke(0);
    line(300, 0, 300, windowHeight);

    drawColorpalette();
}

function drawColorpalette() {

    //Rouge
    strokeWeight(2);
    fill(0, 255, 255);
    rect(40, 190, 35, 35);
    strokeWeight(0);
    fill(0);
    text("1", 53, 214);

    //Orange
    strokeWeight(2);
    fill(20, 255, 255);
    rect(110, 190, 35, 35);
    strokeWeight(0);
    fill(0);
    text("2", 122, 214);

    //Jaune
    strokeWeight(2);
    fill(35, 255, 255);
    rect(40, 250, 35, 35);
    strokeWeight(0);
    fill(0);
    text("3", 53, 274);

    //Vert
    strokeWeight(2);
    fill(60, 255, 255);
    rect(110, 250, 35, 35);
    strokeWeight(0);
    fill(0);
    text("4", 122, 274);

    //Bleu clair
    strokeWeight(2);
    fill(130, 255, 255);
    rect(40, 310, 35, 35);
    strokeWeight(0);
    fill(0);
    text("5", 52, 333);

    //Bleu foncé
    strokeWeight(2);
    fill(160, 255, 255);
    rect(110, 310, 35, 35);
    strokeWeight(0);
    fill(0);
    text("6", 122, 333);

    //Violet
    strokeWeight(2);
    fill(190, 255, 255);
    rect(40, 370, 35, 35);
    strokeWeight(0);
    fill(0);
    text("7", 52, 394);

    //Black
    palette = createButton("Noir");
    palette.mousePressed(noir);
    palette.style("background-color", "black");
    palette.position(40, 465);
    palette.size(40, 40);

    //white
    white = createButton("");
    white.mousePressed(blanc);
    white.position(90, 465);
    white.size(40, 40);

    //red
    red = createButton("");
    red.mousePressed(red);
    red.style("background-color", "red");
    red.position(40, 180);
    red.size(40, 40);
}

function noir() {
    hue = 0;
    sat = 0;
    lum = 0;
}

function blanc() {
    hue = 0;
    sat = 0;
    lum = 255;
    cursor = loadImage("../img/eraser.png");
}