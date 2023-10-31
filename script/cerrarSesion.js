let cerrarSesionBoton = document.getElementById("cerrar_sesion");

cerrarSesionBoton.addEventListener("click" , function(){
    sessionStorage.removeItem("usuarioLogeado");
});