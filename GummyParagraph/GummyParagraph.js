var font1, words;
var myText = 'This is my font which is under the working title of Gummy Bear. I have kerned my letters to be monospaced in FontForge then exported as a .OTF file. After this I have opened it into processing and set it as the very paragraph that you are reading now.';
var size = 46;


  function preload(){
    
      font1 = loadFont('data/GummyBear1.otf');
  
}

function setup() {
 createCanvas(windowWidth,windowHeight);
 background(0);
 textFont(font1);
 words = myText.split(' ');
 textSize(46);
 //textLeading(46*1.5);
 fill(255);
 
}


function draw() {
background(0);
text(myText, width/20, height/20,0.9*width,0.9*height,300);

 
}
