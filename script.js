// Cifrado César
function cifrarCesar() {
  const mensaje = document.getElementById("cesar-message").value;
  const desplazamiento = parseInt(document.getElementById("cesar-shift").value);
  if (!mensaje || isNaN(desplazamiento)) {
    mostrarError("Por favor, ingresa un mensaje y un desplazamiento válidos.");
    return;
  }
  let resultado = "";
  for (let i = 0; i < mensaje.length; i++) {
    let codigo = mensaje.charCodeAt(i);
    if (codigo >= 65 && codigo <= 90) {
      resultado += String.fromCharCode(
        ((codigo - 65 + desplazamiento) % 26) + 65
      );
    } else if (codigo >= 97 && codigo <= 122) {
      resultado += String.fromCharCode(
        ((codigo - 97 + desplazamiento) % 26) + 97
      );
    } else {
      resultado += mensaje.charAt(i);
    }
  }
  document.getElementById("cesar-output").textContent =
    "Mensaje Cifrado: " + resultado;
  ocultarError();
}

function descifrarCesar() {
  const mensaje = document.getElementById("cesar-message").value;
  const desplazamiento = parseInt(document.getElementById("cesar-shift").value);
  if (!mensaje || isNaN(desplazamiento)) {
    mostrarError("Por favor, ingresa un mensaje y un desplazamiento válidos.");
    return;
  }
  let resultado = "";
  for (let i = 0; i < mensaje.length; i++) {
    let codigo = mensaje.charCodeAt(i);
    if (codigo >= 65 && codigo <= 90) {
      resultado += String.fromCharCode(
        ((codigo - 65 - desplazamiento + 26) % 26) + 65
      );
    } else if (codigo >= 97 && codigo <= 122) {
      resultado += String.fromCharCode(
        ((codigo - 97 - desplazamiento + 26) % 26) + 97
      );
    } else {
      resultado += mensaje.charAt(i);
    }
  }
  document.getElementById("cesar-output").textContent =
    "Mensaje Descifrado: " + resultado;
  ocultarError();
}

// Cifrado Escítala
function cifrarEscitala() {
  const mensaje = document.getElementById("escitala-message").value;
  let columnas = parseInt(document.getElementById("escitala-key").value);

  if (!mensaje || isNaN(columnas) || columnas <= 0) {
    mostrarError("Por favor, ingresa un mensaje y una clave válidos.");
    return;
  }

  // Aviso si el número de columnas es mayor que la longitud del mensaje
  if (columnas > mensaje.length) {
    alert(
      "El número de columnas es mayor que la longitud del mensaje. El cifrado puede no ser efectivo."
    );
  }

  let resultado = "";
  for (let i = 0; i < columnas; i++) {
    for (let j = i; j < mensaje.length; j += columnas) {
      resultado += mensaje[j];
    }
  }
  document.getElementById("escitala-output").textContent =
    "Mensaje Cifrado: " + resultado;
  ocultarError();
}

function descifrarEscitala() {
  const mensaje = document.getElementById("escitala-message").value;
  let columnas = parseInt(document.getElementById("escitala-key").value);

  if (!mensaje || isNaN(columnas) || columnas <= 0) {
    mostrarError("Por favor, ingresa un mensaje y una clave válidos.");
    return;
  }

  if (columnas > mensaje.length) {
    alert(
      "El número de columnas es mayor que la longitud del mensaje. Considere que el descifrado puede no tener efecto o ser el mismo"
    );
  }

  let filas = Math.ceil(mensaje.length / columnas);
  let resultado = new Array(mensaje.length);
  let index = 0;

  for (let i = 0; i < columnas; i++) {
    for (let j = i; j < mensaje.length; j += columnas) {
      resultado[j] = mensaje[index++];
    }
  }
  document.getElementById("escitala-output").textContent =
    "Mensaje Descifrado: " + resultado.join("");
  ocultarError();
}

function mostrarError(mensaje) {
  const errorElement = document.getElementById("error-message");
  errorElement.textContent = mensaje;
  errorElement.style.display = "block";
}

function ocultarError() {
  const errorElement = document.getElementById("error-message");
  errorElement.style.display = "none";
}

// Manejo de errores
function mostrarError(mensaje) {
  document.getElementById("error-output").textContent = mensaje;
}

function ocultarError() {
  document.getElementById("error-output").textContent = "";
}
