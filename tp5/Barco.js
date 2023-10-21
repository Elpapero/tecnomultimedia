//Clase Barco

class Barco{

  constructor(){
    //Definiciones del Barco
    this.x = 15;
    this.y = 100;
    this.img = loadImage("data/BarcoPirata.png");
    this.t = 30;
    this.vel = 2;
  }
  
  draw() {
  
     this.mover();
     this.dibujar();
     
  }
  //Lógica para moverse con la A,W,S,D
   mover() {
     if (keyIsDown(68)) { // 
      this.x += this.vel;
    }
    if (keyIsDown(65)) { //
      this.x -= this.vel;
    }
    if (keyIsDown(83)) { // 
      this.y += this.vel;
    }
    if (keyIsDown(87)) { //
      this.y -= this.vel;
    }
  }
  
  colision(obstaculos) {
    //Colision con los obstaculos
    //calculamos diferencias entre la x y la y entre el barco y los obstaculos
    let distanciaX = abs(this.x - obstaculos.x);
    let distanciaY = abs(this.y - obstaculos.y);
    //calculo mitades para precisión con las colisiones
    let mitadAnchoBarco = this.t /2;
    let mitadAltoBarco = this.img.height / 2;
    let mitadAnchoObstaculos = obstaculos.t / 2;
    let mitadAltoObstaculos = obstaculos.img.height / 2;
    //corroboro la colisión
    if (distanciaX < mitadAnchoBarco + mitadAnchoObstaculos && distanciaY < mitadAltoBarco + mitadAltoObstaculos ){
      console.log("Colision barco");
  
    }
  }
  
  dibujar(){
    //dibujo el barco
    push();
    translate(this.x, this.y);
    image(this.img, this.x, this.y, 175, 175);
    pop();
  }
  
}
