export class Usuario {
    _id?:any
    nombre: string;
    apellido: string;
    tipodocumento: string;
    fecha: string;
    correo: string;
    documento: number; 
    contacto: number;
    clave: string;


    constructor(nombre: string, apellido: string, tipodocumento: string, fecha: string, correo: string, documento: number, contacto: number, clave: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.tipodocumento = tipodocumento
        this.fecha = fecha;
        this.correo = correo;
        this.documento = documento;
        this.contacto = contacto;
        this.clave = clave;
    }
}