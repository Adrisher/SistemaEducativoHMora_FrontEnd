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
import { Periodo } from '../periodo/periodo';
import { PeriodoService } from 'src/app/services/periodo.service';

@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
  styleUrls: ['./matricula.component.css']
})
export class MatriculaComponent {

  cursos: Curso[] = [];
  curso: Curso = new Curso;
  selectedCurso: string;
  selectedParalelo: string;
  paralelos: string[];

  estudiante: Estudiante = new Estudiante;
  matricula: Matricula = new Matricula;
  representante: Representante = new Representante;
  
  periodos: Periodo[] = [];
  periodo: Periodo = new Periodo;
  selectedPeriodo: string;
  

  



  constructor(private _CargarScripts: CargarScriptsService, private router: Router,
    private estudianteService: EstudianteService, private representanteService: RepresentanteService,
    private cursoService: CursoService, private matriculaService: MatriculaService, private periodoService: PeriodoService) {
    _CargarScripts.funciones(["matricula"]);
  }

  ngOnInit(): void {
    this.cargarPeriodos();
  }



  registrarMatricula() {
    this.representanteService.createRepresentante(this.representante).subscribe(
      data => {
        this.representante.id_representante = data.id_representante;
        console.log(data);
        if (!data) {
        } else {
          this.estudiante.representante = this.representante;
          this.estudianteService.createEstudiante(this.estudiante).subscribe(
            result => {
              console.log(result);
            })
          if (!data) {
              
            
          }
          this.limpiarCampos();
        }
      })
  }


  cargarParalelos() {
    this.cursoService.buscarByCurso(this.selectedCurso).subscribe(
      cursos => this.cursos = cursos
    );
  }

  
  cargarPeriodos(){
    this.periodoService.getPeriodos().subscribe( 
        periodos => this.periodos = periodos
    );
  }
  



  reloadPage() {
    window.location.reload();
  }


  limpiarCampos() {
    console.log("Entro a limpiar")
    this.representante.cedula = '';
    this.representante.nombre = '';
    this.representante.segundo_nombre = '';
    this.representante.primer_apellido = '';
    this.representante.segundo_apellido = '';
    this.representante.fecha_nacimiento = new Date;
    this.representante.correo = '';
    this.representante.direccion = '';
    this.representante.ocupacion = '';
    this.representante.telefonoContacto = '';
    this.representante.telefonoContacto2 = '';
    this.estudiante.cedula = '';
    this.estudiante.nombre = '';
    this.estudiante.segundo_nombre = '';
    this.estudiante.primer_apellido = '';
    this.estudiante.segundo_apellido = '';
    this.estudiante.fecha_nacimiento = new Date;
    this.estudiante.correo = '';
    this.estudiante.direccion = ''
  }
}
