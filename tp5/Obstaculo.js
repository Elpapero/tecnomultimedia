class Obstaculos {

  constructor(){
    this.x = 0;
    this.y = random(height);
    this.vel = random(-2, -3);
    this.img = loadImage("data/Roca.png");
    this.t = 30;
  }
  
  draw(){
    
    this.mover();
    this.dibujar();
    
    }
  
  mover() {
  
    this.x += this.vel;
    
    if(this.x < this.t){
      this.reset();
    }
  }
  
  reset(){
    this.x = width;
    this.y = random(height);
    this.vel = random(-2, -3);
  }
  
  dibujar(){
    push();
    image(this.img, this.x, this.y, 75, 75);
    pop();
  }
}
