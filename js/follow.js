
let canvas;
let xPos = 0;
let yPos = 0;
let easing = .05;

let img;

function preload() {
  img = loadImage('/assets/stuff-tiny.png');
}

function setup(){
    canvas2 = createCanvas (windowWidth, windowHeight);
    canvas2.position(0,0); //this is making the position fixed
    canvas2.style("z-index", 3);
    // background (225);
}

function windowResized (){
    resizeCanvas(windowWidth, windowHeight); //everytime we change the window size the canvas will resize to match
}

function draw (){
    clear();

    //OFFSET
    xPos = xPos + ((mouseX - xPos) * easing);
    yPos = yPos + ((mouseY - yPos) * easing);

    drawThing(xPos, yPos);
    console.log ("test");
}

function mouseMoved (){
    drawThing(mouseX, mouseY);
}


function drawThing (_x,_y){
    // strokeWeight (0);
    // fill (random(200,255),random(200,255),random(200,255));
     image(img, _x, _y);

}
