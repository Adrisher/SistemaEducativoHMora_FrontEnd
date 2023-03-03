import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from 'src/app/services/sidebar.service';
import { StorageService } from 'src/app/services/storage.service';
import { Usuario } from '../../pages/estudiante/Usuario';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems?: any[];
  menuPermitido: any[];


  //creacion de objeto de la clase persona;
  userC: Usuario = new Usuario();

  //variables don de voy recibir el storage para el login
  id_user?: any;
  nombreUser?: any;

  isUserAdmin: boolean = false;
  isUserProf: boolean = false;
  isUserEstud: boolean = false;

  rolUser: any;


  constructor(private sideBarService: SidebarService, private router: Router, 
    private storage: StorageService, private httpc: HttpClient) {
    this.menuItems = this.sideBarService.menu;
    console.log(this.menuItems);
  }



  ngOnInit(): void {
    this.getUser();
    this.rolUser = localStorage.getItem('rol');
  }

  logout() {
    this.router.navigateByUrl('/login');
  }

  public getUser() {
    // this.id_user = localStorage.getItem('id_cliente');
    this.rolUser = localStorage.getItem('rol');
    if (this.rolUser != null) {
      switch (this.rolUser) {
        case 'ADMIN':
          this.isUserAdmin = true;
          this.isUserProf = false;
          this.isUserEstud = false;
          this.menuPermitido = [{
            titulo: "Dashboard",
            icono: "nav-icon fas fa-tachometer-alt",
            submenu: [
              { titulo: "Profesores", url: "profesor", icono: 'far fa-user' },
              { titulo: "Materias", url: "materia", icono: 'fa fa-book' },
              { titulo: "Matrículas", url: "matricula", icono: 'far fa-file-alt' },
              { titulo: "Cursos", url: "curso", icono: 'fas fa-building' },
              { titulo: "Estudiantes", url: "estudiante", icono: 'fas fa-graduation-cap' },
              { titulo: "Periodo", url: "periodo", icono: 'fa-solid fa-timeline-arrow' } 
            ]
          }]
          break;
        case 'ESTUDIANTE':
          this.isUserAdmin = false;
          this.isUserProf = false;
          this.isUserEstud = true;
          this.menuPermitido = [{
            titulo: "Dashboard",
            icono: "nav-icon fas fa-tachometer-alt",
            submenu: [
            ]
          }]
          break;
        case 'PROFESOR':
          this.isUserAdmin = false;
          this.isUserProf = true;
          this.isUserEstud = false;
          this.menuPermitido = [{
            titulo: "Dashboard",
            icono: "nav-icon fas fa-tachometer-alt",
            submenu: [
              { titulo: "Materias", url: "materia", icono: 'fa fa-book' },
              { titulo: "Estudiantes", url: "estudiante", icono: 'fas fa-graduation-cap' }
            ]
          }]
          break;
      }
    } else {
    }
  }

  public signOut() {
    this.storage.clean();
  }

}
