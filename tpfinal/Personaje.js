class Personaje {
  constructor(x, y) {
    //caracteristicas
    this.radio = 50;
    this.posX = x;
    this.posY = y; 
    this.velocidad = 10;
    this.dirX = 0;
    this.canasta = loadImage ("data/canasta.png");
  }
  //acciones
  dibujar() {
    image (this.canasta, this.posX, this.posY, 100, 100);
    this.posX+= this.dirX;
  }
  teclaPresionada (keyCode) {    
    if (keyCode === LEFT_ARROW) {
      this.dirX = -3;
    }
    if (keyCode === RIGHT_ARROW) {
      this.dirX = +3;    
    }    
  }
  teclaSoltar (){
    this.dirX = 0;
  }
}
