let brushSize = 10;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(102);
    noStroke();
}

function draw() {
    fill(255);
    stroke(255);
    strokeWeight(brushSize);

    if (mouseIsPressed === true) {
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        brushSize = brushSize - 5;
    }
    if (keyCode === RIGHT_ARROW) {
        brushSize = brushSize + 5;
    }
    if (keyCode === "G") {
        fill(0);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(102);
}