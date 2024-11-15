// Obtener los elementos del DOM donde se mostrarán los datos del Pokémon
let nombreTxt = document.getElementById("pokemon-name");
let typesList = document.getElementById("pokemon-types");
let image = document.getElementById("pokemon-image");

// Realizar una solicitud a la API de Pokémon para obtener los datos de Pikachu
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then((response) => response.json()) // Convertir la respuesta a JSON
  .then((pokemon) => {
    // Mostrar el nombre del Pokémon en la consola y en el elemento del DOM
    console.log(pokemon.name);
    nombreTxt.innerText = pokemon.name;

    // Mostrar los tipos del Pokémon en la consola y en una lista en el DOM
    console.log(pokemon.types);
    let lista = document.createElement("ul");
    for (let i = 0; i < pokemon.types.length; i++) {
      const tipo = pokemon.types[i];

      let item = document.createElement("li");
      item.innerText = tipo.type.name;
      lista.appendChild(item);
    }
    typesList.appendChild(lista);

    // Mostrar la imagen del Pokémon en la consola y en el elemento del DOM
    console.log(pokemon.sprites.front_default);
    image.setAttribute("src", pokemon.sprites.front_default);
  })
  .catch((error) => console.error(error)); // Manejar errores en la solicitud
