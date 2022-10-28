const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 


// initialize an x and y variable
// to store where the creature will be drawn
// at any given point in time:
let currentX = 500;
let currentY = 300;
let isFollowing = false;
const droidList = [];

//controls position of car
const c1 = {
    x: canvasWidth - 200,
    y: canvasHeight - 200,
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

const ship1 = {
    x: 200,
    y: canvasHeight
}

const ship2 = {
    x: canvasWidth - 200,
    y: canvasHeight
}


function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // set up creature
    drawCreature(currentX, currentY, 75, 'white', 'orange');
}

let counter = 0;
function draw() {
    clear();
    
    starsBackground();

    c1.x -= c1.speed;
    drawCar(c1.x, c1.y, c1.width, 'hotpink');
    if (c1.x < 0) {
        c1.x = canvasWidth;
    }

    c2.x += c2.speed;
    c2.y += Math.cos(counter / 30) * 3;
    drawCar(c2.x, c2.y, c2.width, 'blue');
    if (c2.x > canvasWidth) {
        c2.x = -100;
    }

    c3.x += c3.speed;
    drawCar(c3.x, c3.y, c3.width, 'green');
    if (c3.x > canvasWidth) {
        c3.x = -200;
    }

    //move spaceship
    ship1.y = ship1.y - 5;
    drawLandscapeObject(ship1.x, ship1.y);
        if (ship1.y < 0) {
        ship1.y = canvasHeight + 300;
     }

    ship2.y = ship2.y - 3;
    drawLandscapeObject(ship2.x, ship2.y);
        if (ship2.y < 0) {
        ship2.y = canvasHeight + 300;
     }

    drawCreature(currentX, currentY, 75, 'white', 'orange');
    counter++;

    handleClick();

    for (const droid of droidList) {
        drawCreature(droid.x, droid.y, droid.size, 'orange' , 'white');
    }

}

function handleClick() {
    console.log('mouseClicked', isFollowing);


    if (mouseIsPressed === true) {
        if (mouseButton === LEFT) {
            if (isFollowing == false) {
                isFollowing = true;
            } else {
                isFollowing = false;
            }
        }
        if (mouseButton === RIGHT) {
            const droid = {
                x: mouseX,
                y: mouseY,
                size: Math.random()* 40 + 3,
            }
            droidList.push(droid)
        }
      }

}

function mouseMoved() {
    //console.log(mouseX, mouseY);
    console.log(isFollowing);
    if (isFollowing == true) {
        console.log(currentX);
        currentX = mouseX;
        currentY = mouseY;
    }

}

function drawCreature (centerX, centerY, size, primaryColor, secondaryColor) {
    fill(primaryColor);
    circle(centerX, centerY, size);
    fill(primaryColor);
    circle(centerX, centerY-(.75*size), size/1.5);
    stroke('white');
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

function drawLandscapeObject(centerX, centerY) {
    fill('gray');
    rect(centerX,centerY,40,120);
    rect(centerX+5,centerY-10,30,10);
    rect(centerX+12,centerY-20,15,15);
    rect(centerX+17,centerY-40,5,30);
    rect(centerX-20,centerY+80,34,34);
    rect(centerX+25,centerY+80,34,34);
    rect(centerX-13,centerY+70,20,20);
    rect(centerX+31,centerY+70,20,20);
    noStroke();
    fill('blue'); 
    circle(centerX+20,centerY+10,10);
    circle(centerX+20,centerY+30,10,10);
    circle(centerX+20,centerY+50,10,10);
    fill(204, 102, 0);
    rect(centerX,centerY+120,40,10);
    rect(centerX+5,centerY+130,30,10);
    rect(centerX+10,centerY+140,20,10);
    rect(centerX+15,centerY+150,10,10);
}


function starsBackground () {
    background('black');
    fill('white');
    circle(random(width), random(height), random(3, 15), random(3, 15));
    fill('yellow');
    ellipse(random(width), random(height), random(3, 10), random(3, 10));
    fill('white');
    circle(random(width), random(height), random(3, 15), random(3, 15));
    fill('yellow');
    ellipse(random(width), random(height), random(3, 10), random(3, 10));
}

document.oncontextmenu = function () {
    return false;
}

