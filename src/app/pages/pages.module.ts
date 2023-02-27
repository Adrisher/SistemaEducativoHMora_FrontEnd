import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { MateriaComponent } from './materia/materia.component';
import { MatriculaComponent } from './matricula/matricula.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CursoComponent } from './curso/curso.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { VerMatriculaComponent } from './matricula/ver-matricula/ver-matricula.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DashboardComponent,
    ProfesorComponent,
    MateriaComponent,
    MatriculaComponent,
    PagesComponent,
    CursoComponent,
    EstudianteComponent,
    VerMatriculaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [
    DashboardComponent,
    ProfesorComponent,
    MateriaComponent,
    EstudianteComponent,
    MatriculaComponent,
    VerMatriculaComponent
  ]
})
export class PagesModule { }
