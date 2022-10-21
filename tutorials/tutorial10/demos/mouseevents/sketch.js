const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 


// initialize an x and y variable
// to store where the creature will be drawn
// at any given point in time:
let currentX = 500;
let currentY = 300;
let isFollowing = false;

//setup: draw the creature when the game first begins:
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // message
    drawCreature(currentX, currentY, 70, 'black', 'red');
}

function mouseMoved() {
    //console.log(mouseX, mouseY);
    if (isFollowing == true) {
        clear();
        drawCreature(mouseX, mouseY, 70, 'black', 'red');
    }

}

function mouseClicked() {
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



// function mouseDragged() {
//     circle(mouseX, mouseY, Math.random()* 50 + 50);
// }
