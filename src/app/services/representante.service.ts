import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Representante } from '../pages/estudiante/Representante';

@Injectable({
  providedIn: 'root'
})
export class RepresentanteService {

  private readonly url = "http://localhost:8080/hmora/representante";

  private readonly httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  createRepresentante(representante: Representante): Observable<Representante> {
    return this.httpClient.post<Representante>(this.url + '/crear', representante)
      .pipe(
        catchError((error) => {
          console.error(error);
          throw error;
        })
      );
  }

  deleteRepresentante(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/eliminar/${id}`)
      .pipe(
        catchError((error) => {
          console.error(`Error al eliminar representante con id ${id}:`, error);
          return throwError(error);
        })
      );
  }

  // updateRepresentante(id: number, representante: Representante): Observable<any> {
  //   return this.httpClient.put(`${this.url}/actualizar/${id}`, representante, this.httpOptions)
  //     .pipe(
  //       catchError((error) => {
  //         console.error(`Error al actualizar representante con id ${id}:`, error);
  //         return throwError(error);
  //       })
  //     );
  // }
  update(id: number, representante: Representante): Observable<any> {
    return this.httpClient.put(`${this.url}actualizar/${id}`, representante);
  }


  //Buscar solo uno por cedula
  buscarEstu(cedula: string): Observable<Representante> {
    const url = `${this.url}/${cedula}`;
    return this.httpClient.get<Representante>(url);
  }

}
