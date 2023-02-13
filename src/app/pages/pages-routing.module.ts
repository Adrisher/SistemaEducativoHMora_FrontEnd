import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { MateriaComponent } from './materia/materia.component';
import { MatriculaComponent } from './matricula/matricula.component';
import { ProfesorComponent } from './profesor/profesor.component';

const routes: Routes = [
  {path: 'dashboard', component: PagesComponent,
  children: [
    {path: '', component: DashboardComponent, data: {titulo:"Dashboard"}},
    {path: 'materia', component: MateriaComponent, data: {titulo:"Materia"}},
    {path: 'matricula', component: MatriculaComponent, data: {titulo:"Matricula"}},
    {path: 'profesor', component: ProfesorComponent, data: {titulo:"Profesor"}},


    ]
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
