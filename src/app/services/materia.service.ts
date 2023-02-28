import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Materia } from '../pages/materia/materia';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  private url: string = 'http://localhost:8080/hmora/materia/';

  constructor( private http: HttpClient ) { }

  search(nombre: string): Observable<Materia[]> {
    const url = `${this.url}buscar/?nombre=${nombre}`;
    return this.http.get<Materia[]>(url);
  }

  get(): Observable<Materia[]> {
    const url = `${this.url}listar`;
    return this.http.get<Materia[]>(url);
  }

  create(producto: Materia): Observable<Materia> {
    return this.http.post<Materia>(this.url + 'crear', producto);
  }

  getOne(id: number): Observable<Materia> {
    return this.http.get<Materia>(this.url + id);
  }

  update(id: number, materia: Materia): Observable<any> {
    return this.http.put(`${this.url}actualizar/${id}`, materia);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<Materia>(this.url + "eliminar/"+ id);
  }

}
