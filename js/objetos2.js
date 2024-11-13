// Obtener el botón con id "lanzaPrompt"
let lanzaPrompt = document.getElementById("lanzaPrompt");

// Agregar un evento click al botón "lanzaPrompt"
lanzaPrompt.addEventListener("click", function (event) {
  event.preventDefault(); // Prevenir el comportamiento por defecto del botón
  let nombre = prompt("¿Cómo te llamas?"); // Mostrar un prompt para ingresar el nombre

  if (nombre) {
    alert(`Hola ${nombre}`); // Mostrar un saludo con el nombre ingresado
  } else {
    alert("Anónimo"); // Mostrar "Anónimo" si no se ingresó un nombre
  }
});

// Obtener la lista con id "log"
let lista = document.getElementById("log");

// Función para crear un nuevo elemento de lista con el texto proporcionado
function registro(texto) {
  let item = document.createElement("li");
  item.innerText = texto;
  return item;
}

// Agregar un registro indicando que el DOM ha sido cargado
lista.insertBefore(registro("✅ DOM LOADED"), lista.firstChild);

// Iniciar un temporizador que agrega un registro después de 3 segundos
let timer = setTimeout(() => {
  lista.insertBefore(registro("⌛ Fin del timer (3s)"), lista.firstChild);
}, 3000);

// Iniciar un repetidor que agrega un registro cada 1.5 segundos
let repetidor = setInterval(() => {
  lista.insertBefore(registro("⏱ +1.5s"), lista.firstChild);
}, 1500);

// Obtener los botones con id "activaTimer", "pararRepetidor" y "reactivarRepetidor"
let activaTimerBtn = document.getElementById("activaTimer");
let stopBtn = document.getElementById("pararRepetidor");
let resetBtn = document.getElementById("reactivarRepetidor");

// Agregar un evento click al botón "activaTimer"
activaTimerBtn.addEventListener("click", function () {
  lista.insertBefore(registro("🎉 Inicia timer..."), lista.firstChild);
  clearTimeout(timer); // Limpiar el temporizador existente
  timer = setTimeout(() => {
    lista.insertBefore(registro("⌛ Fin del timer (3s)"), lista.firstChild);
  }, 3000); // Iniciar un nuevo temporizador de 3 segundos
});

// Agregar un evento click al botón "pararRepetidor"
stopBtn.addEventListener("click", function () {
  lista.insertBefore(
    registro("🛑 Se detuvo el repetidor..."),
    lista.firstChild
  );
  clearInterval(repetidor); // Detener el repetidor
});

// Agregar un evento click al botón "reactivarRepetidor"
resetBtn.addEventListener("click", function () {
  lista.insertBefore(
    registro("🔄 Se reactivó el repetidor..."),
    lista.firstChild
  );
  clearInterval(repetidor); // Detener el repetidor existente
  repetidor = setInterval(() => {
    lista.insertBefore(registro("⏱ +1.5s"), lista.firstChild);
  }, 1500); // Iniciar un nuevo repetidor de 1.5 segundos
});

// Mostrar la información de la ubicación actual en la consola
console.table(location);

// Obtener el elemento con id "secure"
let secure = document.getElementById("secure");

// Verificar si la conexión es segura (HTTPS)
if (location.protocol == "https") {
  secure.innerText = "Seguro"; // Mostrar "Seguro" si la conexión es HTTPS
} else {
  secure.innerText = "No seguro"; // Mostrar "No seguro" si la conexión no es HTTPS
}

// Obtener la lista con id "historial"
let historial = document.getElementById("historial");

// Obtener el historial de navegación y mostrarlo en la lista "historial"
let historial_navegacion = history.length;

// Agregar un item a la lista indicando la cantidad de elementos en el historial
historial.appendChild(
  registro(
    `Hay ${historial_navegacion} elementos en el historial de navegación`
  )
);

// Crear un link para volver a la página anterior
let link_anterior = document.createElement("a");
link_anterior.href = "javascript:history.back()";
link_anterior.innerText = "Volver a la página anterior";

// Crear un nuevo elemento <li> y agregarlo a la lista "historial"
let item_anterior = document.createElement("li");
item_anterior.appendChild(link_anterior);
historial.appendChild(item_anterior);

// Crear un link para ir a la página siguiente
let link_siguiente = document.createElement("a");
link_siguiente.href = "javascript:history.forward()";
link_siguiente.innerText = "Ir a la página siguiente";

// Crear un nuevo elemento <li> y agregarlo a la lista "historial"
let item_siguiente = document.createElement("li");
item_siguiente.appendChild(link_siguiente);
historial.appendChild(item_siguiente);
