import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { RepresentanteService } from 'src/app/services/representante.service';
import { Estudiante } from '../estudiante/Estudiante';

@Component({
    selector: 'app-estudiante',
    templateUrl: './estudiante.component.html',
    styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent {

    estudiantes: Estudiante[] = [];
    estudiante: Estudiante = new Estudiante();

    constructor(private route: Router, private estudianteService: EstudianteService,
        private representanteService: RepresentanteService) { }

    ngOnInit(): void {
        this.getAllStudents();
    }

    getAllStudents(): void {
        this.estudianteService.getAllEstudiantes().subscribe(
            res => {
                console.log(res);
                this.estudiantes = res;
            },
            error => {
                console.log(error);
            }
        );
    }


    createStudent(): void {
        this.estudianteService.createEstudiante(this.estudiante).subscribe(
            response => {
                console.log('Datos guardados correctamente', response);
                this.estudiantes.push(response);
            },
            error => {
                console.error('Error al guardar los datos', error);
            }
        );
    }

    deleteStudent(id: number): void {
        this.estudianteService.deleteEstudiante(id).subscribe(
            response => {
                console.log('Estudiante eliminado correctamente', response);
                this.estudiantes = this.estudiantes.filter(estudiante => estudiante.id !== id);
            },
            error => {
                console.error('Error al eliminar el estudiante', error);
            }
        );
    }

    updateStudent(id: number, estudiante: Estudiante): void {
        this.estudianteService.updateEstudiante(estudiante).subscribe(
            response => {
                console.log('Estudiante actualizado correctamente', response);
                this.estudiantes = this.estudiantes.map(e => e.id === estudiante.id ? estudiante : e);
            },
            error => {
                console.error('Error al actualizar el estudiante', error);
            }
        );
    }
    
}
