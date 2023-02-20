import { Representante } from "./Representante";

export class Estudiante {
    id_estudiante: number;
    cedula: String;
    nombre: String;
    segundo_nombre: String;
    primer_apellido: String;
    segundo_apellido: String;
    genero: String;
    fecha_nacimiento: Date;
    correo: any;
    direccion: String;
    estado: boolean = true;
    representante: Representante;
}