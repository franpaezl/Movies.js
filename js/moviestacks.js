
import { todosLosGeneros, crearOption, filtrarPorBusqueda, filtrarPorGenero } from "./functions.js";

let peliculasFavs;

// Verificar si hay favoritos almacenados en localStorage
if (localStorage.getItem("favs")) {
  peliculasFavs = JSON.parse(localStorage.getItem("favs"));
} else {
  peliculasFavs = [];
}

function crearCarta(objeto, esFavorito) {
  let iconColor = esFavorito ? "text-yellow-500" : "text-white";

  let carta = `   <div class="carta flex flex-col items-center bg-[#D2CCFF] w-[100%] md:w-[250px] gap-[10px] rounded-[20px] overflow-hidden relative">
  <a class="flex flex-col md:flex-row flex-wrap justify-center gap-[20px]" href="./detalles.html?id=${objeto.id}" target="_blank">

      <img src="${objeto.image}" alt="${objeto.title}" class="w-[100%]" />
      <h3 class="text-[20px] text-center font-bold">${objeto.title}</h3>
      <h4 class="p-3 font-semibold">${objeto.tagline}</h4>
      <p class="p-3">${objeto.overview}</p>
      </a>
      <i data-id="${objeto.id}" data-fav="${esFavorito}" class="icon border-2 border-black p-2 bg-black rounded text-white absolute top-7 right-7 fa-solid fa-star fa-xl ${iconColor} hover:text-yellow-500"></i>
      </div>
  `;

  return carta;
}

function crearCartas(array, contenedorAppend) {
  let vacia = "";
  array.forEach((value) => {
    // Verificar si el id está en peliculasFavs para determinar si es favorito
    let esFavorito = peliculasFavs.includes(value.id);
    vacia += crearCarta(value, esFavorito);
  });
  contenedorAppend.innerHTML = vacia;
}

let select = document.querySelector(".select-genero");
let form = document.querySelector(".form");
let cartas = document.querySelector(".cartas");
cartas.className = "flex flex-col md:flex-row flex-wrap justify-center gap-[20px]";

let search = document.createElement("input");
search.className = "px-[5px]";
search.setAttribute("type", "text");
search.id = "buscar";
search.setAttribute("placeholder", "Search");
form.appendChild(search);

fetch("https://moviestack.onrender.com/api/movies", {
  headers: {
    "x-api-key": "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"
  }
})
  .then(response => response.json())
  .then(data => {
    let dataMovies = data.movies;
    dataMovies.forEach(pelicula => pelicula.image = `https://moviestack.onrender.com/static/${pelicula.image}`);
    
    crearCartas(dataMovies, cartas);
    crearOption(dataMovies, select);

    select.addEventListener("input", (event) => {
      event.preventDefault();
      let genero = event.target.value;
      let filtrarGenero = filtrarPorGenero(dataMovies, genero);
      let filtrarPorGeneroYBuscador = filtrarPorBusqueda(filtrarGenero, search.value);
      crearCartas(filtrarPorGeneroYBuscador, cartas);
    });

    search.addEventListener("input", (event) => {
      event.preventDefault();
      let buscador = event.target.value;
      let filtroBusqueda = filtrarPorBusqueda(dataMovies, buscador);
      let filtrarPorGeneroYBuscador = filtrarPorGenero(filtroBusqueda, select.value);
      crearCartas(filtrarPorGeneroYBuscador, cartas);
    });

    cartas.addEventListener("click", (event) => {
      let idPeliFav = event.target.dataset.id;
      let fav = event.target.dataset.fav;
    
      if (fav) { 
        if (peliculasFavs.includes(idPeliFav)) {
          peliculasFavs = peliculasFavs.filter((id) => id !== idPeliFav);
          event.target.classList.remove("text-yellow-500");
          event.target.classList.add("text-white");
        } else {
          peliculasFavs.push(idPeliFav);
          event.target.classList.remove("text-white");
          event.target.classList.add("text-yellow-500");
        }
    
        localStorage.setItem("favs", JSON.stringify(peliculasFavs));
        event.target.dataset.fav = !fav; 
      }
    });

  })
  .catch(err => console.log(err));


