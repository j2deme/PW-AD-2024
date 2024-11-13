// Función que cambia el texto del elemento con id "salida_boton"
function saludar() {
  let salida = document.getElementById("salida_boton");
  salida.innerText = "Hola desde la función saludar";
}

// Obtiene el elemento con id "otro_boton"
let otro_boton = document.getElementById("otro_boton");

// Agrega un evento click al botón que cambia el texto del elemento con id "salida_otro"
otro_boton.addEventListener("click", function () {
  let salida = document.getElementById("salida_otro");
  salida.innerText = "Otro saludo 😎";
});

// Agrega un evento mouseenter al botón que cambia su propio texto
otro_boton.addEventListener("mouseenter", function () {
  this.innerText = "Entro el mouse";
});

// Agrega un evento mouseleave al botón que cambia su propio texto
otro_boton.addEventListener("mouseleave", function () {
  this.innerText = "Salió el mouse";
});

// Agrega un evento mousemove al botón que cambia su propio texto
otro_boton.addEventListener("mousemove", function () {
  this.innerText = "🐁";
});

// Obtiene el elemento con id "nombre" y "salida_teclado"
let nombreTxt = document.getElementById("nombre");
let salida_teclado = document.getElementById("salida_teclado");

// Agrega un evento keydown al campo de texto que muestra la tecla presionada
nombreTxt.addEventListener("keydown", function (event) {
  salida_teclado.innerHTML = `Se presióno <kbd>${event.key}</kbd>`;
});

// Obtiene el formulario con id "miForm"
let miForm = document.getElementById("miForm");

// Agrega un evento submit al formulario que calcula la suma de dos números y muestra el resultado
miForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Previene el envío del formulario

  // Obtiene los valores de los campos de texto con id "a" y "b"
  let aTxt = document.getElementById("a");
  let bTxt = document.getElementById("b");

  // Calcula la suma de los valores y muestra el resultado en el elemento con id "salida_suma"
  let salida = document.getElementById("salida_suma");
  let a = parseInt(aTxt.value);
  let b = parseInt(bTxt.value);
  let resultado = a + b;
  salida.innerText = resultado;
});
