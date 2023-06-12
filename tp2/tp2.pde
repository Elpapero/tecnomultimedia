//creo la variable para almacenar la imagen
PImage img;

void dibujaPuntosDeFuga( float cantidad_ ) {
  push();
  for ( int i=0; i<cantidad_; i++ ) {
    //invoco el modulo dibujado (triangulo) y creo la rotación
    dibujaModulo( i );
    rotate(TWO_PI/cantidad_ ); 
  }
  pop();
}

void dibujaModulo( int indice_ ) {
  //dibujo del triangulo para utilizarlo en la funcion de dibujaPuntosDeFuga
  push();
  noStroke();
  fill(255*(indice_%2));
  triangle(0, 0, 200, -20, 200, 20);
  pop();
  
}
//color del fondo
void dibujaFondo( color col_ ) {
  background(col_);
}
//tamaño del sketch
void setup() {
  size(800, 400);
  //le doy valor a la variable
  img = loadImage("arte_optico.jpg");
}

void draw() {
  //invocación para colorear el fondo
  dibujaFondo(100);
  //invoco la imagen
  image(img,0,0,400,400);
  push();
  translate(600,200);
  //invocación:
  dibujaPuntosDeFuga( mouseX/10 );
  pop();
  //circulo que persigue el mouse
  circle( mouseX, mouseY, 20);
  //circulo blanco estático en el medio de la obra
  fill(255);
  noStroke();
  circle(600,200,18);
  push();
  //Invierto los colores dentro de los rectangulos dibujados
  blendMode(DIFFERENCE);
  fill(255);
  stroke(255);
  //rectangulos
  rect(500,135,150,165);
  rect(550,70,170,160);
  pop();
}
