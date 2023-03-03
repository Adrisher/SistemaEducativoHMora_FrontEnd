import { Curso } from "../curso/Curso";
import { Estudiante } from "../estudiante/Estudiante";
import { Periodo } from "../periodo/periodo";

export class Matricula {
    id_matricula: number;
    fecha: string;
    observaciones: string;
    curso: Curso;
    estudiante: Estudiante;
    periodo: Periodo;
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