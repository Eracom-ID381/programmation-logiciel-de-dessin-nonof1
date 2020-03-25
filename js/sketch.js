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
let orange;
let yellow;
let green;
let bleuClair;
let bleuFonce;
let violet;

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

    //Black
    palette = createButton("Noir");
    palette.mousePressed(noir);
    palette.style("background-color", "black");
    palette.position(40, 300);
    palette.size(40, 40);

    //white
    white = createButton("");
    white.mousePressed(blanc);
    white.position(90, 300);
    white.size(40, 40);

    //red
    red = createButton("");
    red.mousePressed(rouge);
    red.style("background-color", "red");
    red.position(40, 180);
    red.size(40, 40);

    //orange
    orange = createButton("");
    orange.mousePressed(orang);
    orange.style("background-color", "#ff6600");
    orange.position(90, 180);
    orange.size(40, 40);

    //yellow
    yellow = createButton("");
    yellow.mousePressed(jaune);
    yellow.style("background-color", "#ffcc00");
    yellow.position(140, 180);
    yellow.size(40, 40);

    //green
    green = createButton("");
    green.mousePressed(vert);
    green.style("background-color", "#00ff00");
    green.position(40, 230);
    green.size(40, 40);

    //light blue
    bleuClair = createButton("");
    bleuClair.mousePressed(bleu01);
    bleuClair.style("background-color", "#00ffff");
    bleuClair.position(90, 230);
    bleuClair.size(40, 40);

    //dark blue
    bleuFonce = createButton("");
    bleuFonce.mousePressed(bleu02);
    bleuFonce.style("background-color", "#0000ff");
    bleuFonce.position(90, 230);
    bleuFonce.size(40, 40);

    //purple
    violet = createButton("");
    violet.mousePressed(violett);
    violet.style("background-color", "#6600ff");
    violet.position(140, 230);
    violet.size(40, 40);
}

function noir() {
    hue = 0;
    sat = 0;
    lum = 0;
    cursor = loadImage("../img/paintbrush.png");
}

function rouge() {
    hue = 01;
    sat = 255;
    lum = 255;
    cursor = loadImage("../img/paintbrush.png");
}

function orang() {
    hue = 20;
    sat = 255;
    lum = 255;
    cursor = loadImage("../img/paintbrush.png");
}

function jaune() {
    hue = 35;
    sat = 255;
    lum = 255;
    cursor = loadImage("../img/paintbrush.png");
}

function vert() {
    hue = 60;
    sat = 255;
    lum = 255;
    cursor = loadImage("../img/paintbrush.png");
}

function bleu01() {
    hue = 130;
    sat = 255;
    lum = 255;
    cursor = loadImage("../img/paintbrush.png");
}

function bleu02() {
    hue = 160;
    sat = 255;
    lum = 255;
    cursor = loadImage("../img/paintbrush.png");
}

function violett() {
    hue = 190;
    sat = 255;
    lum = 255;
    cursor = loadImage("../img/paintbrush.png");
}

function blanc() {
    hue = 0;
    sat = 0;
    lum = 255;
    cursor = loadImage("../img/eraser.png");
}