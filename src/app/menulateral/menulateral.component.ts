import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CargarScriptsService} from '../cargar-scripts.service';

@Component({
  selector: 'app-menulateral',
  templateUrl: './menulateral.component.html',
  styleUrls: ['./menulateral.component.css']
})
export class MenulateralComponent implements OnInit {

  constructor(private _CargarScripts:CargarScriptsService, private router: Router ) { 
  _CargarScripts.funciones(["menulateral"]);
  }

  ngOnInit(): void {
  }
  

}
