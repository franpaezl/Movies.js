import { todosLosGeneros, crearOption, filtrarPorBusqueda, filtrarPorGenero } from "./functions.js";

let contenedorFavs = document.querySelector(".contenedorfavs");

function crearCarta(objeto) {
    let carta = `
        <div class="carta flex flex-col items-center bg-[#D2CCFF] w-[100%] md:w-[250px] gap-[10px] rounded-[20px] overflow-hidden relative">
            <img src="${objeto.image}" alt="${objeto.title}" class="w-[100%]" />
            <h3 class="text-[20px] text-center font-bold">${objeto.title}</h3>
            <h4 class="p-3 font-semibold">${objeto.tagline}</h4>
            <p class="p-3">${objeto.overview}</p>
        </div>`;
    return carta;
}

function crearCartas(array, contenedorAppend) {
    let vacia = "";
    array.forEach((value) => {
        vacia += crearCarta(value);
    });
    contenedorAppend.innerHTML = vacia;
}

// Función para obtener las películas y filtrar las favoritas
fetch("https://moviestack.onrender.com/api/movies", {
    headers: {
        "x-api-key": "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"
    }
})
    .then(response => response.json())
    .then(data => {
        let dataMovies = data.movies;
        dataMovies.forEach(pelicula => pelicula.image = `https://moviestack.onrender.com/static/${pelicula.image}`);
        
        // Filtrar las películas favoritas basadas en los IDs almacenados en localStorage
        const peliculasFavoritas = dataMovies.filter((movie) => JSON.parse(localStorage.getItem("favs")).includes(movie.id));

        crearCartas(peliculasFavoritas, contenedorFavs);
    })
    .catch(err => console.log(err));