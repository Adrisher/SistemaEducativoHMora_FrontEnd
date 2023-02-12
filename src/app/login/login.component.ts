import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CargarScriptsService} from '../cargar-scripts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
    cedula: null,
    contrasenia: null,
  };

  isLoggedIn = false;
  isLoginFailed = false;


  constructor(private _CargarScripts:CargarScriptsService, private router: Router) { 
    _CargarScripts.funciones(["login"]);
  }

  ngOnInit(): void {
  }

}
