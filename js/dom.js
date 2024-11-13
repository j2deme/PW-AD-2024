let titulo = document.getElementById("titulo");
console.log(titulo);
titulo.style.color = "red";

let parrafos = document.getElementsByTagName("p");
Array.from(parrafos).forEach((el, idx) => {
  el.innerText = "Texto " + (idx + 1);
});
console.table(parrafos);

let parrafos2 = document.getElementsByClassName("parrafo");
parrafos2[1].style.backgroundColor = "greenyellow";
parrafos2[1].innerHTML = "<strong>Nuevo párrafo</strong>";

console.log(parrafos2[1].textContent);

let parrafo = document.querySelector(".parrafo");
console.log(parrafo.textContent);
parrafo.className = "nuevo-parrafo";

// Crear un elemento
let parrafo_nuevo = document.createElement("p");
parrafo_nuevo.innerText = "Este párrafo tiene un emoji 😎";

document.body.appendChild(parrafo_nuevo);

console.log(parrafo_nuevo);

// Insertar elementos antes y después
let h1 = document.createElement("h1");
h1.innerText = "Título dinámico";

let hr = document.createElement("hr");

parrafo_nuevo.prepend(h1);
parrafo_nuevo.append(hr);

padre_parrafo = parrafo_nuevo.parentElement;
console.log(padre_parrafo);

let lista = document.createElement("ol");
for (let i = 1; i <= 5; i++) {
  let item = document.createElement("li");
  item.innerText = `Elemento ${i}`;
  lista.appendChild(item);
}

padre_parrafo.appendChild(lista);
