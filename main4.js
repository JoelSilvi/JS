const ejemploArray = [25, "Tesla", true, [1, 0]];

ejemploArray[1] = "Toyota";
console.log(ejemploArray[1]);
console.log("********************************************");

let x = ejemploArray[3][0];
console.log(x);
console.log("********************************************");

const marcas = ["Nike", "Adidas", "lenovo", "Master-G", "Sony"];
for (let x = 0; x < marcas.length; x++) {
  console.log(marcas[x]);
}
console.log("********************************************");

const animals = ["Gato", "Perro", "León", "Tigre", "Conejo"];
for (animal of animals) {
  let animalHTML = document.createElement("h2");
  document.body.appendChild(animalHTML);
  animalHTML.innerHTML = `
  <div>
    <span> El animal es: </span> ${animal}
  </div>`;
}

const ciudades = ["Melipilla", "Huechuraba", "Colina", "San Bernardo"];

const cambiaLetra = (string) => {
  let letraModificada = string.toUpperCase();
  console.log(letraModificada);
};
ciudades.forEach(cambiaLetra);
console.log("********************************************");

const nombres = ["Juan", "Felipe", "Andrés", "Carlos"];
nombres.forEach((nombre) => {
  console.log(nombre.toUpperCase());
});
console.log("********************************************");

console.log(nombres.pop());
console.log(nombres);
console.log("********************************************");

console.log(nombres.shift());
console.log(nombres);
console.log("********************************************");

console.log(nombres.push("Sebastián"));
console.log(nombres);
console.log("********************************************");

console.log(nombres.unshift("Soteldo"));
console.log(nombres);
console.log("********************************************");

console.log(nombres.splice(0, 1, "Camilo"));
console.log(nombres);
console.log("********************************************");
