let img;
let circThere = true;
let page = 1;
let mouseIsPressed = false;

function preload() {
  img = loadImage('Assetination/bp.png');
  img2 = loadImage('Assetination/fg.png');
  img3 = loadImage('Assetination/fg2.png');
}
function setup() {
  // Top-left corner of the img is at (0, 0)
  // Width and height are the img's original width and height
  createCanvas(1000,600);
}

function draw() {
    if (page == 1)
    {
        page1draw();
    }
}

function page1draw() {
    image(img, -50 + -(mouseX * 0.1), -50 + -(mouseY * 0.1), 1100,700);
    if (circThere)
    {
        image(img2, 500 + -(mouseX * 0.2), 300 + -(mouseY * 0.2), 100,100);
    }
    else
    {
        image(img3, 500 + -(mouseX * 0.2), 300 + -(mouseY * 0.2), 100,100);
    }

    circMinX = 440
    circMaxX = 480
    circMinY = 270
    circMaxY = 315

    if (mouseIsPressed && mouseX > circMinX && mouseX < circMaxX && mouseY > circMinY && mouseY < circMaxY)
    {
        circThere = !circThere;
        mouseIsPressed = false;
    }
}

function mousePressed() {
    mouseIsPressed = true;
}