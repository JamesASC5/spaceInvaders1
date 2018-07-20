// Make canvas 
// Make backgound black
// Make the boxes white
// Make 1 roww of boxes at the top of the cnavas
// Make ship
// move ship left to right with keys
// shoot with spacebar
// Make boxes at top of canvas move
// If projectile hits a box the box disappears

let x1=300
let y1=635

let x2= 328
let y2=600

let x3= 356
let y3 = 635


let bulletx= x2
let bullety=y2 + 25
let color = "white"

const bulletsize = 10;
let bulletspeed= 0
let bulletSpeed = 1
const invaders = [];
const bullets = [];

const number_of_boxes_in_row =9;
const number_of_boxes_in_column = 4;

let box_width, box_height;

box_height = 60;
box_width = 60;


function setup(){
  createCanvas(650,650);
  background("black")
}
function draw(){
   background(0);
  for(let i = 1; i < number_of_boxes_in_row ; i++){
      const x = (i * box_width) * 1.15;
     
      for (let j = 1; j < number_of_boxes_in_column; j++){
          const y = (j * box_height) * 1.5;

    if(bulletx && bullety === invaders[0]){
        invaders.push([x,y])
    }  
         
           fill(color)
       rect(x,y,box_width,box_height)
      }
  } rect(100,525,40,40)
  rect(60,525,40,40);
  rect(20,525,40,40);
  rect(300,525,40,40);
  rect(260,525,40,40);
  rect(340,525,40,40);
  rect(500,525,40,40);
  rect(460,525,40,40);
  rect(540,525,40,40);

  ellipse(bulletx, bullety, 15, 15);

  if (bulletspeed === 0) {
   bulletx = x2;
  } if(bullety < 0){
    bulletspeed = 0 ;
    bulletx = x2 ;
    bullety = y2;
  } 
 
  bullety -= bulletspeed
 
  if (keyIsDown(LEFT_ARROW)) {
 
   x1=x1-10
   x2=x2-10
   x3=x3-10
     
  } else if (keyIsDown(RIGHT_ARROW)) {
   
   x1=x1+10
   x2=x2+10
   x3=x3+10
  }
 
  if(keyIsDown(32)) {
    bulletspeed = 35
   }

  fill("red");
  triangle(x1, y1, x2, y2, x3, y3);


}
const customFill = function(i,y){
  const j = y/box_height;
  fill(255/number_of_boxes_in_row * (i+1), 100, 255/number_of_boxes_in_column * (j+1) );
} 



    
    




   

