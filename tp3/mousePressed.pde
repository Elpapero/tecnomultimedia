void mousePressed() {
  if ( estado == 0 ) {
    if ( colisionConBotonRectangular(width/3.5*3, height/3, 120, 80) ) {
      println("flujo de estado 0 -> 1");
      estado = 1;
    }
    if ( colisionConBotonRectangular(width/10*3, height/3, 120, 80) ) {
      println("flujo de estado 0 -> 2");
      estado = 2;
    }
  }
  if ( estado == 2 ) {
    if (colisionConBotonRectangular(width/2.2*2, height/2.2*2, 80, 80) ) {
      println("flujo de estado 2 -> 0");
      estado = 0;
    }
  }
  if (estado == 1) {
    if (colisionConBotonRectangular(width/3.4*3, height/24*3, 120, 80)) {
      println("flujo de estado 1 -> 3");
      estado = 3;
    }
  } else if (estado == 3) {
    if (colisionConBotonRectangular(width/6.5*3, height/24*3, 170, 80)) {
      println("flujo de estado 3 -> 4 ");
      estado = 4;
    } else if (colisionConBotonRectangular(width/3.7*3, height/24*3, 220, 80)) {
      println("flujo de estado 3 -> 7");
      estado = 7;
    } else if (colisionConBotonRectangular(width/20*3, height/24*3, 170, 80)) {
      println("flujo de estado 3 -> 9");
      estado = 9;
    }
  } else if (estado == 7) {
    if (colisionConBotonRectangular(width/3.4*3, height/24*3, 120, 80)) {
      println("flujo de estado 7 -> 8 ");
      estado = 8;
    }
  } else if (estado == 8) {
    if (colisionConBotonRectangular(width/3.4*3, height/24*3, 120, 80)) {
      println("flujo de estado 8 -> 0 ");
      estado = 0;
    }
  } else if (estado == 9) {
    if (colisionConBotonRectangular(width/3.4*3, height/24*3, 120, 80)) {
      println("flujo de estado 9 -> 10 ");
      estado = 10;
    }
  } else if (estado == 10) {
    if (colisionConBotonRectangular(width/20*3, height/24*3, 170, 80)) {
      println("flujo de estado 10 -> 11");
      estado = 11;
    } else if (colisionConBotonRectangular(width/3.7*3, height/24*3, 170, 80)) {
      println("flujo de estado 10 -> ?");
    }
  } else if (estado == 11) {
    if (colisionConBotonRectangular(width/20*3, height/24*3, 170, 80)) {
      estado = 12;
    }
  } else if (estado == 12) {
    if (colisionConBotonRectangular(width/20*3, height/24*3, 170, 80)) {

      estado = 13;
    }
  } else if (estado == 13) {
    if (colisionConBotonRectangular(width/3.4*3, height/24*3, 120, 80)) {
      
      estado = 14;
    }
  } else if (estado == 14) {
    if (colisionConBotonRectangular(width/3.4*3, height/24*3, 120, 80)) {

      estado = 0;
    }
  }

  // Verificar si se produjo una transición de estado
  if (estado != estadoAnterior) {
    println("Nuevo estado:", estado);
    // Realizar acciones adicionales según sea necesario
  }

  estadoAnterior = estado; // Actualizar el estado anterior

  if (estado == 4) {
    if (colisionConBotonRectangular( width/3.4*3, height/24*3, 120, 80)) {
      println("flujo de estado 4 -> 5 ");
      estado = 5;
    }
  }
  if (estado == 5) {
    if (colisionConBotonRectangular( width/3.4*3, height/24*3, 120, 80)) {
      println("flujo de estado 5 -> 6 ");
      estado = 6;
    }
  } else if (estado == 6) {
    if (colisionConBotonRectangular( width/3.4*3, height/24*3, 120, 80)) {
      estado = 0;
    }
  }
}
