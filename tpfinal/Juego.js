class Juego {
  constructor (){
   this.crearPersonaje();
   this.crearEnemigo();  
   this.fondo = loadImage ("data/bosque.jpg");
  } 
  //acciones
  dibujar() {
   background (0, 0, 0);
   fill (255);
   textAlign (CENTER, CENTER);
   textSize (30);
   text ("AYUDA A BLANCANIEVES A", 300, 180);   
   text ("RECOGER 6 MANZANAS", 300, 260);
   text ("¡Mucha suerte!", 300, 340);
    
   fill (255);
   ellipseMode (CENTER);
   ellipse (300, 450, 150, 150)  
   textAlign (CENTER, CENTER);
   fill (0);
   textSize (20);
   text ("Click para", 300, 430);
   text ("comenzar", 300, 470);
  }   
  jugando (){
    image (this.fondo, 0, 0, 600, 600); 
    fill(255);
    text("Recogidas: " + recogidas, width - 100, 20);
    text("Caidas: " + caidas, width - 100, 40);
    this.personaje.dibujar();   
    this.enemigo.dibujar();
    this.personajeGano();
   }    
  perdio(){
  fill (255);
  ellipseMode (CENTER);
  ellipse (300, 450, 150, 150)  
  textAlign (CENTER, CENTER);
  textSize (40);
  text ("FALLASTE :(", 300, 300);
  fill (0);
  textSize (20);
  text ("VOLVER", 300, 420);
  text ("A LA", 300, 450);
  text ("HISTORIA", 300, 480); 
  }  
  
 gano(){
  fill (255);
  ellipseMode (CENTER);
  ellipse (300, 450, 150, 150);
  
  textAlign (CENTER, CENTER);
  textSize (40);
  text ("GANASTE! :)", 300, 300);
  fill (0);
  textSize (20);
  text ("VOLVER", 300, 420);
  text ("A LA", 300, 450);
  text ("HISTORIA", 300, 480);
  }    

  crearEnemigo(){ 
    this.enemigo = new Enemigo(); 
  }  
  crearPersonaje(){
     this.personaje = new Personaje(250, 500); //le asigno el valor de posX y posY por parametros
  } 
  personajeGano(){
    if (this.enemigo.colision(this.personaje.posX+50, this.personaje.posY+50, this.personaje.radio  )){ //posX y posY son el extremo de la imagen, no el centro. Para que sea el centro le tengo que sumar el radio (50)
      recogidas++;
       if (recogidas == 6){
       caidas = 0;
       recogidas = 0;
       estado = 19;      //gana
       }
    }
  }  
  teclaPresionada (keyCode){ 
    this.personaje.teclaPresionada(keyCode);
  }
  teclaSoltar (){
    this.personaje.teclaSoltar ();
  }
  }
