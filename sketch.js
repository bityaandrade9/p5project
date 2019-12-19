var t=0
function setup() {
  createCanvas(900, 200);
  background(200);
  fill(255, 255, 102); 
}
function draw() {
  line(750, 60, 850, 150);
  strokeWeight(5);
  triangle(80+t,125,108+t, 70, 136+t,125);
  textSize(18);
  textFont("Garamond");
  text("Click the Triangle",10,45);
}
function mousePressed() {
  createCanvas(900, 200);
  background(200);
  fill(255, 255, 102);
  t=t+60;
  
}