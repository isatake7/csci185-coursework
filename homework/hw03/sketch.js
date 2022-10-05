function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Once you've created your drawCreature function, 
    // invoke drawCreature 5 times with the following arguments
    // (feel free to change the sizes, positions, and colors):
    
    drawCreature(92, 115, 85, '#5e6976', '#1b324d');
    drawCreature(487, 110, 101, '#bfdc65', '#abb880');
    drawCreature(454, 423, 141, '#aebb83', '#227876');
    drawCreature(333, 227, 99, '#94ba77', '#3f5364');
    drawCreature(117, 314, 91, '#648d8e', '#afc272');
    // drawCreature(700, 300, 100, "white", "orange");
    // drawCreature(100, 400, 200, "white", "orange");

    drawGrid(canvasWidth, canvasHeight);
}

// define your drawCreature function here:

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
