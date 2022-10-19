const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

async function setup() {
    createCanvas(canvasWidth, canvasHeight);

    drawStars();
    drawBubbles();
}

function drawStars() {
    strokeWeight(0);
    fill('white');
    for (let i = 0; i < 1000; i++) {
        const randoX = Math.random() * canvasWidth;
        const randoY = Math.random() * canvasHeight;
        const randoWidth = Math.random() * 2 + 0.5;
        circle(randoX, randoY, randoWidth);
    }
}

function drawBubbles() {
    strokeWeight(1);
    stroke('white');
    noFill()
    for (let i = 0; i < 500; i++) {
        const randoX = Math.random() * canvasWidth;
        const randoY = Math.random() * canvasHeight;
        const randoWidth = Math.random() * 40 + 5;
        circle(randoX, randoY, randoWidth);
    }
}
