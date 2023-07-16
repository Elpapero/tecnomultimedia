//Alumno: Devoto Nicolás
//Link: https://youtu.be/bFAyFB3V78U


PImage[] fondos;
String[] textos;
int cantImagenes = 20;
int estado;
int estadoAnterior;



void setup() {
  size(600, 600);

  //cargamos las imagenes en el arreglo fondo:
  fondos = new PImage[20];
  //ahora con un for cargo las imagenes:
  for ( int i=0; i<cantImagenes; i++ ) {
    fondos[i] = loadImage("img_"+nf(i, 3)+".jpg");

    //img_01.png
    //img_02.png
    //img_03.png
  }

  //carga de los textos:
  //crear las casillas del array de textos:
  textos = new String[20];
  //ahora escrimos cada texto en cada casillero:
  textos[0] = "Moby Dick";
  textos[1] = "Eres un marinero inexperto el cual decide salir hacía alta mar en busca de aventuras y recompensas únicas";
  textos[2] = "Créditos: Devoto Nicolás                                                                                     Creador original de la obra: Herman Melville                      Año: 1851";
  textos[3] = "Una tripulación de un barco ballenero liderado por el capitán  Ahab deciden invitarte a unírseles ¿Qué decides hacer?";
  textos[4] = "Te unes a una tripulación pirata los cuales te prometen un gran tesoro el cual quieren ir a buscar gracias a un mapa que tienen";
  textos[5] = "Luego de semanas navegando logran llegar a la isla marcada por el mapa y deciden buscar el tesoro";
  textos[6] = "Al realizarse que el tesoro no se encontraba en la isla deciden volver, pero en su regreso se encuentran con un cachalote el cual destruye su barco";
  textos[7] = "Te quedas en casa y no consigues dinero para poder comer por lo que te descompensas";
  textos[8] = "Pierdes fuerzas y no te encuentras en condiciones de realizar ningún trabajo";
  textos[9] = "El capitán decide buscar venganza contra Moby Dick, un cachalote el cual es conocido por destruir barcos y quien fue el responsable de la perdida de su pierna";
  textos[10] ="Tras salir a la mar, y durante una exhaustiva búsqueda de Moby Dick durante meses, en una torrencial noche se encuentran con la ballena asesina ¿Qué haces?";
  textos[11] ="Le aciertas el disparo al cachalote pero no de manera fatal, debido a que la lluvia y la oscuridad no te permiten ver bien, por lo que el cachalote se enfurece y destruye el barco";
  textos[12] ="Logran abordar la balsa de auxilio a tiempo, pero el capitán cae al agua ¿Qué decides hacer?";
  textos[13] ="Saltas al océano y logras ayudar al capitán a subir a la balsa, pero en consecuencia Moby Dick te arranca un brazo";
  textos[14] ="Logran llegar a una isla cercana, y juras junto al capitán volver por venganza";
}

void draw() {
  if ( estado == 0 ) {

    dibujaPantalla( fondos[0], textos[0] );
    dibujaBotonRectangular( width/3.5*3, height/3, 120, 80, "INICIAR");
    dibujaBotonRectangular(width/10*2, height/3, 120, 80, "CRÉDITOS");
  } else  if ( estado == 1 ) {

    dibujaPantalla( fondos[1], textos[1] );
    dibujaBotonRectangular( width/3.4*3, height/24*3, 120, 80, "Continuar");
  } else  if ( estado == 2 ) {

    dibujaPantalla2( fondos[2], textos[2] );
    dibujaBotonRectangular( width/2.2*2, height/2.2*2, 80, 80, "Atrás");
  } else if (estado == 3 ) {

    dibujaPantalla( fondos[3], textos[3] );
    dibujaBotonRectangular( width/20*3, height/24*3, 170, 80, "A) Unirse a su tripulación");
    dibujaBotonRectangular( width/6.5*3, height/24*3, 170, 80, "B) Buscar otra tripulación");
    dibujaBotonRectangular( width/3.7*3, height/24*3, 220, 80, "C) Quedarse en casa y no zarpar");
  } else if (estado == 4) {

    dibujaPantalla (fondos[4], textos[4]);
    dibujaBotonRectangular( width/3.4*3, height/24*3, 120, 80, "Continuar");
  } else if (estado == 5) {

    dibujaPantalla (fondos[5], textos[5]);
    dibujaBotonRectangular( width/3.4*3, height/24*3, 120, 80, "Continuar");
  } else if (estado == 6) {

    dibujaPantalla (fondos[5], textos[6]);
    dibujaBotonRectangular( width/3.4*3, height/24*3, 120, 80, "Fin / Restart");
  } else if (estado == 7) {

    dibujaPantalla (fondos[7], textos[7]);
    dibujaBotonRectangular(width/3.4*3, height/24*3, 120, 80, "Continuar");
  } else if (estado == 8) {

    dibujaPantalla (fondos[6], textos[8]);
    dibujaBotonRectangular(width/3.4*3, height/24*3, 120, 80, "Fin / Restart");
  } else if (estado == 9) {

    dibujaPantalla (fondos[8], textos[9]);
    dibujaBotonRectangular(width/3.4*3, height/24*3, 120, 80, "Continuar");
  } else if (estado == 10) {

    dibujaPantalla (fondos[9], textos[10]);
    dibujaBotonRectangular( width/20*3, height/24*3, 170, 80, "A) Disparar el arpón");
    dibujaBotonRectangular( width/3.7*3, height/24*3, 170, 80, "B) Huir de Moby Dick");
  } else if (estado == 11) {

    dibujaPantalla (fondos[10], textos[11]);
    dibujaBotonRectangular( width/20*3, height/24*3, 170, 80, "Continuar");
  } else if (estado == 12) {

    dibujaPantalla (fondos[11], textos[12]);
    dibujaBotonRectangular( width/15*3, height/24*3, 240, 80, "A) Saltar al Mar y ayudar al capitán");
    dibujaBotonRectangular( width/3.7*3, height/24*3, 220, 80, "B) Salir de la escena y escapar");
    
  } else if (estado == 13) {
    
    dibujaPantalla (fondos[12], textos[13]);
    dibujaBotonRectangular(width/3.4*3, height/24*3, 120, 80, "Continuar");

  }else if (estado == 14) {
    
    dibujaPantalla (fondos[12], textos[14]);
    dibujaBotonRectangular(width/3.4*3, height/24*3, 120, 80, "Fin");

  }
}
