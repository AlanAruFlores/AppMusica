export class Usuario{
    constructor(nombre, contrasenia, fecha, mail){
        this.nombre = nombre;
        this.contrasenia = contrasenia;
        this.fecha = fecha;
        this.mail = mail;
    }


    get nombre(){
        return this.nombre;
    }
    set nombre(value){
        this.nombre = value;
    }

    get contrasenia(){
        return this.contrasenia;
    }
    set contrasenia(value){
        this.contrasenia = value;
    }

    get fecha(){
        return this.fecha;
    }
    set fecha(value){
        this.fecha = fecha;
    }

    get mail(){
        return this.mail;
    }
    set mail(value){
        this.mail = mail;
    }
}