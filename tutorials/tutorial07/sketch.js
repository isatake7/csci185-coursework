function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Exercise 1:
    drawCircle(100, 100, 100, "hotpink");
    drawCircle(200, 100, 50, "blue");
    drawCircle(300, 100, 100, "teal");
    drawCircle(400, 100, 50, "hotpink");



    // Exercise 2: 
    drawOval(100,200,100,50,"teal");
    drawOval(200,200,50,100,"hotpink");
    drawOval(300,200,100,50,"teal");
    drawOval(400,200,50,100,"blue");




    

    // Exercise 3:
    drawBullseye(100, 300, 100, "orange", "purple");
    drawBullseye(200, 300, 50, "blue", "white");
    drawBullseye(300, 300, 100,"yellow", "red");
    drawBullseye(400, 300, 50, "lightblue", "white");




    // Exercise 4:
    drawFace(100, 400, 100);
    drawFace(300, 400, 200);

    drawGrid(canvasWidth, canvasHeight);
}


// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, size, and fillColor
function drawCircle(centerX, centerY, size, fillColor) {
    fill(fillColor);
    circle(centerX, centerY, size);
}

// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, sizeX, sizeY, and fillColor
function drawOval(centerX, centerY, sizeX, sizeY, fillColor) {
    fill(fillColor);
    ellipse(centerX, centerY, sizeX, sizeY);
}


// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawBullseye(centerX, centerY, size, color1, color2) {
    fill(color1);
    circle(centerX, centerY, size);
    fill(color2);
    circle(centerX, centerY, size*.75);
    fill(color1);
    circle(centerX, centerY, size*.5);
    fill(color2);
    circle(centerX, centerY, size*.25);
}

// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawFace(centerX, centerY, size) {
    fill('white');
    circle(centerX, centerY, size);
    fill('black');
    circle(centerX*.85, centerY/1.05, size*.10);
    circle(centerX*1.15, centerY/1.05, size*.10);
}
