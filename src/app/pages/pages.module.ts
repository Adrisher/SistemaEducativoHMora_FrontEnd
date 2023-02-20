import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { MateriaComponent } from './materia/materia.component';
import { MatriculaComponent } from './matricula/matricula.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    ProfesorComponent,
    MateriaComponent,
    MatriculaComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    DashboardComponent,
    ProfesorComponent,
    MateriaComponent,
    MatriculaComponent
  ]
})
export class PagesModule { }
