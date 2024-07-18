let contenedorDetalles = document.querySelector(".contenedordetalles");

let urlParams = new URLSearchParams(window.location.search);
let movieId = urlParams.get("id");

fetch("https://moviestack.onrender.com/api/movies", {
    headers: {
        "x-api-key": "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"
    }
})
.then(response => response.json())
.then(data => {    let dataMovies = data.movies
    dataMovies.forEach(pelicula=>pelicula.image = `https://moviestack.onrender.com/static/${pelicula.image}`)
    let peliculaParaMostrarEnDetalle = dataMovies.find(
        (pelicula) => pelicula.id.toLowerCase() === movieId.toLowerCase()
    );

    function crearDetallesPelicula(
        imagen,
        lenguaje,
        fecha,
        tiempo,
        estado,
        titulo,
        tagline,
        genero,
        descripcion,
        voteaverage,
        budget,
        revenue
    ) {
        let peli = `
            <div class="contenedordetalles__hijo md:w-1/2 flex flex-col">
                <img src="${imagen}" alt="">
                <table class="my-[20px]">
                    <tr>
                        <td>Original Lenguaje</td>
                        <td>${lenguaje}</td>
                    </tr>
                    <tr>
                        <td>Release Date</td>
                        <td>${fecha}</td>
                    </tr>
                    <tr>
                        <td>Runtime</td>
                        <td>${tiempo}</td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <td>${estado}</td>
                    </tr>
                </table>
            </div>
            <div class="contenedordetalles__hijo md:w-1/2 flex flex-col gap-[20px]">
                <h3 class="text-[40px] font-black">${titulo}</h3>
                <h4 class="text-[30px] font-bold">${tagline}</h4>
                <h5 class="text-[20px] italic">${genero}</h5>
                <p>${descripcion}</p>
                <table>
                    <tr>
                        <td>Vote Average</td>
                        <td>${voteaverage}</td>
                    </tr>
                    <tr>
                        <td>Budget</td>
                        <td>USD ${budget}</td>
                    </tr>
                    <tr>
                        <td>Revenue</td>
                        <td>USD ${revenue}</td>
                    </tr>
                </table>
            </div>`;
        return peli;
    }

    function dibujarCartaPelicula(pelicula) {
        let detallesPeliculaHTML = crearDetallesPelicula(
            pelicula.image,
            pelicula.original_language,
            pelicula.release_date,
            pelicula.runtime,
            pelicula.status,
            pelicula.title,
            pelicula.tagline,
            pelicula.genres.join(", "),
            pelicula.overview,
            pelicula.vote_average,
            pelicula.budget,
            pelicula.revenue
        );

        contenedorDetalles.innerHTML = detallesPeliculaHTML;
    }

    dibujarCartaPelicula(peliculaParaMostrarEnDetalle);
})
.catch(error => console.error("Error fetching movies:", error));
