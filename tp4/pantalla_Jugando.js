function pantallaJugando() {
  background(220);
  
  // Actualiza y muestra todas las pelotas
  for (let i = 0; i < numPelotas; i++) {
    // Actualiza la posición de la pelota
    pelotasX[i] += pelotasVelX[i];
    pelotasY[i] += pelotasVelY[i];
    
    
    // Colisiones con los bordes del lienzo
    if (pelotasX[i] < 0 || pelotasX[i] > width) {
      pelotasVelX[i] *= -1; 
    } 
    
    if (pelotasY[i] > height + pelotasRadio[i] ) {
      pelotasY[i] = pelotasRadio[i]; // Repositiona la pelota arriba del piso
      pelotasVelY[i] *= 1; // Invierte la dirección vertical para simular un rebote
    }
    
    if (pelotasY[i] < -pelotasRadio[i]) {
      // Reaparece en la parte superior
      pelotasY[i] = height + pelotasRadio[i];
      pelotasX[i] = random( pelotasRadio[i], width + pelotasRadio[i]);
    
    }
    
    // Verifica colisión con el personaje
    let distancia = dist(pelotasX[i], pelotasY[i], xP, yP);
     if (distancia < rP + pelotasRadio[i]) {
      // Colisión con el personaje
      // Aquí puedes tomar alguna acción, como disminuir la vida del personaje
      // o eliminar la pelota, por ejemplo: vidaP--;
    }
    // Dibuja el personaje
    ellipse(xP, yP, rP*2);
    
    // Dibuja la pelota
    ellipse(pelotasX[i], pelotasY[i], pelotasRadio[i] * 2);
  }
  
}  
