let img;
let circThere = true;
let page = 1;
let mouseIsPressed = false;

let canvasWidth = 1000
let canvasHeight = 600

function preload() {
  img = loadImage('Assetination/jean-philippe-delberghe-SxYm8d6rmUs-unsplash.jpg');
  img2 = loadImage('Assetination/fg.png');
  img3 = loadImage('Assetination/fg2.png');
}

function setup() {
  createCanvas(canvasWidth,canvasHeight);
}

function draw() {
    if (page == 1)
    {
        page1draw();
    }
}

function page1draw() {
    //image(img, -50 + -(mouseX *  0.05), -50 + -(mouseY * 0.1), 1100,700);
    drawImage(img, 0, 0, 50);
    if (circThere)
    {
        image(img2, 500 + -(mouseX * 0.2), 300 + -(mouseY * 0.2), 100,100);
    }
    else
    {
        image(img3, 500 + -(mouseX * 0.2), 300 + -(mouseY * 0.2), 100,100);
    }

    circMinX = 440;
    circMaxX = 480;
    circMinY = 270;
    circMaxY = 315;

    if (mouseIsPressed && mouseX > circMinX && mouseX < circMaxX && mouseY > circMinY && mouseY < circMaxY)
    {
        circThere = !circThere;
    }
    if (mouseIsPressed)
    {
        mouseIsPressed = false;
    }
}

function drawImage(img, x, y, parallaxOffset)
{
    image(img, x -parallaxOffset + ((mouseX / canvasWidth) * parallaxOffset), y -parallaxOffset + ((mouseY / canvasHeight) * parallaxOffset), 1100,700);
}

function mousePressed() {
    mouseIsPressed = true;
}