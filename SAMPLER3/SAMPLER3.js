var font1, words, pangram,fontSize;
var myText = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ       abcdefghiklmnopqrstuvwxyz!?.,\:\;\[\]       0123456789 <>/\\@#$%&=+-×÷*      ';
var size = 46;
var pangram = 'Sixty zippers were quickly picked from the woven jute bag.             ';
//var listOfColors = [color('#FF9AA2'), color('#FFDAC1'), color('E2F0CB'), color('#B5EAD7'), color('#C7CEEA')];
  
var colors;

var sound;

//let bite;

function preload() {
        
 font1 = loadFont('data/GummyBear3.otf');
 
 bite = loadImage('data/bite.png'); 

  
    // Initialize sound
    soundFormats('mp3', 'ogg');
    sound = loadSound('data/chomp.mp3');
}

function setup() {
 createCanvas(windowWidth,windowHeight);
 background(255);
 fill(0);
 noStroke();
 textFont(font1);
 
purple = color(168, 111, 186);
blue = color(159, 195, 255);
red = color(210, 8, 45);
green = color(139, 230, 180);
pink = color(247, 139, 209);
yellow = color(245, 215, 122);

colors = [purple, blue, red, green, pink, yellow];

 words = myText.split(' ');
 textSize(46);
 fontSize =(height/10);
 testText = "A";
 
   
}


function draw() {
  
//text borders to stop them from being eaten  
push();
fill(255);
rect(410, 90, 670, 55);
pop(); 

push();
fill(255);
rect(410, 600, 720, 180);
pop();  
   
//all glyphs  
push();
textSize(46);
textAlign(CENTER);
text(myText, 410, 600,800,width/2,height/2);
pop();

//pangram
push();
textSize(23);
textAlign(CENTER);
text(pangram, 415, 100,800,width/2,height/2);
pop();

}

function mouseClicked(){
  push();
  image(bite,mouseX,mouseY,200,200);
  //fill(255);
  //ellipse(mouseX, mouseY, 100, 100);
  pop();
  //sound.setVolume(1.0);
  sound.play();
  

}

function keyTyped(){
  testText=key;
  background(255);
  
push();
textSize(400);
textAlign(CENTER); 
//fill(46,244,100);
//fill(listOfColors[int(random(0, listOfColors.length))]);
//fill(random(100, 255), random(100, 255), random(100,255));
fill(colors[int(random(0,5))]); 
text(testText,width/2,height/2);
pop();
 
}
