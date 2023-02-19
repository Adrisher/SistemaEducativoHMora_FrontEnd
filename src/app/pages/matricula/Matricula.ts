import { Curso } from "../curso/Curso";
import { Estudiante } from "../estudiante/Estudiante";

export class Matricula {
    id_matricula: number;
    fecha: Date;
    observaciones: string;
    curso: Curso;
    estudiante: Estudiante;
    id_periodo: any;
}


// export class Matricula_Detalle {
//     id_detalle: number;
//     gracia: number;
//     promedio_final: number;
//     remedial: number;
//     supletorio: number;
//     id_materia: any;
//     id_matricula: any;
// }