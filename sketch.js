var tgroup, collidergroup, obgroup;

var player, panimation, pidle, pjump, pdeath;

var tutorial, gamestate = true;
var GOimg;

var levelState = 0

var menu;

var bgMusic;

var basew = 160;
var baseh = 90;


// kronovi-  --- Dyso
//LuizMelo --- Gyo
// edermunizz -- Forest Bg
//Platforms --- Maaot

// To Do List: DMOG
// Better Speechboxes 


// If done with game then disable spacebar speech though
function preload(){
  bgMusic = loadSound("BgMusic1.wav")
  endImg = loadImage("lvl1/End Screen.jpeg")
}


function setup() {
  
  tgroup = createGroup()
  collidergroup = createGroup()
  obgroup = createGroup()

  menu = new MainMenu()
  
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(200); 

  menu.play()

  drawSprites();
}