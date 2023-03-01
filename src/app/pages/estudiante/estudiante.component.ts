import { Component, ViewChild } from '@angular/core';
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
    @ViewChild('datosModalRef') datosModalRef: any;

    estudiantes: any[] = [];
    public estudiante = new Estudiante();
    representante = new Representante();
    public busqueda: string;

    editDatos(estudiante: Estudiante) {
        this.estudiante.id_estudiante = estudiante.id_estudiante
        this.estudiante.correo = estudiante.correo
        this.estudiante.direccion = estudiante.direccion
        this.datosModalRef.nativeElement.querySelector('[name="correo"]').value = estudiante.correo;
        this.datosModalRef.nativeElement.querySelector('[name="direccion"]').value = estudiante.direccion;
    }

    constructor(private route: Router, private estudianteService: EstudianteService,
        private representanteService: RepresentanteService) { }

    ngOnInit(): void {
        this.listarEstudiantes();
    }

    search(event: Event) {
        const inputElement = event.target as HTMLInputElement;
        const inputValue = inputElement.value;
        this.estudianteService.search(inputValue)
            .subscribe(response => {
                this.estudiantes = response;
                console.log(response)
            });
    }

    listarEstudiantes(): void {
        this.estudianteService.listarEstudiantes().subscribe(
            (data) => {
                this.estudiantes = data;
                console.log(data);
            },
            (error) => {
                console.error('Error al listar estudiantes:', error);
            }
        );
    }

    crearEstudiante(): void {
        this.estudianteService.createEstudiante(this.estudiante)
            .subscribe(
                (response) => {
                    console.log('Estudiante creado con éxito:', response);
                },
                (error) => {
                    console.error('Error al crear estudiante:', error);
                }
            );
    }

    eliminarEstudiante(id: number) {
        this.estudianteService.eliminarEstudiante(id).subscribe(() => {
            alert('Estudiante eliminado');
            this.estudiantes = this.estudiantes.filter((estudiante) => estudiante.id !== id);
            this.listarEstudiantes()
        });
    }

    actualizarEstudiante() {
        this.estudianteService.updateEstudiante(this.estudiante.id_estudiante, this.estudiante)
            .subscribe(response => {
                this.estudiante = new Estudiante();
                this.listarEstudiantes();
            });
    }
}
