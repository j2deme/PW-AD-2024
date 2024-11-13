console.log("Hola desde el archivo externo");

let nombre = "Jaime";
let edad = 37;
let objeto = { nombre: nombre, edad: edad };
let numeros = [1, 2, 3, 4, 5, 6];
let fecha = new Date();

console.table(objeto);
console.table(numeros);
console.log(sumar(30, 7));
console.log(fecha);

function sumar(a, b) {
  return a + b;
}

function preguntar() {
  let anio = parseInt(prompt("En que año naciste"));
  let anio_actual = new Date().getFullYear();
  edad = anio_actual - anio;

  if (edad >= 18) {
    console.log("Eres un adulto");
  } else if (edad >= 12 && edad < 18) {
    if (edad == 12) {
      console.log("Eres un preadolescente");
    } else {
      console.log("Eres un adolescente");
    }
  } else {
    console.warn("Eres un niño");
  }
}
