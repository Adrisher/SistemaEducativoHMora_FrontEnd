import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CargarScriptsService} from '../cargar-scripts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _CargarScripts:CargarScriptsService, private router: Router) { 
    _CargarScripts.funciones(["login"]);
  }

  ngOnInit(): void {
  }

}
