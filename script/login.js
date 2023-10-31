import {Usuario} from "./usuario.js";

let inputUsuario = document.getElementById("usuario");
let inputContrasenia = document.getElementById("contrasenia");


let labelUsuario = document.getElementById("label_usuario");
let labelContrasenia = document.getElementById("label_contrasenia");


let formulario = document.getElementById("form");
let botonLogin = document.getElementById("boton-login");
let campoVacioExp = new RegExp("^[\s]*$","");
let anchor = botonLogin.children[0];

botonLogin.addEventListener("click", function(){
    if(campoVacioExp.test(inputUsuario.value) || campoVacioExp.test(inputContrasenia.value)){
        labelUsuario.textContent="No puede estar vacio";
        labelUsuario.style.color = "#fc2a2a";
        labelContrasenia.textContent="No puede estar vacio";
        labelContrasenia.style.color = "#fc2a2a";
        anchor.setAttribute("href", "#form");
        return "";
    }
    let usuarios = JSON.parse(localStorage.getItem("usuarios"));
    console.log(usuarios);
    let usuarioEncontrado = buscarUsuarioPorNombreContrasenia(usuarios, inputUsuario.value, inputContrasenia.value);
   console.log(usuarioEncontrado);
    if(usuarios == null || usuarioEncontrado == null){
        labelContrasenia.textContent="Contraseña incorrecta";
        labelUsuario.textContent="Usuario incorrecto";
        labelContrasenia.style.color = "#fc2a2a";
        labelUsuario.style.color = "#fc2a2a";    
        anchor.setAttribute("href", "#form");
        return "";
    }

    sessionStorage.setItem("usuarioLogeado", JSON.stringify(usuarioEncontrado));
    anchor.setAttribute("href", "interaz2.html");

});


function buscarUsuarioPorNombreContrasenia(usuarios,nombre,contrasenia){
    for (const usuario of usuarios) {
        if(usuario.nombre == nombre && usuario.contrasenia == contrasenia){
            return usuario;
        }
    }
    return null;
}