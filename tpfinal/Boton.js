class Boton{
  constructor(x,y,ancho,alto,estado_ir,texto){
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.estado_ir = estado_ir;
    this.texto = texto;    
  }
  
  dibujaBotonRectangular(){     
    // Establecer colores para el botón
    let fondo = color(200);    
    let efectoOver = color(234, 102, 102);  
    // Dibujar el fondo del botón
    if (this.colisionConBotonRectangular() ) {
      fill(efectoOver);
    } else {
      fill(fondo);
    }    
    rectMode(CENTER);
    rect(this.x, this.y, this.ancho, this.alto); 
    fill(0); 
    textAlign(CENTER, CENTER); 
    textSize(16); 
    text(this.texto, this.x, this.y ); 
  }
  
  colisionConBotonRectangular (){
    if ( mouseX>this.x-this.ancho/2 && mouseX<this.x+this.ancho/2 &&             //  (500- 120/2)     (500 + 120/2)   (500- 80/2)  (500+80/2)     
    mouseY>this.y-this.alto/2 && mouseY<this.y+this.alto/2 ) {
    colisiona = true;
    } else {
      colisiona = false;
    }
    return colisiona;
   }  
}
