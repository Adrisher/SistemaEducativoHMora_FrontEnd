import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public onSubmit() {
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;
    
    this.authService
      .logIn(username, password)
      .subscribe(
        (data: any) => {
          console.log(data);
          if (data != null) {
            localStorage.setItem('id_usuario', String(data.id_usuario));
            localStorage.setItem('nombreUsuario', String(data.nombreUsuario));
            localStorage.setItem('contraseña', String(data.contraseña));
            localStorage.setItem('rol', String(data.rol));
            location.replace('/dashboard');
          } else {
            alert('err');
          }
        }
      );
  }

}
