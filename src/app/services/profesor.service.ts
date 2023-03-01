import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profesor } from '../pages/profesor/profesor';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {
  private url: string = "http://localhost:8080/hmora/profesor";
  
  constructor(private httpClient: HttpClient) { }

  //listar profesor
  public getAllProfesor(): Observable<any> {
    return this.httpClient.get(this.url + "/listar?nombre=cristopher");
  }

create(profesor: Profesor): Observable<Profesor> {
  return this.httpClient.post<Profesor>(this.url + '/crear', profesor);  
}

editar(profesor: Profesor): Observable<Profesor> {
  return this.httpClient.put<Profesor>(this.url + '/actualizar/'+profesor.id_profesor , profesor);  
}

search(nombre: string): Observable<Profesor[]> {
  const url = `${this.url}buscar/?nombre=${nombre}`;
  return this.httpClient.get<Profesor[]>(url);
}

update(id: number, profesor: Profesor): Observable<any> {
    return this.httpClient.put<Profesor>(this.url + '/actualizar/'+profesor.id_profesor , profesor);  
}

getProfesorCedula(cedula: String): Observable<Profesor> {
  return this.httpClient.get<Profesor>(this.url + '/listarid/'+cedula);  
}

/*deleteProfesor(profesor:Profesor){
    return this.httpClient.delete<Profesor>(this.url+'/eliminar/'+profesor.id_profesor);
}*/

deleteMyRecord(id: number): Observable<any> {
  return this.httpClient.delete(this.url+'/eliminar/'+id);
}

//getProfesorId(id_profesor: number){
  //return this.httpClient.get<Profesor>(this.url+"/listarid/"+id_profesor);
//}
}
