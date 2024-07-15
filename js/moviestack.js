let section = document.querySelector(".section");

function cartas(imagen, titulo, tagline, descripcion,id) {
  let carta = `<a class="flex flex-col md:flex-row flex-wrap justify-center gap-[20px]"  href="./detalles.html?id=${id}">
  <div class= "carta flex flex-col  items-center bg-[#D2CCFF] w-[100%] md:w-[250px] gap-[10px] rounded-[20px] overflow-hidden">
 <img src="${imagen}" alt="" class="w-[100%]">
  <h3 class="text-[20px] text-center font-bold">${titulo}</h3>
 <h4 class= "p-3 font-semibold">${tagline}</h4>
  <p class= "p-3">${descripcion}</p>
  </div>
  </a>
  `;
  return carta;
}

let contenedor = document.createElement("div");

contenedor.className =
  "flex flex-col md:flex-row flex-wrap justify-center gap-[20px]";

function crearCartas(array) {
  let vacia = "";
  array.forEach((value) => {
    vacia += cartas(value.image, value.title, value.tagline, value.overview, value.id);
  });
  contenedor.innerHTML = vacia;
}

crearCartas(peliculas);

section.appendChild(contenedor);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let select = document.querySelector(".select-genero");

function todosLosGeneros(array) {
  let todosLosGeneros = array.map((pelicula) => pelicula.genres).flat();
  let generosSinRepetir = Array.from(new Set(todosLosGeneros));
  return generosSinRepetir;
}

function crearOption(array) {
  let generos = todosLosGeneros(array);
  generos.unshift("Default")
  generos.forEach(genero => {
    let option = document.createElement("option");
    option.value = genero;
    option.textContent = genero;
    select.appendChild(option);
  });
}

crearOption(peliculas);

let form = document.querySelector(".form");


let search = document.createElement("input");
search.className = "px-[5px]"
search.setAttribute("type", "text")
search.id = "buscar"
search.setAttribute("placeholder", "Search")

form.appendChild(search)



select.addEventListener("input" ,(event)=>{
  event.preventDefault()
  let genero = event.target.value;
  let filtrarGenero = filtrarPorGenero(peliculas,genero);
  let filtrarPorGeneroYBuscador = filtrarPorBusqueda(filtrarGenero, search.value)
  crearCartas(filtrarPorGeneroYBuscador)
  
} );


function filtrarPorGenero(array,valor){
  let peliculasFiltradaPorGenero = [];
  if (valor === "Default") {
    peliculasFiltradaPorGenero = array
    
  }
  else peliculasFiltradaPorGenero = array.filter(pelicula=>pelicula.genres.includes(valor));

  return peliculasFiltradaPorGenero

};



search.addEventListener("input", (event)=>{
  event.preventDefault()
  let buscador = event.target.value
  let filtroBusqueda = filtrarPorBusqueda(peliculas,buscador);
  let filtrarPorGeneroYBuscador = filtrarPorGenero(filtroBusqueda, select.value)
  crearCartas(filtrarPorGeneroYBuscador)
});


function filtrarPorBusqueda(array,valor){
  let filtradorDeBusqueda = array.filter(pelicula=>pelicula.title.toLowerCase().includes(valor.toLowerCase()));
  return filtradorDeBusqueda
  
};

///////////////////////////////////////////////////////////////////////////////////////////////

