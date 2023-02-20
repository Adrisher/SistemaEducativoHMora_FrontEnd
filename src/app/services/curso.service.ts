import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from '../pages/curso/Curso';


@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private url: string =  "http://localhost:8080/hmora/curso";


  constructor(private httpClient: HttpClient) { }

  //listar cursos
  public getAllCursos(): Observable<any> {
    return this.httpClient.get(this.url + "/listarCursos");
  }

  //Crear Cursos
  create(curso: Curso): Observable<Curso> {
    return this.httpClient.post<Curso>(this.url + '/crearCurso"', curso);
  }
}
