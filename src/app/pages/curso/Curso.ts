export class Curso {
    id_curso: number;
    ciclo: any;
    cupo: number;
    paralelo: any;

    toString(): string {
        return `${this.paralelo}`;
    }
}