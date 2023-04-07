void setup(){

size(400,400);
background(#7C95AF);
}

void draw(){
  
  strokeWeight(3);
  fill(255,210,175);
  ellipse(200,200,200,205);
  fill(247,247,247);
  ellipse(150,170,50,40);
  fill(247,247,247);
  ellipse(247,170,50,40);
  strokeWeight(9);
  point(150,170);
  point(247,170);
  strokeWeight(5);
  noFill();
  bezier(170,240,170,240,200,250,240,230);
  noFill();
  bezier(200,220,180,180,200,200,200,170);
  noFill();
  bezier(178,157,165,142,139,140,123,152);
  noFill();
  bezier(216,155,237,140,258,141,272,155);
  
  strokeWeight(3);
  fill();
  bezier(101,221,88,192,91,171,102,175);
  println(mouseX + "," + mouseY);
  
}
