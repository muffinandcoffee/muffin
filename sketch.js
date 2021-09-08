let song1;
let song2;
let song3;
let song4;

function setup() {
  song1 = loadSound('a.mp3');
   song2 = loadSound('b.mp3');
   song3 = loadSound('c.mp3');
   song4 = loadSound('d.mp3');
   createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(220);
  
    
  if(keyIsPressed==true) {
    
  if(keyCode==49) {
    ellipse(80,200,60,60);
  song1.play();
  }
  
  else if(keyCode==51) {
    ellipse(160,200,60,60);
    song2.play();
                              
  }
  
else if(keyCode==50) {
  ellipse(300,100,200,100);
  song3.play();
  
}  
  
    else if(keyCode==52) {
  ellipse(300,200,60, 60);
      song4.play();
  
}  
  
    
    
else {
  
  text("1,2,3 아닙니다, 다시눌러주세요", 200, 30);
  song1.stop();
   song2.stop();
   song3.stop();
   song4.stop();
}
  
  }
  
  
}
  
  
  
