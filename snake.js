document.addEventListener("keydown", avanzar);
var cabezaSerpiente = document.getElementById("cabezaSerpiente");
var contenedor = document.getElementById("contenedor");
var boton = document.getElementById("reiniciar");
boton.addEventListener("click", reiniciar);

var posX = 0;
var posY = 0;
var movimiento = 21;

function avanzar(evento){

  switch(evento.keyCode){
    case 38:
      posY = posY-movimiento;
      if (posY<0) {
        finDelJuego();
      }else {
        cabezaSerpiente.style.marginTop = posY+ "px";
      }
    break;

    case 40:
      posY = posY + movimiento;
      if (posY>470) {
        finDelJuego();
      }else {
        cabezaSerpiente.style.marginTop = posY+ "px";
      }
    break;

    case 37:
      posX = posX - movimiento;
      if (posX<0) {
        finDelJuego();
      }else {
        cabezaSerpiente.style.marginLeft = posX+ "px";
      }
    break;

    case 39:
      posX = posX + movimiento;
      if (posX>470) {
        finDelJuego();
      }else {
        cabezaSerpiente.style.marginLeft = posX+ "px";
      }
    break;

    default:
      console.log("tecla no válida");
    break;
  }
}

function finDelJuego() {
  alert("Game Over");
  document.removeEventListener("keydown", moverCuadrito);
}

function reiniciar() {
  posX = 0;
  posY = 0;
  cabezaSerpiente.style.marginTop = posY;
  cabezaSerpiente.style.marginLeft = posX;
  document.addEventListener("keydown", moverCuadrito);
}
