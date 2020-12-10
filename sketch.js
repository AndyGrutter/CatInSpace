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
    drawingBImg2 = loadImage("Assetination/bluelight.png");
    page3BgImg = loadImage("Assetination/quartier1 1.png");
    page3BoxImg = loadImage("Assetination/openbox 1.png");
    page3GameImg = loadImage("Assetination/gamebox.png");
    catLookingImg = loadImage("Assetination/cat_lookingAROUND3.gif")
    catLookBoxImg = loadImage("Assetination/catlookatbox.png")
    livingRoomImg = loadImage("Assetination/livingroom.jpg")
    tvImg = loadImage("Assetination/tv.png")
    spaceshipImg = loadImage("Assetination/spaceship.png");
    blackImg = loadImage("Assetination/black.png");
    stars1Img = loadImage("Assetination/stars_F1.png");
    stars2Img = loadImage("Assetination/stars_F2.png");
    stars3Img = loadImage("Assetination/stars_F3.png");
    stars4Img = loadImage("Assetination/stars_F4.png");
    catBackImg = loadImage("Assetination/catback.png")
    sofaImg = loadImage("Assetination/livingroom_sofa.png");
    dream1Img = loadImage("Assetination/dreamy_F1.png");
    dream2Img = loadImage("Assetination/dreamy_F2.png");
    dream3Img = loadImage("Assetination/dreamy_F3.png");
    dream4Img = loadImage("Assetination/dreamy_F4.png");
    bubbleImg = loadImage("Assetination/dreambubblewithrocket.png");
    rocketcatImg = loadImage("Assetination/catrocketinbubble.png");
    blanketImg = loadImage("Assetination/blanketlayer.png");

    garageImg = loadImage("Assetination/garageBG2.png")
    catSitting = loadImage("Assetination/Cat2.png");
    hammerImg = loadImage("Assetination/hammer2.png");
    wrenchImg = loadImage("Assetination/wrench3.png");
    pinktoolImg = loadImage("Assetination/tool3.png");
    rocketImg = loadImage("Assetination/rocket2.png");
    rocketCat2Img = loadImage("Assetination/rocketwithcat2.png");

    spaceImg = loadImage("Assetination/spaceBG.png");
    starsinspaceImg = loadImage("Assetination/stars_layer.png");

    dingdongSound = createAudio("Assetination/sound/dingdong.mp3");
    meowSound = createAudio("Assetination/sound/meowmeow.mp3");
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

    showDingDong = false;
    showedDingDong = false;
    page1Timer = 0;

    // page 2
    image1 = new OurImage(img, 0, 0, 15, 1, 1)
    chairtable = new OurImage(chairtableImg, 100, 350, 12, .35, .45);
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
    drawingBlue2 = new OurImage(drawingBImg2, 240, 110, 4, 0.5, 0.8);

    currenntHighlightRotation = 0;

    // page 4
    livingRoom = new OurImage(livingRoomImg, 0, 0, 20, 1, 1);
    tv = new OurImage(tvImg, 230, 65, 15, 0.6, 0.6);
    black = new OurImage(blackImg, 330, 160, 15, 0.412, 0.34);
    stars = new OurImage(stars1Img, 280, 155, 15, 0.467, 0.395);
    spaceship= new OurImage(spaceshipImg, 230, 65, 15, 0.06, 0.1);

    framesUntilStarsSwitch = 10
    starCounter = 0;

    catBack = new OurImage(catBackImg, 450, 345, 7, 0.5, 0.5);

    // page 5
    sofaBG = new OurImage(sofaImg, 0, 0, 20, 1, 1);
    dream = new OurImage(dream1Img, 20, 120, 17, 0.9, 0.7);
    
    bubble = new OurImage(bubbleImg, 600, 0, 15, 0.4, 0.6);
    catBubble = new OurImage(rocketcatImg, 600, 0, 15, 0.4, 0.6);
    blanket = new OurImage(blanketImg, 0, 0, 10, 1, 1);

    framesUntilDreamSwitch = 30
    dreamCounter = 0;
   

    // page 6
    garageBG = new OurImage(garageImg, 0, 0, 20, 1, 1);
    catSittingLeft = new OurImage(catSitting, 6, 405, 10, 0.28, 0.4);
    hammer = new OurImage(hammerImg, 800, 250, 15, 0.33, 0.5);
    wrench = new OurImage(wrenchImg, 770, 0, 15, 0.33, 0.5)
    tool = new OurImage(pinktoolImg, -100, 100, 15, 0.33, 0.5);
    rocket = new OurImage(rocketImg, 350, 170, 17, .3, .6);
    catRocket = new OurImage(rocketCat2Img, 350, 170, 17, 0.3, 0.6);

    catInRocket = false;
    catUpYVelocity = 0;
    catUpYStep = 0.01;

    timeInAir = 0;
    timeTillGoToSpace = 3000;

    // page 7
    space = new OurImage(spaceImg, 0, 0, 20, 1, 1);
    starsonspace = new OurImage(starsinspaceImg, 0, 0, 12, 1, 1); 
}

function draw() {
    tick++;

    if (page == 1) {
        page1draw();
    } else if (page == 2) {
        page2draw();
    } else if (page == 3) {
        page3draw();
    } else if (page == 4) {
        page4draw();
    } else if (page == 5) {
        page5draw();
    }
    else if (page == 6) {
        page6draw();
    }
    else if (page == 7) {
        page7draw();
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

    if (cat.IsHovered())
    {
        meowSound.play();
    }

    if (interiorBG.IsClicked()) {

        if (showDingDong) {
            page = 2;
        }
        showDingDong = true;

        if (!showedDingDong)
        {
            dingdongSound.play();
        }
        showedDingDong = true;
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
    drawImage(drawingYellow1, Math.sin(tick / 40) * 0.1, 60, 60);
    drawImage(drawingYellow2, -(Math.sin(tick / 40) * 0.1), 60, 60);
    drawImage(catLookBox);

    
    if (catLookBox.IsHovered())
    {
        meowSound.play();
    }

    if (frontPorchBox.IsClicked() && boxClickCounter < 3) {
        boxJumpVelocity = 15 + (boxClickCounter * 2);
        boxClickCounter++;
    }
    frontPorchBox.y += boxGravity;
    frontPorchBox.y -= boxJumpVelocity;
    if (boxJumpVelocity > 0) {
        boxJumpVelocity -= 0.1;
    }
    if (frontPorchBox.y > boxGroundLevel) {
        frontPorchBox.y = boxGroundLevel;
    }

    if (boxClickCounter >= 3) {
        boxOpenTimer++;
        frontPorchBox.img = porchBoxOpenImg;
    }

    if (boxOpenTimer >= boxOpenInFrames) {
        page = 3;
    }
}

function page3draw() {

    currenntHighlightRotation += 0.03
    drawImage(page3BG);
    drawImage(page3Box);
    drawImage(dot);
    drawImage(drawingBlue2, currenntHighlightRotation, 250, 250);
    drawImage(page3Game, sin(tick / 20) * 0.1, 100, 90);
    drawImage(catLooking);

    if (catLooking.IsHovered())
    {
        meowSound.play();
    }

    if (page3BG.IsClicked()){
        page = 4;
    }
}

function page4draw() {
    spaceship.x = mouseX-50;
    spaceship.y = mouseY-50;

    if (spaceship.x > 700) { spaceship.x = 700 }
    if (spaceship.x < 320) { spaceship.x = 320 }
    if (spaceship.y > 320) { spaceship.y = 320 }
    if (spaceship.y < 170) { spaceship.y = 170 }

    if (tick%framesUntilStarsSwitch == 0)
    {
        starCounter++;
        if (starCounter > 3)
        {
            starCounter = 0;
        }
    }

    switch(starCounter) {
        case 0:
            stars.img = stars1Img;
            break;
        case 1:
            stars.img = stars2Img;
            break;
        case 2:
            stars.img = stars3Img;
            break;
        case 3:
            stars.img = stars4Img;
            break;
        default:
            break;
    }

    drawImage(livingRoom);
    drawImage(dot);
    drawImage(tv);
    drawImage(black);
    drawImage(stars);
    drawImage(spaceship);
    drawImage(catBack);

    if (catBack.IsHovered())
    {
        meowSound.play();
    }

    if (livingRoom.IsClicked()){
        page = 5;
    }
    
}

function page5draw() {

    if (tick%framesUntilDreamSwitch == 0)
    {
        dreamCounter++;
        if (dreamCounter > 3)
        {
            dreamCounter = 0;
        }
    }

    switch(dreamCounter) {
        case 0:
            dream.img = dream1Img;
            break;
        case 1:
            dream.img = dream2Img;
            break;
        case 2:
            dream.img = dream3Img;
            break;
        case 3:
            dream.img = dream4Img;
            break;
        default:
            break;
    }

    drawImage(sofaBG);
    drawImage(dot);
    drawImage(dream);
    drawImage(bubble);
    drawImage(catBubble);
    drawImage(blanket);

    if (catBubble.IsHovered())
    {
        meowSound.play();
    }

    if (bubble.IsClicked()){
        page = 6;
    }
    
}

function page6draw() {
    drawImage(garageBG);

    if (hammer.IsHovered()) {
        drawImage(hammer, -0.5, 120, 170);
    }
    else { drawImage(hammer) }

    if (wrench.IsHovered()) {
        drawImage(wrench, 0.3, 120, 170);
    }
    else { drawImage(wrench) }

    if (tool.IsHovered()) {
        drawImage(tool, 0.3, 120, 170);
    }
    else { drawImage(tool) }

    drawImage(dot);

    if (!catInRocket){
        drawImage(catSittingLeft);

        if (catSittingLeft.IsHovered())
        {
            meowSound.play();
        }
    }

    drawImage(rocket);

    if (rocket.IsClicked()){
        rocket.img = rocketCat2Img;
        catInRocket = true;
    }
    if (catInRocket)
    {
        catUpYVelocity += catUpYStep * deltaTime;
        rocket.y -= catUpYVelocity;

        timeInAir += deltaTime;
        if (timeInAir >= timeTillGoToSpace)
        {
            page = 7;
        }
    }
}

function page7draw(){
    catRocket.x = mouseX + -170;
    catRocket.y = mouseY + -300;

    drawImage(space);
    drawImage(catRocket);
    drawImage(starsonspace);
    

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