class Enemigo {
  constructor(){
    //caracteristicas
    this.radio = 20
    this.posX = random( this.radio, width-this.radio );
    this.posY = -this.radio;
    this.velocidad = 7;
    this.manzana = loadImage ("data/manzana1.png");
  }  
  //acciones
  dibujar() {
    image (this.manzana, this.posX, this.posY, this.radio*2, this.radio*2);
    this.caer();
  }  
  caer(){
    this.posY = this.posY + this.velocidad; // sumo el valor de la velocidad para que caiga
    if (this.posY > height){   // si llega al final de la pantalla, vuelve arriba
      this.posY = -this.radio;
      this.posX = random( this.radio, width-this.radio); // ubicacion random desde 20 hasta el final de la pantalla-20
      caidas++;
      if (caidas == 6){  //pierde
      caidas = 0;
      recogidas = 0;
      estado = 18;
    }
   }
  }
  colision(x_, y_, r_) {   
    let distancia = dist(x_, y_, this.posX+20, this.posY+20); //posX y posY son el extremo de la imagen, no el centro. Para que sea el centro le tengo que sumar el radio (20)
    if (distancia < this.radio + r_){
     this.posY = -this.radio;
     this.posX = random( this.radio, width-this.radio ); 
     return true;
    }
    else { 
     return false;
    }
  }
}
