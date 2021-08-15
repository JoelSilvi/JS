function calcularSuma(num1, num2) {
  let suma = num1 + num2;
  console.log("esto es una funcion: " + suma);
}

calcularSuma(3, 5);

function calcularResta(num1, num2) {
  let resta = num1 - num2;
  return console.log(`el valor de la resta es ${resta}`);
}

calcularResta(5, 4);

function calcularPromedio(num1, num2, num3) {
  let promedio = Math.floor((num1 + num2 + num3) / 3);
  const promedioHTML = document.getElementById("promedio");
  promedioHTML.innerHTML = `<h2> el cálculo del promedio es de: ${promedio}</h2>`;
}
calcularPromedio(21, 38, 25);

const calcularArea = function (ancho, alto) {
  const area = ancho * alto;
  return `el área es: ${area}`;
};
console.log(calcularArea(5, 5));

const calcularAreaFlecha = (ancho, alto) => {
  const area = ancho * alto;
  return `el área en flecha es: ${area}`;
};
console.log(calcularAreaFlecha(10, 10));

const multiplicaNumero = (x) => x ** 3;
console.log(`la exponenciación del número es  ${multiplicaNumero(10)}`);

const avisaUsuario = (fun, x) => {
  console.log(fun(x));
};

const saludaUsuario = (nombre = "Joel") => {
  return `Hola ${nombre}`;
};

avisaUsuario(saludaUsuario, "Juan");
