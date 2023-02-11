import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenulateralComponent } from './menulateral/menulateral.component';
import {CargarScriptsService} from './cargar-scripts.service';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MatriculaComponent } from './matricula/matricula.component';

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'menulateral', component: MenulateralComponent},
  { path: 'matricula', component:  MatriculaComponent }
];
export const app_routing = RouterModule.forRoot(routes);
@NgModule({
  declarations: [
    AppComponent,
    MenulateralComponent,
    LoginComponent,
    MatriculaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    CargarScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
