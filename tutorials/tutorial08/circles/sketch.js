function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();
    let counter = 0;

    while (counter < 36) {
        if (counter % 3 == 0) {
            fill('hotpink');
        } else if (counter % 2  == 0) {
            fill('teal');
        } else {
            fill('lightgreen');
        }

        circle(400,  100 + counter*50, 10+counter*10);
        counter += 1;

    }

    drawGrid(canvasWidth, canvasHeight);
}


