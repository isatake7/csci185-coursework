const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    drawElmo(100, 100, 150, '#0bc9cd', true);   // nose drawn
    drawElmo(300, 200, 75, '#0bc9cd', false);   // no nose drawn
    drawElmo(100, 325, 100, '#8093f1', false);  // no nose drawn
    drawElmo(250, 375, 125, '#7fb285', true);   // nose drawn
    drawElmo(550, 200, 250, '#102e4a', true);   // nose drawn


    drawGrid(canvasWidth, canvasHeight);
}


function drawElmo(x, y, size, color, hasNose) {
    //head
    fill(color);
    circle(x, y, size);

    //eyes-white
    fill('white');
    circle(x-(2*(size/15)), y-(2*(size/10)), size/4);
    fill('white');
    circle(x+(2*(size/15)), y-(2*(size/10)), size/4);

    //eyes-pupil
    fill('black');
    circle(x-(2*(size/15)), y-(2*(size/10)), size/10);    
    fill('black');
    circle(x+(2*(size/15)), y-(2*(size/10)), size/10);
    
    //nose
    if (hasNose == true) {
        fill('#db5461');
        ellipse(x, y*1.01, size/4, size/2.90); 
    }


    

}
