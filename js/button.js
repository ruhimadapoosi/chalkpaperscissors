
let canvas;


let btn; 

function preload() {
  btn = loadImage('assets/btn-green.png');
}

function setup(){
    canvas = createCanvas (windowWidth, windowHeight);
    canvas.position(0,0); //this is making the position fixed
    canvas.style("z-index", -1);
    // background (225);
}

function windowResized (){
    resizeCanvas(windowWidth, windowHeight); //everytime we change the window size the canvas will resize to match
}


function mouseClicked (){
    image(btn, mouseX -25, mouseY -25);
}

