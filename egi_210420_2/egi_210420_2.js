var font1, rand; //random is blocked on p5js so use rand or other words but be consistent
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' ;
var listLength;

function preload (){
  font1 = loadFont('data/lesstensegotham.otf');
}
function setup() {
  createCanvas (windowWidth, windowHeight);
  background(126,164,246);
  fill (0);
  textSize (70);
  noStroke();
  textFont(font1);
  textAlign(CENTER);
  listLength=letters.length;
  frameRate(3);
}


function draw() {
  rand = int(random(0, listLength-1));
  textSize (random (20,70));
  //coding groups or lists start counting at 0
  background (126,164,246,10); 
  //this sharpens our font, by redrawing our background
  //text (letters[rand], width/2, height/2);
  text (letters [rand], random(width), random(height));

}
