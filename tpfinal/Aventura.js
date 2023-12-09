class Aventura {
   constructor() {
   this.fotos0= loadImage ("data/espejo.jpg");
   this.fotos1= loadImage ("data/cazador.jpg");
   this.fotos2= loadImage ("data/cazador.mata.jpg");
   this.fotos3= loadImage ("data/cazador.advierte.jpg");
   this.fotos4= loadImage ("data/perdida.jpg");
   this.fotos5= loadImage ("data/casa.enanitos.jpg");
   this.fotos6= loadImage ("data/segunda.orden.jpg");
   this.fotos7= loadImage ("data/cazador.enamorado.jpg");
   this.fotos8= loadImage ("data/reina.anciana.jpg");
   this.fotos9= loadImage ("data/se.apiada.jpg");
   this.fotos10= loadImage ("data/reina.muere.jpg");
   this.fotos11= loadImage ("data/blanc.muere.jpg");
   this.fotos12= loadImage ("data/beso.jpg");
   this.fotos13= loadImage ("data/despierta.jpg");
  
  this.textos0 = "La reina malvada, madrastra de Blancanieves, le pregunta a su espejo mágico: ¿quién es la más bella del reino? El espejo responde: Blancanieves";
  this.textos1= "Descontenta con la respuesta, la reina da la orden al cazador de capturar a Blancanieves, llevarla al bosque y asesinarla";
  this.textos2 = "El cazador mata a Blancanieves";
  
  this.textos3 = "Al ver la bondad de Blancanieves, el cazador se arrepiente y le advierte que no vuelva al castillo";
  this.textos4 = "Blancanieves se pierde en el bosque y es encontrada por la reina malvada, quien la asesina";
  
  this.textos5 = "Blancanieves, perdida en el bosque, llega a la pequeña casa de los 7 enanitos";
  this.textos6= "La reina vuelve a dar la orden a otro cazador para matarla";
  this.textos7 = "El cazador se enamora de Blancanieves y mata a la reina";
  
  this.textos8 = "La reina se convierte en anciana y va a buscar a Blancanieves para matarla";
  this.textos9 = "Blancanieves se da cuenta que es la reina e intercambia las manzanas envenenadas";
  this.textos10 = "La reina muere envenenada";
  
  this.textos11 = "Le ofrece una manzana, la cual esta envenenada y Blancanieves muere";
  this.textos12 = "El príncipe besa a Blancanieves"; 
  this.textos13 = "El beso del príncipe despierta a Blancanieves";
    
    this.boton = [];

    this.boton[0] = [ new Boton(500, 500, 120, 80, 1, "Historia clásica")   ];

    this.boton[1] = [
    new Boton( 500, 500, 120, 80, 3, "Historia clásica"),
    new Boton ( 100, 500, 120, 80, 2, "Variación")
    ];

    this.boton[2] = [new Boton ( 100, 500, 120, 80, 15, "Variación")];

    this.boton[3] = [
     new Boton( 500, 500, 120, 80, 5, "Historia clásica"),
     new Boton ( 100, 500, 120, 80, 4, "Variación")
     ];

    this.boton[4] = [new Boton ( 100, 500, 120, 80, 15, "Variación")];

    this.boton[5] = [
    new Boton( 500, 500, 120, 80, 8, "Historia clásica"),
    new Boton ( 100, 500, 120, 80, 6, "Variación")
   ];

    this.boton[6] = [new Boton ( 100, 500, 120, 80, 7, "Variación")];

    this.boton[7] = [new Boton ( 100, 500, 120, 80, 15, "Variación")];

    this.boton[8] = [
    new Boton( 500, 500, 120, 80, 11, "Historia clásica"),
    new Boton ( 100, 500, 120, 80, 9, "Variación")
    ];

    this.boton[9]= [new Boton ( 100, 500, 120, 80, 10, "Variación"),
    new Boton ( 500, 500, 120, 80, 16, "A JUGAR!")
    ];


    this.boton[10] = [new Boton ( 100, 500, 120, 80, 15, "Variación")];

    this.boton[11]= [new Boton( 500, 500, 120, 80, 12, "Historia clásica")];

    this.boton[12] = [new Boton( 500, 500, 120, 80, 13, "Historia clásica")];

    this.boton[13] = [new Boton( 500, 500, 120, 80, 15, "Historia clásica")];
  
    this.objJuego = new Juego ();
    
  }
   dibujar() {
     if ( estado == 0 ) {
      this.dibujaPantalla (this.fotos0, this.textos0);
      this.boton[0][0].dibujaBotonRectangular();
    } else  if ( estado == 1 ) {
      this.dibujaPantalla( this.fotos1, this.textos1);
      this.boton[1][0].dibujaBotonRectangular();
      this.boton[1][1].dibujaBotonRectangular();
    } else  if ( estado == 2 ) {
      this.dibujaPantalla( this.fotos2, this.textos2 );
      this.boton[2][0].dibujaBotonRectangular();
    } else if (estado==3) {
      this.dibujaPantalla (this.fotos3, this.textos3);
      this.boton[3][0].dibujaBotonRectangular();
      this.boton[3][1].dibujaBotonRectangular();
    } else if (estado==4) {
      this.dibujaPantalla (this.fotos4, this.textos4);
      this.boton[4][0].dibujaBotonRectangular();
    } else if (estado==5) {
      this.dibujaPantalla (this.fotos5, this.textos5);
      this.boton[5][0].dibujaBotonRectangular();
      this.boton[5][1].dibujaBotonRectangular();
    } else if (estado==6) {
      this.dibujaPantalla (this.fotos6, this.textos6);
      this.boton[6][0].dibujaBotonRectangular();
    } else if (estado==7) {
      this.dibujaPantalla (this.fotos7, this.textos7);
      this.boton[7][0].dibujaBotonRectangular();
    } else if (estado==8) {
      this.dibujaPantalla (this.fotos8, this.textos8);
      this.boton[8][0].dibujaBotonRectangular();
      this.boton[8][1].dibujaBotonRectangular();
    } else if (estado==9) {
      this.dibujaPantalla (this.fotos9, this.textos9);
      this.boton[9][0].dibujaBotonRectangular();
      this.boton[9][1].dibujaBotonRectangular();
    } else if (estado==10) {
      this.dibujaPantalla (this.fotos10, this.textos10);
      this.boton[10][0].dibujaBotonRectangular();
    } else if (estado==11) {
      this.dibujaPantalla (this.fotos11, this.textos11);
      this.boton[11][0].dibujaBotonRectangular();
    } else if (estado==12) {
      this.dibujaPantalla (this.fotos12, this.textos12);
      this.boton[12][0].dibujaBotonRectangular();
    } else if (estado==13) {
      this.dibujaPantalla (this.fotos13, this.textos13);
      this.boton[13][0].dibujaBotonRectangular();
    } else if (estado==14) {
      this.dibujaCreditos();
    } else if (estado == 15) {
      print(estado);
      this.dibujaFin ();
    } else if (estado ==16){
      this.objJuego.dibujar();
    } else if (estado ==17){
      this.objJuego.jugando();
    }else if (estado ==18){
      this.objJuego.perdio();
    }else if (estado ==19){
      this.objJuego.gano();
    }    
  }  
  
  dibujaFin () {
    background (255);
    fill (234, 102, 102);
    ellipse (400, 400, 100, 100); //boton volver
    ellipse (200, 400, 100, 100);
    fill (0);
    textAlign (CENTER); //centrar el texto
    textSize (60);
    text ("FIN.", 300, 240);
    textSize (18);
    text ("¡VOLVER", 400, 395);
    text ("AL", 400, 410);
    text ("INICIO!", 400, 425);
    text ("CRÉDITOS", 200, 410);
  }

  dibujaCreditos() {
    background (255);
    fill (234, 102, 102);
    ellipse (300, 400, 100, 100);
    fill (0);
    textSize (40);
    textAlign (CENTER, CENTER);
    text ("CRÉDITOS", 300, 90);
    textSize (18);
    text ("Autor: Hermanos Grimm", 300, 150);
    text ("Directores: Federico, Donatella - Devoto, Nicolas", 300, 200);
    text ("Artistas: Federico, Donatella - Devoto, Nicolas", 300, 250);
    text ("Programadores: Federico, Donatella - Devoto, Nicolas", 300, 300);
    text ("VOLVER", 300, 400);
  }
  dibujaPantalla (fot, texto) {
    push();
    imageMode(CORNER);
    image (fot, 0, 0, 600, 600);
    fill(0, 80);
    rectMode(CORNER);
    rect(0, 0, width, 150);
    fill(255);
    textSize(25);
    textLeading(40);
    textAlign(CENTER, CENTER);
    text( texto, 0, 0, width, 150);
    pop();
  }

mousePressed() {
    if ( estado <= 13) {
      for (i=0; i<this.boton[estado].length; i++) {
        if (this.boton[estado][i].colisionConBotonRectangular() ) {
          //console.log("flujo de estado 0 a 1");
          estado = this.boton[estado][i].estado_ir;
        }
      }
      //estado 15 (fin)
    } else if (estado == 15) {
      if (dist (mouseX, mouseY, 400, 400) < 50) { // dist para saber la distancia del centro hasta donde tengo el mouse - click en el circulo
        estado = 0;
      }
      if (dist (mouseX, mouseY, 200, 400) < 50) { // dist para saber la distancia del centro hasta donde tengo el mouse - click en el circulo
        estado = 14;
      }
    } else if (estado ==14) {
      if (dist (mouseX, mouseY, 300, 400) < 50) { // dist para saber la distancia del centro hasta donde tengo el mouse - click en el circulo
        estado = 15;
      }
    }else if (estado == 16){ //descripcion del juego
    if (dist (mouseX, mouseY, 300, 450) <= 75){
    estado =17; //jugando
    }
  } else if (estado == 18){   // pantalla pierde
    if (dist (mouseX, mouseY, 300, 450) <= 75){
    estado = 9; //continua la historia
   }
  }else  if ( estado ==19 ) {    // pantalla gana
    if (dist (mouseX, mouseY, 300, 450) <= 75){
    estado = 9; //continua la historia
   }
  }    
  }
}
