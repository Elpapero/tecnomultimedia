class Ballena{

  constructor(){
    
    this.x = 0;
    this.y = 200;
    this.img = loadImage("data/Ballena.png");
    this.t = 10;
    this.vel = 2;
  }
  
  draw() {
     //invocación de las funciones 
     this.mover();
     this.dibujar();
     
  }
  
  mover() {
    //Lógica de movimiento
    if (keyIsDown(39)) { // "D" o "d"
      this.x += this.vel;
    }
    if (keyIsDown(37)) { // "A" o "a"
      this.x -= this.vel;
    }
    if (keyIsDown(40)) { // "D" o "d"
      this.y += this.vel;
    }
    if (keyIsDown(38)) { // "A" o "a"
      this.y -= this.vel;
    }
  }
  
  colision(obstaculos) {
    
    let distanciaX = abs(this.x - obstaculos.x);
    let distanciaY = abs(this.y - obstaculos.y);
    
    let mitadAnchoBallena = this.t /2;
    let mitadAltoBallena = this.img.height / 2;
    let mitadAnchoObstaculos = obstaculos.t / 2;
    let mitadAltoObstaculos = obstaculos.img.height / 2;
    
    //dibujo la ballena
    if (distanciaX < mitadAnchoBallena + mitadAnchoObstaculos && distanciaY < mitadAltoBallena + mitadAltoObstaculos ){
      console.log("Colision");
  
    }
  }
  
  dibujar() {
  
    push();
    translate(this.x, this.y);
    image(this.img, this.x, this.y, 100, 50);
    pop();
  }
}
