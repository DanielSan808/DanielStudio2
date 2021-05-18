var font1, words, pangram,fontSize;
var myText = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ     abcdefghiklmnopqrstuvwxyz!?.,\:\;\[\]          0123456789 <>/\\@#$%&=+-×÷*';
var size = 46;
var pangram = 'Sixty zippers were quickly picked from the woven jute bag.'


  function preload(){
    
      font1 = loadFont('data/GummyBear2.otf');
  
}

function setup() {
 createCanvas(windowWidth,windowHeight);
 background(255);
 fill(0);
 noStroke();
 textFont(font1);
 words = myText.split(' ');
 textSize(46);
 //textLeading(46*1.5);
 fontSize =(height/10);
 testText = "A";
 
 
}


function draw() {
  
//all glyphs  
push()
background(255);
textSize(46);
//text(myText, width/20, height/20,0.9*width,0.9*height,300);
text(myText, 410, 600,800,700,300);
pop()

//pangram
push()
textSize(23);
text(pangram, 415, 100,800,700,300);
pop()

//keypress
push()
textSize(400);
text(testText,width/2,height/2);
fill(0);

}

function keyTyped(){
  testText=key;
pop()

}
