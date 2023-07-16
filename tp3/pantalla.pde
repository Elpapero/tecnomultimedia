void dibujaPantalla( PImage fondo, String texto) {
  push();
  imageMode(CORNER);
  image(fondo, 0, 0, width, height);
  fill(0,150);
  rectMode(CORNER);
  rect(0, height/3*2, width, height/3);
  fill(255);
  textSize(30);
  textLeading(40);
  textAlign(CENTER, CENTER);
  text( texto, 0, height/3*2, width, height/3);
  pop();
}

void dibujaPantalla2(PImage fondo, String texto) {
  
  push();
  imageMode(CORNER);
  image(fondo, 0, 0, width, height);
  fill(0,150);
  rectMode(CORNER);
  rect(0, height/6*2, width, height/3);
  fill(255);
  textSize(20);
  textLeading(40);
  textAlign(CENTER, CENTER);
  text( texto, 0, height/6*2, width, height/3);
  pop();
  


}
