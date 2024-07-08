let contenedor = document.querySelector(".contenedor");

contenedor.classList.add("flex", "flex-col", "bg-black");

let header = document.createElement("header");

let main = document.createElement("main");

let footer = document.createElement("footer");

contenedor.appendChild(header);

header.classList.add(
  "flex",
  "flex-col",
  "justify-between",
  "items-center",
  "md:flex-row",
  "border-b",
  "border-[#D2CCFF]"
);

contenedor.appendChild(main);

contenedor.appendChild(footer);

let faviconYLogo = ` <img src="./assets/Moviestack_favicon.png" alt="icono" class="h-[120px] md:h-[150px]">
        <img src="./assets/Moviestack_logotipo2.png" alt="" class="h-[120px] md:h-[150px]"></img>`;

let logos = document.createElement("div");

logos.innerHTML = faviconYLogo;

logos.classList.add("logos", "flex", "justify-center", "items-center");

header.appendChild(logos);

let nav = document.createElement("nav");

nav.classList.add("flex", "justify-center", "md:pr-[80px]");

let textoDeA = ["HOME", "MOVIES", "FAVS"];

textoDeA.forEach((texto) => {
  let a = document.createElement("a");
  a.setAttribute("href", "#");
  a.classList.add(
    "a",
    "text-[15px]",
    "text-[#FFFFFF]",
    "px-[30px]",
    "font-bold",
    "md:text-[20px]",
    "hover:border-white",
    "hover:border-2"
  );
  a.innerText = texto;
  if (texto == "HOME"){
    a.setAttribute("href", "./index.html")
  }
  else if (texto == "MOVIES") {
    a.setAttribute("id", "active");
    a.setAttribute("href", "#")
  }
  else a.setAttribute("href", "#")
  nav.appendChild(a);
});

header.appendChild(nav);

let section = document.createElement("section");

section.classList.add(
  "section",
  "flex",
  "flex-col",
  "justify-center",
  "items-center",
  "py-[10px]",
  "px-[10px]",
  "md:py-[100px]",
  "md:px-[100px]",
  
);

main.appendChild(section);

let tituloMovies = document.createElement("h2");

let textoTituloMovies = "MOVIES";

tituloMovies.textContent = textoTituloMovies;

tituloMovies.classList.add(
  "bg-[#D2CCFF]",
  "text-center",
  "py-[20px]",
  "text-[20px]",
  "md:text-[50px]",
  "mt-[20px]",
  "w-[100%]"
);

section.appendChild(tituloMovies);

function cartas(imagen, titulo, tagline, descripcion) {
  let carta = `
<div class= " flex flex-col  items-center bg-[#D2CCFF] w-[100%] md:w-[250px] gap-[10px] rounded-[20px] overflow-hidden">
<img src="${imagen}" alt="" class="w-[100%]">
<h3 class="text-[20px] text-center font-bold">${titulo}</h3>
<h4 class= "p-3 font-semibold">${tagline}</h4>
<p class= "p-3">${descripcion}</p>
</div>
`;
  return carta;
}

function crearCarta(array) {
  let cartaPelicula = document.createElement("div");
  cartaPelicula.classList.add(
    "flex",
    "flex-col",
    "flex-wrap",
    "md:flex-row",
    "gap-[20px]",
    "py-[40px]",
    "justify-center"
  );
  array.forEach((valor) => {
    let cartaPeliculaHTML = cartas(
      valor.image,
      valor.title,
      valor.tagline,
      valor.overview
    );
    cartaPelicula.innerHTML += cartaPeliculaHTML;
    section.appendChild(cartaPelicula);
  });
}
crearCarta(peliculas);

//

let pFooter = document.createElement("p");

let pFooterContenido = "MindHub - Cohort 55";

pFooter.innerText = pFooterContenido

footer.classList.add("border-t-2", "border-gray-500", "text-center" ,"text-[#FFFFFF]", "py-[30px]");

footer.appendChild(pFooter)

