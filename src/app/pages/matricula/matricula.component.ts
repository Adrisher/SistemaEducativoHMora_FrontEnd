import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';

@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
  styleUrls: ['./matricula.component.css']
})
export class MatriculaComponent {

  constructor(private _CargarScripts: CargarScriptsService, private router: Router) {
    _CargarScripts.funciones(["matricula"]);
  }
}
