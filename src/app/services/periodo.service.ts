import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Periodo } from '../pages/periodo/periodo';

@Injectable({
  providedIn: 'root'
})
export class PeriodoService {

  private url: string = 'http://localhost:8080/hmora/periodo/';

  constructor( private http: HttpClient ) { }

  search(nombre: string): Observable<Periodo[]> {
    const url = `${this.url}buscar/?nombre=${nombre}`;
    return this.http.get<Periodo[]>(url);
  }

  get(): Observable<Periodo[]> {
    const url = `${this.url}listar`;
    return this.http.get<Periodo[]>(url);
  }

  create(producto: Periodo): Observable<Periodo> {
    return this.http.post<Periodo>(this.url + 'crear', producto);
  }

  getOne(id: number): Observable<Periodo> {
    return this.http.get<Periodo>(this.url + id);
  }

  update(id: number, materia: Periodo): Observable<any> {
    return this.http.put(`${this.url}actualizar/${id}`, materia);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<Periodo>(this.url + "eliminar/"+ id);
  }


}
