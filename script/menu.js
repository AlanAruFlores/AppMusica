let menuBoton = document.getElementById("botonmenu");
let menuBoton2 = document.getElementById("botonmenu2");

let contenedorGrid = document.getElementById("contenedor-grid")
let menuNavegacion = document.getElementById("menu-nav");



menuBoton.addEventListener("click", activarMenu);

function activarMenu(){
    if(menuNavegacion.style.display=="none"){
        contenedorGrid.style.display="grid";
        contenedorGrid.style.gridTemplateColumns="1fr 1fr 1fr 1fr 1fr 1fr";
        contenedorGrid.style.gridTemplateRows="18vh 20vh 10vh 160vh 30vh";
        contenedorGrid.style.gridTemplateAreas=' "head head head head head head" "nav nav nav nav nav nav" "titulo titulo titulo titulo titulo titulo" "body body body body body body" "foot foot foot foot foot foot"';
        menuNavegacion.style.display="flex";
        menuNavegacion.style.gridArea="nav";


        setTimeout(()=>{
            menuNavegacion.visibility="visible";
            menuNavegacion.style.transition="all 1s";
            menuNavegacion.style.opacity="1";
            menuNavegacion.style.display="flex";
        },100);

    }
    else{
        contenedorGrid.style.display="grid";
        contenedorGrid.style.gridTemplateColumns= "repeat(6,1fr)";
        contenedorGrid.style.gridTemplateRows="18vh 10vh 160vh 30vh";
        contenedorGrid.style.gridTemplateAreas=' "head head head head head head" "titulo titulo titulo titulo titulo titulo" "body body body body body body" "foot foot foot foot foot foot"';

        menuNavegacion.style.transition="all 1s";
        menuNavegacion.style.opacity="0";
        menuNavegacion.style.display="none";
        menuNavegacion.visibility="hidden";

    }
}



menuBoton2.addEventListener("click", activarMenu2);
function activarMenu2(){
    if(menuNavegacion.style.display == "none"){
        indicador = 1;
        contenedorGrid.style.display="grid";
        contenedorGrid.style.gridTemplateColumns="1fr 1fr 1fr 1fr 1fr 1fr";
        contenedorGrid.style.gridTemplateRows="18vh 10vh 80vh 30vh";
        contenedorGrid.style.gridTemplateAreas=' "head head head head head head" "nav titulo titulo titulo titulo titulo" "nav body body body body body" "nav body body body body body" "foot foot foot foot foot foot"';
        menuNavegacion.style.display="flex";
        menuNavegacion.style.gridArea="nav";


        setTimeout(()=>{
            menuNavegacion.visibility="visible";
            menuNavegacion.style.transition="all 1s";
            menuNavegacion.style.opacity="1";
            menuNavegacion.style.display="flex";
        },100);

    }
    else{
        indicador = 0; 
        contenedorGrid.style.display="grid";
        contenedorGrid.style.gridTemplateColumns= "repeat(6,1fr)";
        contenedorGrid.style.gridTemplateRows="18vh 1ovh 80vh 30vh";
        contenedorGrid.style.gridTemplateAreas=' "head head head head head head" "titulo titulo titulo titulo titulo titulo" "body body body body body body" "foot foot foot foot foot foot"';
        "body body body body body body"
        "foot foot foot foot foot foot";

        menuNavegacion.style.transition="all 1s";
        menuNavegacion.style.opacity="0";
        menuNavegacion.style.display="none";
        menuNavegacion.visibility="hidden";

    }
}
