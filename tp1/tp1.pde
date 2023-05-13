//Creamos variables
PImage img, img1, img2, img3;
String estado = "inicio";
float x;
PFont fuente;
void setup() {
  //establezco el tamaño de la pantalla
  size(640, 480);
  //Le asigno valor a las variables
  img = loadImage("dinosaurios_1.jpg");
  img1 = loadImage("dinosaurios_2.jpg");
  img2 = loadImage("dinosaurios_3.jpg");
  img3 = loadImage("dinosaurios_4.jpg");
  frameRate(30);
  x = 0;
  fuente = loadFont("Tahoma-Bold-48.vlw");
}

void draw() {

  background(255);
  
  //Creacion de la pantalla de inicio
  if (estado.equals("inicio")) {
    //pantalla de inicio
    image(img2, 0, 0, 640, 480); //cargo la imagen
    fill(255);
    rect(74, 200, 489, 52);
    fill(0);
    textAlign(CENTER);//Lugar de los textos,tamaño de las imágenes
    textFont(fuente);
    textSize(38);
    text("Obra de arte electrónica", width/2, height/2);
    fill(255);
    rect(400, 330, 200, 25);
    textSize(RIGHT);
    textSize(15);
    fill(0);
    text("Alumno:Devoto Nicolas", 500, 350);
    fill(255);
    ellipse(width/2, 293, 50, 50);//Creación del botón de inicio
    textSize(21);
    fill(0);
    text("Play", width/2, 300);
  } else if ( estado.equals("pantalla 1")  ) {
    //pantalla 1:
    //coloco la imagen
    image(img, 0, 0, 640, 480);
    fill(255);
    textAlign(CENTER);
    textFont(fuente);
    textSize(40);
    text("Obra: Dinosaurios", x, height/2 );
    textSize(30);
    text("Autor: Estudio Biopus", x, height/2+40 );
    textSize(20);
    text("Ubicación:Museo Roshenhaim en Alemania \nAño:2009", x, height/2+70 );

    //Aumento x en cada fotograma:
    x+=4;
    if ( x>width+100 ) {
      //flujo de estado: 1 a 2:
      estado = "pantalla 2";
      x = 700;
    }
  } else if ( estado.equals("pantalla 2") ) {
    image(img1, 0, 0, 640, 480);//Invocación de las imágenes
    textFont(fuente);
    fill(255);
    textSize(20);
    text("Instalación interactiva creada especialmente\npara ser parte de la exhibición", x, 250);
    //Cambio el comportamiento de la variable
    x-=4;
    if (x<-120) {
      estado = "pantalla 3";
      x = 0;
    }
  } else if ( estado.equals("pantalla 3")) {
    
    image(img3, 0, 0, 640, 480);
    fill(255);
    textFont(fuente); //Coloco la fuente y elijo el tamaño de los textos
    textSize(25);
    text("Con el uso de las sombras las personas \nvan descubriendo los fosiles \nenterrados debajo de la tierra ", 320, x);
    fill(255);
    ellipse(580, 416, 70, 70);
    textFont(fuente);
    textSize(15);
    fill(0);
    text("Reiniciar" ,580,420);
    
    //sumamos x a los fotogramas
    x+=3;
    
  }
}

void mousePressed() {
  //Inicio el programa con las condiciones permitiendo el cambio entre las pantallas

  if ( estado.equals("inicio") ) {
    if ( dist(mouseX, mouseY, width/2, 293) < 25 ) {
      estado = "pantalla 1";
    }
  } else if ( estado.equals("pantalla 1") ) {
    estado = "pantalla 2";
  } else if ( estado.equals("pantalla 2") ) {
    estado = "pantalla 3";
  } else if ( estado.equals("pantalla 3")) {
  }
  if ( dist(mouseX, mouseY, 580, 420) < 35 ) {
      estado = "inicio";
    }
}
