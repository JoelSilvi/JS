const newPassword = document.getElementById("newPassword");
newPassword.addEventListener("keyup", checkPassword);

function toggleClass(element, condition) {
  if (condition) {
    element.classList.add("valid");
  } else {
    element.classList.remove("valid");
    element.classList.add("invalid");
  }
}

// funcion Principal

function checkPassword() {
  const elemento1 = document.getElementById("length");
  let isLengthValid = false;
  if (newPassword.value.length > 5) {
    isLengthValid = true;
  }
  toggleClass(elemento1, isLengthValid);

  const elemento2 = document.getElementById("digit");
  let tieneUnDigito = false;
  let digitos = /[0-9]/;
  if (newPassword.value.match(digitos)) {
    tieneUnDigito = true;
  }
  toggleClass(elemento2, tieneUnDigito);

  const elemento3 = document.getElementById("uppercase");
  let esMayuscula = false;
  let letras = /[A-Za-z]/;
  if (
    newPassword.value.match(letras) &&
    newPassword.value.charAt(0) === newPassword.value.charAt(0).toUpperCase()
  ) {
    esMayuscula = true;
  }
  toggleClass(elemento3, esMayuscula);

  const elemento4 = document.getElementById("pattern");
  let EsPatronValido = false;

  if (
    newPassword.value.substr(0, 3) !==
    newPassword.value.substr(newPassword.value.length - 3)
  ) {
    EsPatronValido = true;
  }
  toggleClass(elemento4, EsPatronValido);

  const elemento5 = document.getElementById("space");
  let noTieneEspacio = false;
  if (newPassword.value.replace(" ", "") === newPassword.value) {
    noTieneEspacio = true;
  }
  toggleClass(elemento5, noTieneEspacio);

  const elemento6 = document.getElementById("character");
  let tieneCaracterEspecial = false;
  let caracteres = /[!?@#&]/;
  if (newPassword.value.match(caracteres)) {
    tieneCaracterEspecial = true;
  }
  toggleClass(elemento6, tieneCaracterEspecial);
}
