import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Matricula } from '../pages/matricula/Matricula';

@Injectable({
  providedIn: 'root'
})
export class MatriculaService {
  private url: string = "http://localhost:8080/hmora/matricula";
  
  constructor(private httpClient: HttpClient) { }

  //listar matricula
  public getAllMatricula(): Observable<any> {
    return this.httpClient.get(this.url + "/lista_Matriculas");
  }
  
  // //Crear Matricula
  // public saveMatricula(matricula: any): Observable<any> {
  //   return this.httpClient.post(this.url + "/matricular", matricula);
  // }

  

create(matricula: Matricula): Observable<Matricula> {
  return this.httpClient.post<Matricula>(this.url + 'guardar', matricula);
}
}
