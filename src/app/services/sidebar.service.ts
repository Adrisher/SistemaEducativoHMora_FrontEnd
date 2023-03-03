import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [{
    titulo: "Dashboard",
    icono: "nav-icon fas fa-tachometer-alt",
    submenu: [
      { titulo: "Profesores", url: "profesor", icono: 'far fa-user' },
      { titulo: "Materias", url: "materia", icono: 'fa fa-book' },
      { titulo: "Matrículas", url: "matricula", icono: 'far fa-file-alt' },
      { titulo: "Cursos", url: "curso", icono: 'fas fa-building' },
      { titulo: "Estudiantes", url: "estudiante", icono: 'fas fa-graduation-cap' },
      { titulo: "Periodo", url: "periodo", icono: 'fa-calendar-alt' } 
    ]
  }]

}
