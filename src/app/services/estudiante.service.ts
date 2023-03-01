import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { Estudiante } from '../pages/estudiante/Estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  private baseUrl = 'http://localhost:8080/hmora/estudiante';

  constructor(private httpClient: HttpClient) { }

  // Listar todos los estudiantes
  buscarEstudiantes(cedula: string): Observable<Estudiante[]> {
    return this.httpClient.get<Estudiante[]>(`${this.baseUrl}/listar/` + cedula);
  }

  search(cedula: string): Observable<Estudiante[]> {
    const url = `${this.baseUrl}/buscar/?cedula=${cedula}`;
    return this.httpClient.get<Estudiante[]>(url);
  }

  listarEstudiantes(): Observable<Estudiante[]> {
    return this.httpClient.get<Estudiante[]>(`${this.baseUrl}/listar`);
  }

  //Crear representante
  createEstudiante(estudiante: Estudiante): Observable<Estudiante> {
    return this.httpClient.post<Estudiante>(this.baseUrl + '/crear', estudiante)
      .pipe(
        catchError((error) => {
          console.error(error);
          throw error;
        })
      );
  }

  eliminarEstudiante(id: number): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/eliminar/${id}`, {});
  }

  updateEstudiante(id: number, curso: Estudiante): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}actualizar/${id}`, curso);
  }



}
