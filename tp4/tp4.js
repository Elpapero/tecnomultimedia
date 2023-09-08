let xP, yP, rP, velXP;

let numPelotas = 8;
let pelotasX = [];
let pelotasY = [];
let pelotasRadio = [];
let pelotasVelX = [];
let pelotasVelY = [];

let estado = 0;

function setup() {
  
  createCanvas(600,600);
   //Creación de las pelotas mediante vectores
   for (let i = 0; i < numPelotas; i++) {
     
    pelotasX[i] = random(width);
    pelotasY[i] = random(height);
    pelotasRadio[i] = random(10, 40);
    pelotasVelX[i] = random(1, 3);
    pelotasVelY[i] = random(1, 3);
    
  
  }
}


function draw() {
  
  
  if (estado ==0){
    
    pantallaInicio();
  
  } else if (estado ==1){
  
    pantallaJugando();
  
  } else if (estado ==2){
  
    pantallaPerdio();
  
  } else if (estado ==3){
  
    pantallaGano();
  
  } else if (estado ==4){
  
    pantallaCreditos();
  
  } else if (estado ==5){
  
    pantallaControles();
  
  }
}

function mousePressed(){

  if (estado == 0){
    if (dist(mouseX, mouseY,300,400)<= 50){
      estado = 1;
    }
  }
}
