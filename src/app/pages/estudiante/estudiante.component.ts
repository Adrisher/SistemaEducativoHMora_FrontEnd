import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { RepresentanteService } from 'src/app/services/representante.service';
import { Estudiante } from '../estudiante/Estudiante';
import { Representante } from './Representante';

@Component({
    selector: 'app-estudiante',
    templateUrl: './estudiante.component.html',
    styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent {

    estudiantes: any[] = [];
    estudiante: Estudiante = new Estudiante();

    constructor(private route: Router, private estudianteService: EstudianteService,
        private representanteService: RepresentanteService) { }

    ngOnInit(): void {
        this.listarEstudiantes();
    }

    listarEstudiantes(): void {
        this.estudianteService.listarEstudiantes().subscribe(
            (data) => {
                this.estudiantes = data;
                console.log(data);
            },
            (error) => {
                console.error('Error al listar estudiantes:', error);
                // Aquí se podría mostrar un mensaje de error más claro para el usuario
            }
        );
    }

    crearEstudiante(): void {
        this.estudianteService.createEstudiante(this.estudiante)
            .subscribe(
                (response) => {
                    console.log('Estudiante creado con éxito:', response);
                    // Realizar cualquier acción necesaria con la respuesta
                },
                (error) => {
                    console.error('Error al crear estudiante:', error);
                    // Realizar cualquier acción necesaria en caso de error
                }
            );
    }

    deleteStudent(id: number): void {
        this.estudianteService.eliminarEstudiante(id).subscribe(
            response => {
                console.log('Estudiante eliminado correctamente', response);
                this.estudiantes = this.estudiantes.filter(estudiante => estudiante.id !== id);
            },
            error => {
                console.error('Error al eliminar el estudiante', error);
            }
        );
    }

    // getRepresentantes() {
    //     this.representanteService.getAllRepresentantes().subscribe((data: Representante[]) => {
    //         this.representantes = data;
    //     });
    // }

    // crearRepresentante(representante: Representante) {

    //     this.representanteService.createRepresentante(representante).subscribe((data: Representante) => {
    //         console.log(data);
    //         this.getRepresentantes();
    //     });
    // }

    // eliminarRepresentante(id: number) {
    //     this.representanteService.deleteRepresentante(id).subscribe((data: any) => {
    //         console.log(data);
    //         this.getRepresentantes();
    //     });
    // }

    // actualizarRepresentante(id: number, representante: Representante) {
    //     this.representanteService.updateRepresentante(id, representante).subscribe((data: any) => {
    //         console.log(data);
    //         this.getRepresentantes();
    //     });
    // }


    // createStudent(): void {
    //     this.estudianteService.createEstudiante(this.estudiante).subscribe(
    //         response => {
    //             console.log('Datos guardados correctamente', response);
    //             this.estudiantes.push(response);
    //         },
    //         error => {
    //             console.error('Error al guardar los datos', error);
    //         }
    //     );
    // }

    

    // updateStudent(id: number, estudiante: Estudiante): void {
    //     this.estudianteService.updateEstudiante(estudiante).subscribe(
    //         response => {
    //             console.log('Estudiante actualizado correctamente', response);
    //             this.estudiantes = this.estudiantes.map(e => e.id === estudiante.id ? estudiante : e);
    //         },
    //         error => {
    //             console.error('Error al actualizar el estudiante', error);
    //         }
    //     );
    // }

}
