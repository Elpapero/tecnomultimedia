//Link de youtube: https://youtu.be/O7jCoWmY0Zo
//Devoto Nicolás 92821/7
//Profesor: David Bedoian

let xP, yP, rP, velXP;

let numPelotas = 15;
let pelotasX = [];
let pelotasY = [];
let pelotasRadio = [];
let pelotasVelX = [];
let pelotasVelY = [];

let estado = 0;

function setup() {

  createCanvas(600, 600);

  //personaje
  xP= width/2;
  rP= 10
    yP = height - rP - 5;


  tiempoInicio = millis(); //Registra el tiempo de inicio

  //Creación de las pelotas mediante vectores
  for (let i = 0; i < numPelotas; i++) {

    pelotasX[i] = random(width);
    pelotasY[i] = random(100, 200);
    pelotasRadio[i] = random(10, 40);
    pelotasVelX[i] = random(1, 3);
    pelotasVelY[i] = random(1, 3);
  }
}


function draw() {

  //pelotasemueve
  if (keyIsPressed === true) {
    if (keyCode === RIGHT_ARROW && xP < width - 40) {
      xP += 2*3;
    }
    if (keyCode === LEFT_ARROW && xP > width / 15) {
      xP -= 2*3;
    }
  }

  if (estado == 1) {
    // Incrementa el contador solo cuando el estado es igual a 1 (jugando)
    let tiempoActual = millis();
    let tiempoTranscurrido = (tiempoActual - tiempoInicio) / 1000;

    if (tiempoTranscurrido >= 10 && estado !== 2) {
      estado = 3;
    } else if (estado == 2 && tiempoTranscurrido > 10) {
      tiempoTranscurrido = 0;
    }
  } else if (estado == 0) {
    // Reinicia el contador cuando el estado es igual a 0
    tiempoTranscurrido = 0;
  }

  if (estado ==0) {
    pantallaInicio();
  } else if (estado ==1) {
    pantallaJugando();
  } else if (estado ==2) {
    pantallaPerdio();
  } else if (estado ==3) {
    pantallaGano();
  } else if (estado ==4) {
    pantallaCreditos();
  } else if (estado ==5) {
    pantallaControles();
  }
}

function mousePressed() {
  //Todos los botones
  if (estado == 0) {
    if (dist(mouseX, mouseY, 300, 400)<= 50) {
      estado = 1;
    }
    if (dist(mouseX, mouseY, 300, 550)<=50) {
      estado = 4;
    }
  } else if (estado == 4) {
    if (dist(mouseX, mouseY, height*0.5, 520)<=50) {
      estado = 0;
    }
  } else if (estado == 2) {
    if (dist(mouseX, mouseY, height*0.5, 400)<=50) {
      estado = 0;
    }
  } else if (estado == 3) {
    if (dist(mouseX, mouseY, height*0.5, 400)<=50) {
      estado = 0;
    }
  }
}
