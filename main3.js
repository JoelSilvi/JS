for (let i = 1; i <= 4; i++) {
  console.log(`iteracion en aumento ${i}`);
}
console.log("fin del ciclo en aumento");
console.log("**************************");

for (let x = 4; x >= 1; x--) {
  console.log(`iteración en disminución ${x}`);
}
console.log("fin del ciclo en disminución");
console.log("**************************");

for (let a = 1; a <= 4; a++) {
  console.log(`empieza iteración exterior ${a}`);
  for (let j = 0; j <= 4; j++) {
    console.log(`iteración anidada ${j}`);
  }
}
console.log("fin del ciclo anidado");
console.log("**************************");

let x = 1;
while (x <= 4) {
  console.log(`Iteración del ciclo While ${x}`);
  x++;
}
console.log("fin del ciclo While");
console.log("**************************");

let y = 5;
do {
  console.log(`Iteración del do while ${y}`);
  y++;
} while (y <= 4);

console.log("fin del ciclo While");
console.log("**************************");
