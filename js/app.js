let numeroUsuario = document.getElementById("input");
let botonEnviar = document.getElementById("boton");
let intentos = 1;
let random;

function generarRandom() {
  random = Math.floor(Math.random() * 99 + 1);
  console.log(random);
}

function ganador() {
  let valorInput = parseInt(numeroUsuario.value);

  document.getElementById("mensajeGanador").innerHTML = "";
  document.getElementById("mensajeMenor").innerHTML = "";
  document.getElementById("mensajeMayor").innerHTML = "";
  document.getElementById("mensajeError").innerHTML = "";

  if (valorInput === random) {
    let mensaje1 = document.getElementById("mensajeGanador");
    mensaje1.innerHTML = `
            <div class="alert alert-success text-center" role="alert">
            <h4 class="alert-heading">FELICIDADES, GANASTE !!! </h4>
            <p> El ${valorInput} era el número ganador. </p>
            <p> Lo lograste en <b> ${intentos} intentos. </b> 
            <a href="index.html" style="color:black;"> <h6 class="text-center"> REINICIAR JUEGO </h6> </a>
          
            </div>`;
  } else if (valorInput > random) {
    let mensaje1 = document.getElementById("mensajeMenor");
    mensaje1.innerHTML = `
            <div class="alert alert-secondary text-center" role="alert">
            <h4 class="alert-heading">ESTUVO CERCA!!</h4>
            <p> No ganaste, pero te doy una pista: El número ganador es menor a ${valorInput}. </p>
            <p> Este fue tu intento n°${intentos++} </p>
            </div>`;
  } else if (valorInput < random) {
    let mensaje1 = document.getElementById("mensajeMayor");
    mensaje1.innerHTML = `
            <div class="alert alert-warning text-center" role="alert">
            <h4 class="alert-heading">ESTUVO CERCA!!</h4>
            <p> No ganaste, pero te doy una pista: El número ganador es mayor a ${valorInput} </p>
            <p> Este fue tu intento n°${intentos++} </p>
            </div>`;
  } else {
    let mensaje1 = document.getElementById("mensajeError");
    mensaje1.innerHTML = `
            <div class="alert alert-danger text-center" role="alert">
            <h4 class="alert-heading">NO TE APURES !! </h4>
            <p> Debes apretar comenzar el juego para generar el numero y poder jugar. </p>
            </div>`;
  }
}

botonEnviar.addEventListener("click", ganador);
