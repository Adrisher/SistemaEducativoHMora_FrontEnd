import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudiante } from '../pages/estudiante/Estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  private baseUrl = 'http://localhost:8080/hmora/estudiante';

  constructor(private httpClient: HttpClient) { }

  // Listar todos los estudiantes
  getAllEstudiantes(): Observable<Estudiante[]> {
    return this.httpClient.get<Estudiante[]>(`${this.baseUrl}/lista_estudiantes`);
  }

  // Crear un nuevo estudiante
  createEstudiante(estudiante: Estudiante): Observable<Estudiante> {
    return this.httpClient.post<Estudiante>(`${this.baseUrl}/crear`, estudiante);
  }

  // Actualizar los datos de un estudiante existente
  updateEstudiante(estudiante: Estudiante): Observable<Estudiante> {
    const url = `${this.baseUrl}/${estudiante.id}`;
    return this.httpClient.put<Estudiante>(url, estudiante);
  }

  // Eliminar un estudiante por su ID
  deleteEstudiante(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.delete(url);
  }
}
