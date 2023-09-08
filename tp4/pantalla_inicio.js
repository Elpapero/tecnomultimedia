function pantallaInicio(){
  
  background(11, 53, 113);
  push();
  fill(0);
  rect(22, 250, 560, 100);
  textSize(40);
  fill(245);
  textAlign(CENTER, CENTER);
  text("¡Evita colisionar con las pelotas!",height*0.5,width*0.5);
  pop();
  
  push();
  ellipseMode(CENTER);
  ellipse(300, 400, 100, 75);
  textSize(20);
  fill(0);
  textAlign(CENTER, CENTER);
  text("Play", height*0.5, 400);
  pop();
  
}
