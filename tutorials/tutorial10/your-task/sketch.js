const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 


// initialize an x and y variable
// to store where the creature will be drawn
// at any given point in time:
let currentX = 500;
let currentY = 300;
let isFollowing = false;

//controls position of car
const c1 = {
    x: canvasWidth - 200,
    y: canvasHeight,
    width: 200,
    speed: 5.0,
    color: 'hotpink'
};

const c2 = {
    x: canvasWidth - 200,
    y: canvasHeight - 400,
    width: 200,
    speed: 10.0,
    color: 'blue'
};

const c3 = {
    x: canvasWidth - 200,
    y: canvasHeight - 600,
    width: 200,
    speed: 3.0,
    color: 'green'
};

//setup: draw the creature when the game first begins:
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // message
    drawCreature(currentX, currentY, 75, 'black', 'red');
}

function mouseMoved() {
    //console.log(mouseX, mouseY);
    console.log(isFollowing);
    if (isFollowing == true) {
        console.log(currentX);
        currentX = mouseX;
        currentY = mouseY;
        // clear();
        // drawCreature(mouseX, mouseY, 75, 'black', 'red');
    }

}

function draw () {
    clear();

    c1.x += c1.speed;
    drawCar(c1.x, c1.y, c1.width, 'hotpink');

    c2.x += c2.speed;
    drawCar(c2.x, c2.y, c2.width, 'blue');

    c3.x += c3.speed;
    drawCar(c3.x, c3.y, c3.width, 'green');

    drawCreature(currentX, currentY, 75, 'black', 'red');

}

function mouseClicked() {
    console.log('mouseClicked', isFollowing);
    if (isFollowing == false) {
        isFollowing = true;
    } else {
        isFollowing = false;
    }
}

//your draw creature function
function drawCreature (centerX, centerY, size, primaryColor, secondaryColor) {
    fill(primaryColor);
    circle(centerX, centerY, size);
    fill(primaryColor);
    circle(centerX, centerY-(.75*size), size/1.5);
    stroke('black');
    strokeWeight(3.5);
    line(centerX, ((centerY-(.75*size))-.5*(size/1.5)), centerX, ((centerY-(.75*size))-.5*(size/1.5)) - (size*.25));
    fill(secondaryColor);
    strokeWeight(1);
    ellipse(centerX + (.25*size), centerY - (.20*size), .25*size, .33*size);
    fill(secondaryColor);
    strokeWeight(1);
    ellipse(centerX - (.25*size), centerY - (.25*size), .25*size, .33*size);
    fill(secondaryColor);
    strokeWeight(1);
    ellipse(centerX - (.20*size), centerY + (.25*size), .33*size, .25*size);
    fill(secondaryColor);
    circle(centerX, centerY - (.80*size), size*.2)
}

function drawCar(x, y, size, fillColor, wheelColor='black') {
    strokeWeight(0);
    
    // body
    fill(fillColor);
    rect(x - size/4, y - (size/5 + size/7), size / 2, size/7); // top
    rect(x - size/2, y - size/5, size, size/5); // bottom

    // wheels:
    fill(wheelColor);
    circle(x - size / 4, y, size / 6);
    circle(x + size / 4, y, size / 6);
}