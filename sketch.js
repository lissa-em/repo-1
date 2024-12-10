function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200,255,200);
  //Border
  stroke('green');
  strokeWeight(3);
  noFill();
  square(30,30,340);
  // eyes
  stroke('green');
  fill('green');
  square(90,90,40);
  square(270,90,40);
  //mouth
  stroke('green');
  fill('green');
  square(90,200,40);
  rect(130,240,140,40);
  square(270,200,40);


}
