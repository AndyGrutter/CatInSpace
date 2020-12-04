let img;
let circThere = true;
let page = 1;
let mouseIsPressed = false;

let canvasWidth = 1000
let canvasHeight = 600

let tick = 0;

function preload() {
    img = loadImage('Assetination/Doorbackground.jpg');
    img2 = loadImage('Assetination/fg.png');
    img3 = loadImage('Assetination/fg2.png');
    chairtableImg = loadImage("Assetination/chairtable.png");
    porchFGImg = loadImage("Assetination/layerfrontporch.png");
    porchBoxImg = loadImage("Assetination/pinkbox.png");
    porchBoxOpenImg = loadImage("Assetination/pinkboxOPEN.png");
    interiorBGImg = loadImage("Assetination/insidebg.png");
    pinkplantImg = loadImage("Assetination/Ebene 1.png")
    pillowImg = loadImage("Assetination/Ebene 4.png");
    chairImg = loadImage("Assetination/Ebene 3.png");
    catbedImg = loadImage("Assetination/catandbed.png");
    dingimg = loadImage("Assetination/ding.png");
    dongimg = loadImage("Assetination/dong.png");
    dotsimg = loadImage("Assetination/dottexture.png");
    drawingYImg = loadImage("Assetination/lightyellow.png");
    drawingBImg = loadImage("Assetination/bluelight.png");
    page3BgImg = loadImage("Assetination/quartier1 1.png");
    page3BoxImg = loadImage("Assetination/openbox 1.png");
    page3GameImg = loadImage("Assetination/gamebox.png");
    catLookingImg = loadImage("Assetination/cat_lookingAROUND3.gif")
    catLookBoxImg = loadImage("Assetination/catlookatbox.png")
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);


    // page 1
    interiorBG = new OurImage(interiorBGImg, 0, 0, 20, 1, 1);
    ding = new OurImage(dingimg, 50, 50, 20, 0.17, 0.15);
    dong = new OurImage(dongimg, 80, 140, 20, 0.17, 0.15);
    dot = new OurImage(dotsimg, 0, 0, 20, 1, 1);
    pinkplant = new OurImage(pinkplantImg, 730, 120, 16, 0.3, 0.5);
    pillow = new OurImage(pillowImg, 500, 250, 16, 0.15, 0.2);
    chair = new OurImage(chairImg, 100, 200, 16, 0.2, 0.5);
    cat = new OurImage(catbedImg, 300, 370, 16, 0.35, 0.35);

    showDingDong = false
    page1Timer = 0;

    // page 2
    image1 = new OurImage(img, 0, 0, 15, 1, 1)
    chairtable = new OurImage (chairtableImg, 100, 350, 12, .35, .45);
    frontPorchFG = new OurImage(porchFGImg, 0, 0, 10, 1, 1)
    frontPorchBox = new OurImage(porchBoxImg, 440, 480, 12, .15, .2)
    drawingYellow1 = new OurImage(drawingYImg, 250, 150, 12, .15, .2);
    drawingYellow2 = new OurImage(drawingYImg, 610, 150, 12, .15, .2);
    drawingBlue = new OurImage(drawingBImg, 440, 480, 12, .15, .2);
    image2 = new OurImage(img2, canvasWidth / 10, canvasHeight / 2, 30, 0.1, 0.2)
    image3 = new OurImage(img3, canvasWidth / 10, canvasHeight / 2, 30, 0.1, 0.2)
    catLookBox = new OurImage(catLookBoxImg, 600, 450, 11, .15, .25)

    boxClickCounter = 0;
    boxJumpVelocity = 0;
    boxGravity = 14;
    boxGroundLevel = frontPorchBox.y;
    boxOpenTimer = 0;
    boxOpenInFrames = 200;

    // page 3
    page3BG = new OurImage(page3BgImg, 0, 0, 20, 1, 1);
    page3Box = new OurImage(page3BoxImg, 200, 120, 40, .6, .7);
    page3Game = new OurImage(page3GameImg, 400, 250, 40, .2, .35);
    catLooking = new OurImage(catLookingImg, 500, 300, 50, .5, .5);
}

function draw() {
    tick++;

    if (page == 1) {
        page1draw();
    } else if (page == 2) {
        page2draw();
    } else if (page == 3) {
        page3draw();
    }
}

function page1draw() {
    drawImage(interiorBG);

    if (pinkplant.IsHovered()) {
        drawImage(pinkplant, 0.3, 150, 150);
    }
    else { drawImage(pinkplant) }

    if (pillow.IsHovered()) {
        drawImage(pillow, 0.3, 80, 40);
    }
    else { drawImage(pillow) }

    if (chair.IsHovered()) {
        drawImage(chair, 0.3, 120, 170);
    }
    else { drawImage(chair) }

    drawImage(dot);

    drawImage(cat);

    if (interiorBG.IsClicked()) {

        if (showDingDong) {
            page = 2;
        }
        showDingDong = true;
    }
    if (showDingDong) {
        page1Timer += deltaTime;
        drawImage(ding);
    }
    if (page1Timer > 400) {
        drawImage(dong);
    }
}

function page2draw() {
    drawImage(image1);
    drawImage(chairtable);
    drawImage(frontPorchFG);
    drawImage(drawingBlue);

    drawImage(dot);
    drawImage(frontPorchBox);
    drawImage(drawingYellow1, Math.sin(tick/40) * 0.1, 60, 60);
    drawImage(drawingYellow2, -(Math.sin(tick/40) * 0.1), 60, 60);
    drawImage(catLookBox);

    if (frontPorchBox.IsClicked() && boxClickCounter < 3)
    {
        boxJumpVelocity = 15 + (boxClickCounter * 2);
        boxClickCounter++;
    }
    frontPorchBox.y += boxGravity;
    frontPorchBox.y -= boxJumpVelocity;
    if (boxJumpVelocity > 0)
    {
        boxJumpVelocity -= 0.1;
    }
    if (frontPorchBox.y > boxGroundLevel)
    {
        frontPorchBox.y = boxGroundLevel;
    }

    if (boxClickCounter >= 3)
    {
        boxOpenTimer++;
        frontPorchBox.img = porchBoxOpenImg;
    }

    if (boxOpenTimer >= boxOpenInFrames)
    {
        page = 3;
    }
}

function page3draw() {
    drawImage(page3BG);
    drawImage(page3Box);
    drawImage(dot);
    drawImage(page3Game, sin(tick/20) * 0.1, 100, 90);
    drawImage(catLooking)
}


function drawImage(ourImg, rotation = 0, rotationXOffset = 0, rotationYOffset = 0) {
    let imgX = ourImg.x - ourImg.parallaxOffset + ((mouseX / canvasWidth) * ourImg.parallaxOffset)
    let imgY = ourImg.y - ourImg.parallaxOffset + ((mouseY / canvasHeight) * ourImg.parallaxOffset)
    translate(imgX + rotationXOffset, imgY + rotationYOffset)
    rotate(rotation)
    translate(-(imgX + rotationXOffset), -(imgY + rotationYOffset))
    image(ourImg.img, imgX, imgY, (canvasWidth + ourImg.parallaxOffset * 2) * ourImg.width, (canvasHeight + ourImg.parallaxOffset * 2) * ourImg.height);
    translate(imgX + rotationXOffset, imgY + rotationYOffset)
    rotate(-rotation)
    translate(-(imgX + rotationXOffset), -(imgY + rotationYOffset))
}

function mousePressed() {
    mouseIsPressed = true;
}

class OurImage {
    constructor(img, x, y, parallaxOffset, width, height) {
        this.img = img;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.parallaxOffset = parallaxOffset;
    }

    IsClicked() {

        let circMinX = this.x;
        let circMaxX = this.x + this.width * canvasWidth;
        let circMinY = this.y;
        let circMaxY = this.y + this.height * canvasHeight;

        if (mouseIsPressed && mouseX > circMinX && mouseX < circMaxX && mouseY > circMinY && mouseY < circMaxY) {
            mouseIsPressed = false;
            return true;
        }

        if (mouseIsPressed) {
            mouseIsPressed = false;
        }

        return false;
    }
    IsHovered() {

        let circMinX = this.x;
        let circMaxX = this.x + this.width * canvasWidth;
        let circMinY = this.y;
        let circMaxY = this.y + this.height * canvasHeight;

        if (mouseX > circMinX && mouseX < circMaxX && mouseY > circMinY && mouseY < circMaxY) {
            return true;
        }



        return false;
    }
}