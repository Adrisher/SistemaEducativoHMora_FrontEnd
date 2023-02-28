import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { MateriaComponent } from './materia/materia.component';
import { MatriculaComponent } from './matricula/matricula.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { CursoComponent } from './curso/curso.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { VerMatriculaComponent } from './matricula/ver-matricula/ver-matricula.component';
import { CalificacionComponent } from './calificacion/calificacion.component';

const routes: Routes = [
  {path: 'dashboard', component: PagesComponent,
  children: [
    {path: '', component: DashboardComponent, data: {titulo:"Dashboard"}},
    {path: 'materia', component: MateriaComponent, data: {titulo:"Materia"}},
    {path: 'matricula', component: MatriculaComponent, data: {titulo:"Matriculación"}},
    {path: 'profesor', component: ProfesorComponent, data: {titulo:"Profesor"}},
    {path: 'curso', component: CursoComponent, data: {titulo:"Curso"}},
    {path: 'estudiante', component: EstudianteComponent, data: {titulo:"Estudiante"}},
    {path: 'ver-matricula', component: VerMatriculaComponent, data: {titulo:"Matricula"}},
    {path: 'calificacion', component: CalificacionComponent, data: {titulo:"Calificación"}}

    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
