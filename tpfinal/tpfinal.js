// TP FINAL - COMISIÓN 3
// Federico, Donatella - Legajo: 93051/1
// Devoto, Nicolas - Legajo: 92821/7

let objAventura;
let fotos = [];
let estado = 0;
let colisiona;
let boton = [];
let i;
let recogidas = 0;
let caidas = 0;

function setup() {
  createCanvas(600, 600);
  objAventura = new Aventura (); 
}

function draw() {
  if (estado >= 0 && estado <= 19) {
   objAventura.dibujar();
  }
}
 
function mousePressed() {
  objAventura.mousePressed();
}
function keyPressed (){
  objAventura.objJuego.teclaPresionada(keyCode);   //se lo paso al juego y el juego se lo pasa al personaje
}
function keyReleased (){
   objAventura.objJuego.teclaSoltar();  
}
