function pantallaCreditos() {
 
  background(11, 53, 113);
  push();
  fill(0);
  rect(22, 250, 560, 100);
  textSize(35);
  fill(245);
  textAlign(CENTER, CENTER);
  text("Creador: Devoto nicolás",height*0.5,width*0.5);
  pop();
  
  push();
  fill(0);
  rect(185, 435, 235, 30);
  pop();
  
  push();
  textSize(20);
  fill(245);
  textAlign(CENTER, CENTER);
  text("Profesor: David Bedoian", height*0.50,width*0.75);
  pop();
  
  push();
  push();
  ellipseMode(CENTER);
  ellipse(height*0.50, 520, 100, 75);
  textSize(20);
  fill(0);
  textAlign(CENTER, CENTER);
  text("Atrás", height*0.5, 520);
  pop();
  pop();
}
