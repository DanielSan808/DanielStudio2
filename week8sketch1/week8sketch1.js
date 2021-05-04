var font1, words;
var myText = 'Dune Dune is a 1965 science fiction novel by American author Frank Herbert, originally published as two separate serials in Analog magazine. It is the first installment of the Dune saga; further, in 2003, it was cited as the worlds best selling science fiction novel';
var size = 46;


  function preload(){
    
      font1 = loadFont('data/DevilBreeze.ttf');
  
}

function setup() {
 createCanvas(windowWidth,windowHeight);
 background(200,178,128);
 textFont(font1);
 words = myText.split(' ');
 textSize(46);
 //textLeading(46*1.5);
 fill(255);
 
}


function draw() {
background(200,178,128);
//text(myText, width/20, height/20,0.9*width,0.9*height,300);
for (var i=0; i<words.length; i++){
 if (frameCount>25*i){
  text(words[i], 650,i*size);
  
  
}
}
}
