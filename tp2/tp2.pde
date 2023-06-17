//nombre: Devoto Nicolás
//obra: arteOptico realizado por Betacam-SP
// URL: https://youtu.be/3GvHKs_RH7k


//creo la variable para almacenar la imagen
PImage img;
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
   //translado el origen (0,0) para (600,200)
   translate(600,200);
   //invocación:
   dibujaPuntosDeFuga( mouseY/12 );
   pop();
 
   //circulo que persigue el mouse
   circle( mouseX, mouseY, 20);
   
   push();
   //circulo blanco estático en el medio de la obra
   noStroke();
   circle(600,200,18);
   pop();
   
   push();
   //Invierto los colores dentro de los rectangulos dibujados  
   blendMode(DIFFERENCE);
   noStroke();
   //rectangulos
   rect(500,135,150,165);
   rect(550,70,170,160);
   pop();
    
}

void mousePressed(){
  fill(random(255), random(255), random(255));
}

void mouseDragged(){
  fill(255);
}
