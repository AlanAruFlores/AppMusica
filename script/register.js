import {Usuario} from "./usuario.js";

let usuarios = [];
/*Obtengo todos los elementos labels */
let usuario = document.getElementById("label_usuario");
let contrasenia = document.getElementById("label_contrasenia");
let fecha = document.getElementById("label_fecha");
let mail = document.getElementById("label_mail");


/*Obtengo los campos*/
let inputUsuario = document.querySelector("#usuario");
let inputContrasenia = document.querySelector("#contrasenia");
let inputFecha = document.querySelector("#fecha");
let inputMail = document.querySelector("#mail");


let regExpUsuario = new RegExp("^[a-z]*[A-Z]+[a-z]+$","");
let regExpContrasenia = new RegExp("^[A-Za-z0-9]{8,}$","i");
let regExpMail = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$","");

let usuarioCorrecto  = false, contraseniaCorrecta =  false,
mailCorrecta = false, fechaNoVacia = false;



let formulario  = document.getElementById("formulario-registro");

function registrarData(){
    
    let usuario = new Usuario(inputUsuario.value,inputContrasenia.value, inputFecha.value, inputMail.value);
    if(localStorage.getItem("usuarios") != null){
        usuarios = JSON.parse(localStorage.getItem("usuarios"));
    }
    usuarios.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

function habilitarDeshabilitarRegistro(){
    let botonRegistro = document.getElementById("boton-registro");
    let anchor = botonRegistro.children[0]; //Obtengo el hijo href

    if(usuarioCorrecto==true && contraseniaCorrecta==true && mailCorrecta==true && fechaNoVacia==true){
        botonRegistro.className ="login-button";
        botonRegistro.addEventListener("click", registrarData);        
        return anchor.setAttribute("href", "index.html");
    }
    
    botonRegistro.className = "login-button-desactivado";
    botonRegistro.removeEventListener("click", registrarData);
    return anchor.setAttribute("href", "#formulario_registro");
}

formulario.addEventListener("change",habilitarDeshabilitarRegistro);

inputUsuario.addEventListener("keyup",function(event){
    usuarioCorrecto = regExpUsuario.test(event.target.value);
    habilitarDeshabilitarRegistro();
    if(!usuarioCorrecto){
        usuario.style.color = "#fc2a2a";
        usuario.style.fontWeight ="bold";
        return usuario.textContent = "Debe contener mayuscula y minusculas. No acepta espacios"; 
    }
    
    usuario.style.color = "#92e618"
    return usuario.textContent = "Usuario valido"; 
});

inputContrasenia.addEventListener("keyup",function(event){
    contraseniaCorrecta = regExpContrasenia.test(event.target.value);
    habilitarDeshabilitarRegistro();
    if(!contraseniaCorrecta){
        contrasenia.style.color = "#fc2a2a";
        contrasenia.style.fontWeight ="bold";
        return contrasenia.textContent = "Debe tener: 8 caracteres. No acepta espacios"; 
    }
    
    contrasenia.style.color = "#92e618"
    return contrasenia.textContent = "Contraseña valido"; 
});

inputFecha.addEventListener("change",function(event){
    habilitarDeshabilitarRegistro();
    if(event.target.value == ""){
        fecha.style.color = "#fc2a2a";
        fecha.style.fontWeight ="bold";
        fechaNoVacia = false;
        return fecha.textContent = "La fecha no puede estar vacia";

    }
    fecha.style.color = "#92e618"
    fechaNoVacia = true;
    return fecha.textContent = "Fecha valida"; 

})


inputMail.addEventListener("keyup", function(event){
    mailCorrecta = regExpMail.test(event.target.value);
    habilitarDeshabilitarRegistro();
    if(!mailCorrecta){
        mail.style.color = "#fc2a2a";
        mail.style.fontWeight ="bold";
        return mail.textContent = "Mail incorrecto";
    }

    mail.style.color="#92e618";
    return mail.textContent = "Mail Correcto"; 
})










