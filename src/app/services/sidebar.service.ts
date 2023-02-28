import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [{
    titulo: "Dashboard",
    icono: "nav-icon fas fa-tachometer-alt",
    submenu: [
      {titulo: "Profesores" , url: "profesor", icnono: 'nav-icon fa fa-users'},
      {titulo: "Materias" , url: "materia", icnono: 'nav-icon fa fa-cubes'},
      {titulo: "Matriculas" , url: "matricula", icnono: 'nav-icon fa fa-user-circle'},
      {titulo: "Cursos" , url: "curso", icnono: 'nav-icon fa fa-user-circle'},
      {titulo: "Estudiantes" , url: "estudiante", icnono: 'nav-icon fa fa-user-circle'},
      {titulo: "Calificación" , url: "calificacion", icnono: 'nav-icon fa fa-user-circle'}
    ]
  }]

}
