import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { Curso } from '../curso/Curso';
import { Estudiante } from '../estudiante/Estudiante';
import { Representante } from '../estudiante/Representante';
import { Matricula } from './Matricula';
import Swal from 'sweetalert2';
import { CursoService } from 'src/app/services/curso.service';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { RepresentanteService } from 'src/app/services/representante.service';
import { MatriculaService } from 'src/app/services/matricula.service';
import { Ciclo } from '../curso/Ciclo.enum';
import { Paralelo } from '../curso/Paralelo.enum';

@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
  styleUrls: ['./matricula.component.css']
})
export class MatriculaComponent {

  //VALIDACIONES

  letrasEspace: RegExp = /^[a-zA-Z\s]+$/;
  letrasEspaceNumbers: RegExp = /^[a-zA-Z0-9\s]+$/;
  // letrasEspace: RegExp = /^[a-zA-Z0-9\s^!#$%&*]+$/;
  // letrasEspaceNumbers: RegExp = /^[a-zA-Z0-9\s^!#$%&*-]+$/;
  expCorreo: RegExp = /^[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'+/=?^_`{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  valCorreo: boolean = true;
  verfCorreo: string = '';


  validarCorreo() {
    this.valCorreo = this.expCorreo.test(this.representante.correo!);
    if (this.valCorreo) {
      console.log("Correo Bueno");
      // this.verfCorreo = 'form-control is-valid';
    } else {
      this.verfCorreo = 'ng-invalid ng-dirty';
      console.log("Correo malo");
    }
  }

  //Implemetaicon de todos los metodos para los controles de los campos en los fiels
  //Método que me va impedir poner espacios en los imputs
  contatSpace(evento: any) {
    let espacioBlanco = evento.target.value;

    let sinEspacios = espacioBlanco.replace(/\s/g, '');
    evento.target.value = sinEspacios;
  }
  //Fin del Método que me va impedir poner espacios en los imputs

  valCorreo2: boolean = true;
  verfCorreo2: string = '';

  validarCorreo2() {
    this.valCorreo2 = this.expCorreo.test(this.estudiante.correo!);
    if (this.valCorreo2) {
      console.log("Correo Bueno");
      // this.verfCorreo = 'form-control is-valid';
    } else {
      this.verfCorreo2 = 'ng-invalid ng-dirty';
      console.log("Correo malo");
    }
  }

  ValidarCampos() {
    console.log("ya esta activo")
    document.addEventListener('DOMContentLoaded', () => {
      const forms = document.querySelectorAll('.needs-validation') as NodeListOf<HTMLFormElement>;
      Array.from(forms).forEach(form => {
        form.addEventListener('submit', (event: Event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        });
      });
    });
  }

  limpiarFormulario() {
    const forms = document.querySelectorAll('.needs-validation') as NodeListOf<HTMLFormElement>;
    Array.from(forms).forEach(form => {
      form.classList.remove('was-validated');
      form.querySelectorAll('.ng-invalid, .ng-dirty').forEach((input) => {
        input.classList.remove('ng-invalid', 'ng-dirty');
      });
      form.reset();
    });
  }


  cursos: Curso[] = [];
  curso: Curso = new Curso;
  estudiante: Estudiante = new Estudiante;
  matricula: Matricula = new Matricula;
  representante: Representante = new Representante;



  constructor(private _CargarScripts: CargarScriptsService, private router: Router,
    private estudianteService: EstudianteService, private representanteService: RepresentanteService,
    private cursoService: CursoService, private matriculaService: MatriculaService) {
    _CargarScripts.funciones(["matricula"]);
  }

  ciclos: any[] = [];
  paralelos: any[] = [];
  ngOnInit(): void {
    for (let item in Ciclo) {
      if (isNaN(Number(item))) {
        this.ciclos.push({ text: item, value: Ciclo[item] });
      }
    }
    for (let item in Paralelo) {
      if (isNaN(Number(item))) {
        this.paralelos.push({ text: item, value: Paralelo[item] });
      }
    }
    this.ValidarCampos();
  }

  ngAfterViewInit() {
    this.ValidarCampos();
  }

  registrarMatricula() {
    this.representanteService.create(this.representante).subscribe(
      data => {
        this.representante.id_representante = data.id_representante;
        console.log(data);
        if (!data) {
        } else {
          this.estudiante.representante = this.representante;
          this.estudianteService.createEstudiante(this.estudiante).subscribe(
            result => {
              console.log(result);
              // Swal.fire({
              //   position: 'top-end',
              //   icon: 'success',
              //   title: 'Estudiante y Representante ingresados',
              //   showConfirmButton: false,
              //   timer: 1500
              // })
              // this.reloadPage();
            })
        }
      })
  }

  reloadPage() {
    window.location.reload();
  }


  limpiarCampos() {
    console.log("Entro a limpiar")
    //representante
    this.representante.cedula = '';
    this.representante.nombre = '';
    this.representante.segundo_nombre = '';
    this.representante.primer_apellido = '';
    this.representante.segundo_apellido = '';
    // this.representante.genero = '';
    this.representante.fecha_nacimiento = new Date;
    this.representante.correo = '';
    this.representante.direccion = '';
    this.representante.ocupacion = '';
    this.representante.telefonoContacto = '';
    this.representante.telefonoContacto2 = '';


    //estudiante
    this.estudiante.cedula = '';
    this.estudiante.nombre = '';
    this.estudiante.segundo_nombre = '';
    this.estudiante.primer_apellido = '';
    this.estudiante.segundo_apellido = '';
    // this.estudiante.genero = '';
    this.estudiante.fecha_nacimiento = new Date;
    this.estudiante.correo = '';
    this.estudiante.direccion = ''

    this.limpiarFormulario();

  }
}
