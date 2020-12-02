let img;
let circThere = true;
let page = 2;
let mouseIsPressed = false;

let canvasWidth = 1000
let canvasHeight = 600

function preload() {
  img = loadImage('Assetination/Doorbackground.jpg');
  img2 = loadImage('Assetination/fg.png');
  img3 = loadImage('Assetination/fg2.png');
  porchFGImg = loadImage("Assetination/layerfrontporch.png");
  porchBoxImg = loadImage("Assetination/pinkbox.png");
  interiorBGImg = loadImage("Assetination/Page1.png");
}

function setup() {
  createCanvas(canvasWidth,canvasHeight);


  // page 1
  interiorBG = new OurImage(interiorBGImg, 0, 0, 20, 1, 1);

  // page 2
  image1 = new OurImage(img, 0, 0, 15, 1, 1)
  frontPorchFG = new OurImage(porchFGImg, 0, 0, 10, 1, 1)
  frontPorchBox = new OurImage(porchBoxImg, 440, 480, 12, .15, .2)
  image2 = new OurImage(img2, canvasWidth / 10, canvasHeight / 2, 30, 0.1, 0.2)
  image3 = new OurImage(img3, canvasWidth / 10, canvasHeight / 2, 30, 0.1, 0.2)
}

function draw() {
    if (page == 1)
    {
        page1draw();
    } else if (page == 2)
    {
        page2draw();
    }
}

function page1draw() {
    drawImage(image1);

    /*
    if (circThere)
    {
        drawImage(image2);
    }
    else
    {
        drawImage(image3);
    }

    if (image2.IsClicked())
    {
        circThere = !circThere;
    }

    */

    drawImage(frontPorchFG);
    drawImage(frontPorchBox);
}

function page2draw() {
    drawImage(interiorBG);
}

function drawImage(ourImg)
{
    image(ourImg.img, ourImg.x -ourImg.parallaxOffset + ((mouseX / canvasWidth) * ourImg.parallaxOffset), ourImg.y -ourImg.parallaxOffset + ((mouseY / canvasHeight) * ourImg.parallaxOffset), (canvasWidth + ourImg.parallaxOffset*2) * ourImg.width, (canvasHeight + ourImg.parallaxOffset*2) * ourImg.height);
}

function mousePressed() {
    mouseIsPressed = true;
}

class OurImage
{
    constructor(img, x, y, parallaxOffset, width, height)
    {
        this.img = img;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.parallaxOffset = parallaxOffset;
    }

    IsClicked()
    {
        let circMinX = this.x;
        let circMaxX = this.x + this.width * canvasWidth;
        let circMinY = this.y;
        let circMaxY = this.y + this.height * canvasHeight;

        if (mouseIsPressed && mouseX > circMinX && mouseX < circMaxX && mouseY > circMinY && mouseY < circMaxY)
        {
            mouseIsPressed = false;
            return true;
        }

        if (mouseIsPressed)
        {
            mouseIsPressed = false;
        }
        
        return false;
    }
}