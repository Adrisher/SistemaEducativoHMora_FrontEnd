import { Component, ViewChild } from '@angular/core';
import { Profesor } from './profesor';
import { ProfesorService } from 'src/app/services/profesor.service';
import { Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent {
  @ViewChild('materiaModalRef') materiaModalRef: any;

  profesores: any[]=[];
  profesor: Profesor = new Profesor();


  constructor(private profesorService: ProfesorService, private router:Router){}



  ngOnInit(): void {
    this.get();
  }

  search(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value;
    this.profesorService.search(inputValue)
      .subscribe(response => {
        this.profesores = response;
        console.log(response)
      });
  }

  get() {
    this.profesorService.getAllProfesor().subscribe(
      profesores => this.profesores = profesores
    );
  }

  editProfesor(profesor: Profesor) {
    this.profesor.id_profesor = profesor.id_profesor
    this.profesor.nombre = profesor.nombre
    this.profesor.segundo_nombre = profesor.segundo_nombre
    this.profesor.primer_apellido = profesor.primer_apellido
    this.profesor.segundo_apellido = profesor.segundo_apellido
    this.profesor.area = profesor.area
    this.profesor.cedula = profesor.cedula
    this.profesor.correo = profesor.correo
    this.profesor.direccion = profesor.direccion
    this.profesor.fecha_nacimiento = profesor.fecha_nacimiento
    this.profesor.genero = profesor.genero

    this.materiaModalRef.nativeElement.querySelector('[name="nombre"]').value = profesor.nombre;
    this.materiaModalRef.nativeElement.querySelector('[name="nombre1"]').value = profesor.segundo_nombre;
    this.materiaModalRef.nativeElement.querySelector('[name="apellido"]').value = profesor.primer_apellido;
    this.materiaModalRef.nativeElement.querySelector('[name="apellido1"]').value = profesor.segundo_apellido;
    this.materiaModalRef.nativeElement.querySelector('[name="direccion"]').value = profesor.direccion;
    this.materiaModalRef.nativeElement.querySelector('[name="cedula"]').value = profesor.cedula;
    this.materiaModalRef.nativeElement.querySelector('[name="select"]').value = profesor.genero;
    this.materiaModalRef.nativeElement.querySelector('[name="fecha"]').value = profesor.fecha_nacimiento;
    this.materiaModalRef.nativeElement.querySelector('[name="email"]').value = profesor.correo;
    this.materiaModalRef.nativeElement.querySelector('[name="area"]').value = profesor.area;

  }

  cargarProfesor(): void{
        this.profesorService.getAllProfesor().subscribe((profesor)=> this.profesor=profesor)
    
  }

  public create():void{
    this.profesorService.create(this.profesor).subscribe(
      response => {
        this.get();
        Swal.fire('Profesor guardado',`Profesor ${response.nombre} guardado con exito`,'success')
      }
    )
  }

  update() {
    this.profesorService.update(this.profesor.id_profesor, this.profesor)
      .subscribe(response => {
        this.profesor = new Profesor();
        this.get();
        Swal.fire('Profesor modificado',`Profesor ${response.nombre} modificado con exito`,'success');
      });
  }

  eliminarProfesor(id: number) {
    this.profesorService.eliminarEstudiante(id).subscribe(() => {
        alert('Profesor eliminado');
        this.profesores = this.profesores.filter((profesor) => profesor.id !== id);
        this.get()
    });
}

  limpiarCampos() {
    this.profesor.nombre = '';
    this.profesor.primer_apellido = '';
    this.profesor.segundo_nombre = '';
    this.profesor.segundo_apellido = '';
    this.profesor.direccion = '';
    this.profesor.cedula = '';
    this.profesor.genero = '';
    this.profesor.correo = '';
    this.profesor.area = '';
    this.profesor.fecha_nacimiento='';
  }
}
