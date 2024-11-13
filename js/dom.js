// Obtener el elemento con id "titulo" y cambiar su color a rojo
let titulo = document.getElementById("titulo");
console.log(titulo);
titulo.style.color = "red";

// Obtener todos los elementos <p> y cambiar su texto
let parrafos = document.getElementsByTagName("p");
Array.from(parrafos).forEach((el, idx) => {
  el.innerText = "Texto " + (idx + 1);
});
console.table(parrafos);

// Obtener los elementos con clase "parrafo" y modificar el segundo elemento
let parrafos2 = document.getElementsByClassName("parrafo");
parrafos2[1].style.backgroundColor = "greenyellow";
parrafos2[1].innerHTML = "<strong>Nuevo párrafo</strong>";

console.log(parrafos2[1].textContent);

// Obtener el primer elemento con clase "parrafo" y cambiar su clase
let parrafo = document.querySelector(".parrafo");
console.log(parrafo.textContent);
parrafo.className = "nuevo-parrafo";

// Crear un nuevo elemento <p> y agregarlo al cuerpo del documento
let parrafo_nuevo = document.createElement("p");
parrafo_nuevo.innerText = "Este párrafo tiene un emoji 😎";

document.body.appendChild(parrafo_nuevo);

console.log(parrafo_nuevo);

// Crear un elemento <h1> y un <hr>, y agregarlos antes y después del nuevo párrafo
let h1 = document.createElement("h1");
h1.innerText = "Título dinámico";

let hr = document.createElement("hr");

parrafo_nuevo.prepend(h1);
parrafo_nuevo.append(hr);

// Obtener el elemento padre del nuevo párrafo
padre_parrafo = parrafo_nuevo.parentElement;
console.log(padre_parrafo);

// Crear una lista ordenada con 5 elementos y agregarla al elemento padre del nuevo párrafo
let lista = document.createElement("ol");
for (let i = 1; i <= 5; i++) {
  let item = document.createElement("li");
  item.innerText = `Elemento ${i}`;
  lista.appendChild(item);
}

padre_parrafo.appendChild(lista);
