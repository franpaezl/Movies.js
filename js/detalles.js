let contenedorDetalles = document.querySelector(".contenedordetalles");

let urlParamsRoute = new URLSearchParams(window.location.search);

console.log(typeof window.location.search);

let peliculaParaMostrarEnDetalle = peliculas.find(
  (pelicula) =>
    pelicula.id.toLocaleLowerCase() === urlParamsRoute.get("id".toLowerCase())
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
  let peli = `            <div class="contenedordetalles__hijo md:w-1/2 flex flex-col">
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
                        <td>Reveneu</td>
                        <td>USD ${revenue}</td>
                    </tr>

                </table>`;
  return peli;
}

function dibujarCartaPelicula(array) {
  let detallesPeliculaHTML = crearDetallesPelicula(
    array.image,
    array.original_language,
    array.release_date,
    array.runtime,
    array.status,
    array.title,
    array.tagline,
    array.genres.join(", "),
    array.overview,
    array.vote_average,
    array.budget,
    array.revenue
  );

  contenedorDetalles.innerHTML = detallesPeliculaHTML;
}
dibujarCartaPelicula(peliculaParaMostrarEnDetalle);
