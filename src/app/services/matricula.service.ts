import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Materia } from '../pages/materia/materia';

@Injectable({
  providedIn: 'root'
})
export class MatriculaService {

  private url: string = 'http://localhost:8080/api/materias/';

  constructor( private http: HttpClient ) { }

  get(): Observable<Materia[]> {
      return this.http.get<Materia[]>(this.url + 'listar');
  }

  create(producto: Materia): Observable<Materia> {
    return this.http.post<Materia>(this.url + 'guardar', producto);
  }

  getOne(id: number): Observable<Materia> {
    return this.http.get<Materia>(this.url + id);
  }

  update(materia: Materia): Observable<Materia> {
    return this.http.put<Materia>(this.url + 'actualizar/' + materia.id_materia, materia);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<Materia>(this.url + "eliminar/"+ id);
  }

}
