function pantallaPerdio(){

  background(255, 0, 0);
  push();
  fill(0);
  rect(22, 250, 560, 100);
  textSize(22);
  fill(245);
  textAlign(CENTER, CENTER);
  text("¡Que macana! Segui jugando para mejorar esos reflejos",height*0.5,width*0.5);
  pop();
  
  push();
  ellipseMode(CENTER);
  ellipse(300, 400, 100, 75);
  textSize(20);
  fill(0);
  textAlign(CENTER, CENTER);
  text("Inicio", height*0.5, 400);
  pop();

}
