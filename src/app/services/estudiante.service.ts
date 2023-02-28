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

  eliminarEstudiante(id: number): Observable<void> {
    const url = `${this.baseUrl}/eliminar/${id}`;
    return this.httpClient.delete<void>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error al eliminar estudiante:', error);
        let mensajeError = 'Error al eliminar estudiante';
        if (error.status === 404) {
          mensajeError = 'No se encontró el estudiante a eliminar';
        }
        // Puedes lanzar un mensaje de error al usuario o realizar alguna otra acción aquí
        throw mensajeError;
      })
    );
  }

  actualizarEstudiante(estudiante: Estudiante): Observable<void> {
    return this.httpClient.put<void>(`${this.baseUrl}/actualizar`, estudiante);
  }



}
