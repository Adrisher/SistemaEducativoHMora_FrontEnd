import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';
import { Curso } from '../pages/curso/Curso';


@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private baseUrl: string =  'http://localhost:8080/hmora/curso';


  constructor(private httpClient: HttpClient) { }
  

  buscarCurso(id: number): Observable<Curso[]> {
    return this.httpClient.get<Curso[]>(`${this.baseUrl}/buscar/` + id);
  }

  listarCursos(): Observable<Curso[]> {
    return this.httpClient.get<Curso[]>(`${this.baseUrl}/listar`);
  }

  //Crear Curso
  createCurso(curso: Curso): Observable<Curso> {
    return this.httpClient.post<Curso>(this.baseUrl + '/crear', curso)
      .pipe(
        catchError((error) => {
          console.error(error);
          throw error;
        })
      );
  }

  eliminarCurso(id: number): Observable<void> {
    const url = `${this.baseUrl}/eliminar/${id}`;
    return this.httpClient.delete(url, { observe: 'response' }).pipe(
      map(() => {}),
      catchError((error: HttpErrorResponse) => {
        console.error('Error al eliminar curso:', error);
        let mensajeError = 'Error al eliminar curso';
        if (error.status === 404) {
          mensajeError = 'No se encontró el curso a eliminar';
        }
        // Puedes lanzar un mensaje de error al usuario o realizar alguna otra acción aquí
        throw mensajeError;
      })
    );
  }

  actualizarCurso(curso: Curso): Observable<void> {
    return this.httpClient.put<void>(`${this.baseUrl}/actualizar`, curso);
  }
}
  