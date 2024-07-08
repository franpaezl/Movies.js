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

let faviconYLogo = ` <img src="./assets/Moviestack_isotipo.png" alt="icono" class="h-[120px] md:h-[150px]">
        <img src="./assets/Moviestack_logotipo2.png" alt="" class="h-[120px] md:h-[150px]"></img>`;

let logos = document.createElement("div");

logos.innerHTML = faviconYLogo;

logos.classList.add("logos", "flex", "justify-center", "items-center");

header.appendChild(logos);

let nav = document.createElement("nav");

nav.classList.add("flex", "justify-center", "md:pr-[80px]");

let textoDeA = ["HOME", "MOVIES", "FAVS"];
textoDeA.forEach(texto =>{
    let a = document.createElement("a");
    a.classList.add("a","text-[15px]" ,"text-[#FFFFFF]" ,"px-[30px]", "font-bold", "md:text-[20px]" , "hover:border-white", "hover:border-2")
    a.innerText = texto
    if(texto == "HOME"){
        a.id = "active"
        a.setAttribute("href", "#")
    }
    else if(texto == "MOVIES"){
      a.setAttribute("href", "./movies.html");
  }
  else a.setAttribute("href", "#")
    nav.appendChild(a)
})

header.appendChild(nav);



//

main.classList.add(
  "flex",
  "flex-col",
  "py-[10px]",
  "px-[10px]",
  "md:py-[100px]",
  "md:px-[100px]",
  "items-center",
  "text-[#FFFFFF]"
);

let contenidoGladiador = document.createElement("div")

contenidoGladiador.classList.add("flex" ,"flex-col");

main.appendChild(contenidoGladiador)

let banner = document.createElement("img");

banner.classList.add("banner","md:w-[100%]");

banner.setAttribute("src", "./assets/movie-trendy-banner-vector.jpg");

contenidoGladiador.appendChild(banner);

let pMain = document.createElement("p");

let pMainTexto = `
A movie website, named "CinePlus," offers users an immersive and easy-to-navigate experience. The homepage features the latest releases with high-resolution images and video trailers. An intuitive navigation bar allows users to explore different genres such as action, comedy, drama, and science fiction. Each movie has a dedicated page with details like synopsis, cast, director, and duration. Users can read and leave reviews, as well as view the average rating. CinePlus also offers personalized recommendations based on the user's viewing history. An advanced search function allows finding movies by title, actor, or director. The site is fully responsive, ensuring an optimal experience on both mobile devices and desktops. CinePlus integrates options for creating favorite lists and receiving notifications about upcoming releases. Additionally, the website includes a blog with news and articles about the world of cinema, keeping users informed about the latest events and trends in the film industry.`;

pMain.innerText = pMainTexto;

contenidoGladiador.appendChild(pMain);


let contenidoBotones = document.createElement("div");

contenidoBotones.classList.add("my-[50px]","gap-[20px]" ,"flex" , "flex-col" , "w-[100%]" , "md:flex-row");

main.appendChild(contenidoBotones);


let botonMovies = document.createElement("div");

botonMovies.innerHTML = "<p>MOVIES</p>" ;

botonMovies.classList.add("w-[100%]"  , "md:w-[50%]" , "h-[300px]", "bg-[#D2CCFF]" , "flex" ,"justify-center", "items-center" , "text-[#000000]", "text-[30px]")

const redirigirAPagina = () =>{
    window.location.href = "./movies.html"
}

botonMovies.addEventListener("click", redirigirAPagina)

contenidoBotones.appendChild(botonMovies)


let botonFavs = document.createElement("div");

botonFavs.innerHTML = "<p>FAVS</p>" ;

botonFavs.classList.add("w-[100%]"  , "md:w-[50%]" , "h-[300px]", "bg-[#D2CCFF]" , "flex" ,"justify-center", "items-center" , "text-[#000000]", "text-[30px]")

contenidoBotones.appendChild(botonFavs)







//

let pFooter = document.createElement("p");

let pFooterContenido = "MindHub - Cohort 55";

pFooter.innerText = pFooterContenido

footer.classList.add("border-t-2", "border-gray-500", "text-center" ,"text-[#FFFFFF]", "py-[30px]");

footer.appendChild(pFooter)
