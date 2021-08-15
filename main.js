const catVaron1 = 2500; // 18-26 años
const catDama1 = 2350; // 18-26 años
const catVaron2 = 2000; // 27-39 años
const catDama2 = 1850; //27-39 años
const catVaron3 = 1500; //40-85 años
const catDama3 = 1250; //40-85 años

const generaCuota = (genero, edad) => {
  genero = document.getElementById("genero").value;

  edad = document.getElementById("edad").value;

  let mensaje = "";
  precio = 0;

  if (edad === "") {
    mensaje = "debe ingresar una edad para calcular su cuota";
  } else if (edad >= 18 && edad <= 26 && genero === "hombre") {
    mensaje = "el valor de su seguro es: ";
    precio = catVaron1;
  } else if (edad >= 18 && edad <= 26 && genero === "mujer") {
    mensaje = "el valor de su seguro es: ";
    precio = catDama1;
  } else if (edad >= 27 && edad <= 39 && genero === "hombre") {
    mensaje = "el valor de su seguro es: ";
    precio = catVaron2;
  } else if (edad >= 27 && edad <= 39 && genero === "mujer") {
    mensaje = "el valor de su seguro es: ";
    precio = catDama2;
  } else if (edad >= 40 && edad <= 85 && genero === "hombre") {
    mensaje = "el valor de su seguro es: ";
    precio = catVaron3;
  } else if (edad >= 40 && edad <= 85 && genero === "mujer") {
    mensaje = "el valor de su seguro es: ";
    precio = catDama3;
  } else {
    mensaje = "No contamos con disponibilidad de seguro para sus datos ";
  }

  const cuota = document.getElementById("cuota");

  if (precio !== 0) {
    cuota.innerHTML = `
    <div>
    <span>${mensaje}</span>
    <span>${precio}</span>
    </div>
    `;
  } else {
    cuota.innerHTML = `
    <div>
    <span>${mensaje}</span>
    </div>`;
  }
};
