import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudiante } from '../pages/estudiante/Estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  private url: string =  "http://localhost:8080/hmora/estudiante";
  
  constructor(private httpClient: HttpClient) { }

  //listar estudiante
  public getAllEstudiantes(): Observable<any> {
    return this.httpClient.get(this.url + "/lista_estudiantes");
  }

    //Crear Estudiantes
    create(estudiante: Estudiante): Observable<Estudiante> {
      return this.httpClient.post<Estudiante>(this.url + '/crear', estudiante);
    }
}
