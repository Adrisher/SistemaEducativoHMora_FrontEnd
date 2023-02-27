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
  

getAllCurso(): Observable<any> {
  return this.httpClient.get(this.url + "/listarCursos'");
}

createCurso(curso: Curso): Observable<Curso> {
  return this.httpClient.post<Curso>(this.url + "/crear", curso);
}



// getOne(id: number): Observable<Curso> {
//   return this.httpClient.get<Curso>(this.url + id);
// }

// update(curso: Curso): Observable<Curso> {
//   return this.httpClient.put<Curso>(this.url + '/actualizarCliente/' + curso.id_curso, curso);
// }

// public delete(id_curso: number){
//   return this.httpClient.delete(this.url + '/elminarCursos/'+ id_curso);
// }
}
  