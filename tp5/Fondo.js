class Fondo {
  constructor() {
    this.img = loadImage("data/Mar.jpg");
  }
  
  draw(){
    this.dibujar();
  }
  
  dibujar(){
    image(this.img, 0, 0, 600, 600);
  }
}
