PImage img;

void setup(){

size(800,400);
background(#7C95AF);
//Cargo la imagen
img = loadImage("DevotoNicolasRetrato");

}

void draw(){
  //Invoco la imagen por medio de una variable
  image(img,400,0,400,400);
  //Dibujo de la cara
  strokeWeight(3);
  fill(255,210,175);
  ellipse(200,200,200,210);
  //Dibujo de los ojos
  fill(247,247,247);
  ellipse(150,170,50,40);
  fill(247,247,247);
  ellipse(247,170,50,40);
  strokeWeight(9);
  point(150,170);
  point(247,170);
  //Dibujo de la boca, la nariz y las cejas
  strokeWeight(5);
  noFill();
  bezier(170,240,170,240,200,250,240,230);
  noFill();
  bezier(200,220,180,180,200,200,200,170);
  noFill();
  bezier(178,157,165,142,139,140,123,152);
  noFill();
  bezier(216,155,237,140,258,141,272,155);
  //Dibujo de las orejas
  strokeWeight(3);
  fill(255,210,175);
  bezier(103,219,93,214,88,176,104,177);
  fill(255,210,175);
  bezier(297,218,310,203,309,178,295,179);
  //Dibujo del pelo
  strokeWeight(10);
  line(121,112,175,136);
  line(135,108,185,136);
  line(154,99,200,132);
  line(164,88,209,127);
  line(135,97,194,136);
  line(145,87,221,128);
  line(166,77,229,127);
  line(196,80,236,122);
  line(214,85,251,122);
  line(178,73,229,125);
  line(221,74,266,125);
  line(205,74,277,120);
  strokeWeight(13);
  noFill();
  bezier(131,126,106,154,110,166,106,174);
  noFill();
  strokeWeight(11);
  bezier(271,132,282,147,290,162,295,176);
  
  
  
}
