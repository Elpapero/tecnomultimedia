class Juego {

  constructor() {

    this.fondo = new Fondo();
    this.barco = new Barco();
    this.ballena = new Ballena();
    this.inicio = new Inicio();
    this.estado = 0;

    this.cantObstaculos = 5;
    this.obstaculos = new Array (this.cantObstaculos);

    //Lleno el array con los obstaculos
    for (let i = 0; i < this.cantObstaculos; i++) {

      this.obstaculos[i] = new Obstaculos();
    }
  }

  pantallaPerdio() {
    background(255, 0, 0);
    textSize(32);
    fill(0);
    text("¡Lo sentimos, pero perdiste! Pulsa R para reiniciar", width /2, height/2);
  }

  draw() {

    if ( this.estado == 0) {
      this.inicio.draw();
        if (dist(mouseX, mouseY, 300, 400) <= 50) {
          console.log("Botón Play presionado");
          this.estado = 1;
        }
    } else if ( this.estado == 1) {

      this.fondo.draw();
      this.barco.draw();
      this.ballena.draw();

      for (let i = 0; i < this.obstaculos.length; i++) {

        this.obstaculos[i].draw();

        if (this.ballena.colision(this.obstaculos[i])) {

          this.estado = 2;
        } else if (this.ballena.tiempo > 15) {
          this.estado = 3;
        }
      }
    } else if ( this.estado == 2) {

      this.pantallaPerdio();
    } else if (this.estado == 3) {
    }
  }

  
  keyPressed() {
    if (this.perdio && (key === 'r' || key === 'R')) {
      // Reinicia el juego
      this.perdio = false;
      // Restablece la posición y otros estados del juego
      this.ballena.x = 0;
      // ...
    }
  }
}
