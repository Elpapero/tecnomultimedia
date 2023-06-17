void dibujaPuntosDeFuga( float cantidad_ ) {
  
  for ( int i=0; i<cantidad_; i++ ) {
    //invoco el modulo dibujado (triangulo) y creo la rotación
    dibujaModulo( i );
    rotate(TWO_PI/cantidad_ ); 
    
  }
}
//Le asigno un color al fondo
void dibujaFondo( color col_ ) {
  background(col_);
}

void dibujaModulo(int indice) {
  
  //dibujo del triangulo para utilizarlo en la funcion de dibujaPuntosDeFuga
  noStroke();
  fill(255*(indice%2));
  triangle(0, 0, 200, -20, 200, 20);
  
}
