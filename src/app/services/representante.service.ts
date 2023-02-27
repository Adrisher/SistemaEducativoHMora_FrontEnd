import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Representante } from '../pages/estudiante/Representante';

@Injectable({
  providedIn: 'root'
})
export class RepresentanteService {

  private url: string = "http://localhost:8080/hmora/representante";

  constructor(private httpClient: HttpClient) { }

  //listar representante
  getAllRepresentante(): Observable<any> {
    return this.httpClient.get(this.url + "/listarRespresentantes");
}

  //Crear representante
  create(representante: Representante): Observable<Representante> {
    return this.httpClient.post<Representante>(this.url + '/crear', representante);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(this.url + '/eliminar/' + id);
}

  update(id: number, representante: Representante): Observable<any> {
    return this.httpClient.put(this.url + '/actualizar/' + id, representante);
}



}
