function setup() {
  createCanvas(400, 400);
}

function draw() {

  //Smile
  background(200,255,200); //make this red
  //Border
  stroke('green');
  strokeWeight(3);
  noFill();
  square(30,30,340);
  //Eyes
  stroke('green');
  fill('green');
  square(90,90,40);
  square(270,90,40);
  //Mouth
  stroke('green');
  fill('green');
  square(90,200,40);    //make him frown
  rect(130,240,140,40);
  square(270,200,40);
  //Text 
  stroke(230,255,232);
  fill(230,255,232);
  rect(50,320,300,30);
  fill('green');
  textSize(20);
  textFont('Courier New');
  noStroke();
  text(">>text here", 60,340);


}

