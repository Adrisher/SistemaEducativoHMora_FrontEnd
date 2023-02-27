import { Component } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private _CargarScripts: CargarScriptsService) {
    _CargarScripts.funciones(["dashboard"]);
  }
}
