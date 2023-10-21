class Inicio {

  draw() {
    background(11, 53, 113);

    push();
    textSize(20);
    fill(245);
    textAlign(CENTER, CENTER);
    text("Esquiva durante 15 segundos para lograr ganar", 300, 200);
    pop();

    push();
    fill(0);
    rect(22, 250, 560, 55);
    textSize(40);
    fill(245);
    textAlign(CENTER, CENTER);
    text("¡Evita colisionar con las piedras!", 300, 275);
    pop();

    push();
    ellipseMode(CENTER);
    ellipse(300, 400, 100, 75);
    textSize(20);
    fill(0);
    textAlign(CENTER, CENTER);
    text("Play", 300, 400);
    pop();

    push();
    ellipseMode(CENTER);
    ellipse(300, 550, 100, 75);
    textSize(20);
    fill(0);
    textAlign(CENTER, CENTER);
    text("Créditos", 300, 550);
    pop();
  }
}
