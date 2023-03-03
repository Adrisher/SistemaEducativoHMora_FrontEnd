import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CursoService } from 'src/app/services/curso.service';
import { Curso } from './Curso';
import Swal from 'sweetalert2';


@Component({
    selector: 'app-curso',
    templateUrl: './curso.component.html',
    styleUrls: ['./curso.component.css']
})
export class CursoComponent {
    public cursos: any[] = [];
    public curso = new Curso();
    editando: boolean = false;

    constructor(private cursoService: CursoService, private router: Router) { }
    ngOnInit(): void {
        this.listarCursos();
    }
    listarCursos(): void {
        this.cursoService.listarCursos().subscribe(
            (data) => {
                this.cursos = data;
                console.log(data);
            },
            (error) => {
                console.error('Error al listar cursos:', error);
            }
        );
    }
    crearCurso(): void {
        this.cursoService.createCurso(this.curso)
            .subscribe(
                (response) => {
                    console.log('Curso creado con éxito:', response);
                    this.listarCursos();
                    this.limpiarCampos();
                    Swal.fire({
                        icon: 'success',
                        title: 'Operación completada',
                        text: 'Se ha creado el curso exitosamente',
                    });
                },
                (error) => {
                    console.error('Error al crear curso:', error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Error!',
                        text: 'Se produjo un error al crear el curso.',
                        confirmButtonText: 'Aceptar'
                    });
                }
            );
    }

    eliminarCurso(id: number): void {
        this.cursoService.eliminarCurso(id)
            .subscribe(
                () => {
                    console.log(`Estudiante con id ${id} eliminado correctamente`);
                },
                (error) => {
                    console.error('Error al eliminar estudiante:', error);
                }
            );
    }
    
    limpiarCampos() {
        console.log("Entro a limpiar")
        this.curso.ciclo = null;
        this.curso.cupo = 0;
        this.curso.paralelo = null;
    }
}
