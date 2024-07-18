export function crearCarta(objeto) {

    let carta = `
            
            <div class="carta flex flex-col items-center bg-[#D2CCFF] w-[100%] md:w-[250px] gap-[10px] rounded-[20px] overflow-hidden relative">
            <img src="${objeto.image}" alt="${objeto.title}" class="w-[100%]" />
            <h3 class="text-[20px] text-center font-bold">${objeto.title}</h3>
                <h4 class="p-3 font-semibold">${objeto.tagline}</h4>
                <p class="p-3">${objeto.overview}</p>
                <i data-id=${objeto.id} data-fav="true" class="icon border-2 border-black p-2 bg-black rounded ${estaFavorito ? "text-yellow-500":"text-white"} absolute top-7 right-7 fa-solid fa-star fa-xl hover:text-yellow-500"></i>
            </div>
        </a>`;
        

    return carta;
}

export function crearCartas(array,contenedorAppend) {
    let vacia = "";
    array.forEach((value) => {
        vacia += crearCarta(value);
    });
    contenedorAppend.innerHTML = vacia;
   
}


export function todosLosGeneros(array) {
    let todosLosGeneros = array.map((pelicula) => pelicula.genres).flat();
    let generosSinRepetir = Array.from(new Set(todosLosGeneros));
    return generosSinRepetir;
  }


export function crearOption(array,contenedorAppend) {
    let generos = todosLosGeneros(array);
    generos.unshift("Default")
    generos.forEach(genero => {  
      let option = document.createElement("option");
      option.value = genero;
      option.textContent = genero;
      contenedorAppend.appendChild(option);
    }
    
  );
  }

export function filtrarPorGenero(array,valor){
    let peliculasFiltradaPorGenero = [];
    if (valor === "Default") {
      peliculasFiltradaPorGenero = array
      
    }
    else peliculasFiltradaPorGenero = array.filter(pelicula=>pelicula.genres.includes(valor));
  
    return peliculasFiltradaPorGenero
  
  };

export function filtrarPorBusqueda(array,valor){
    let filtradorDeBusqueda = array.filter(pelicula=>pelicula.title.toLowerCase().includes(valor.toLowerCase()));
    return filtradorDeBusqueda
    
  };
  

  // <a class="flex flex-col md:flex-row flex-wrap justify-center gap-[20px]" href="./detalles.html?id=${objeto.id}" target="_blank">