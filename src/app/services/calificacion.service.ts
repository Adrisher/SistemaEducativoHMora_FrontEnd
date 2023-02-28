import { Injectable } from '@angular/core';
import { Calificacion } from '../pages/calificacion/calificacion';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Type } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CalificacionService {

  private baseUrl:string ='http://localhost:8080/hmora/calificaciones/'

  private httpHeaders =new HttpHeaders({'Content-Type':'aplication/json'})

  constructor(private http: HttpClient) { }

  getCalificaciones(): Observable<Calificacion[]>{
    return this.http.get<Calificacion[]>(this.baseUrl+'listar');
  }

  Create(calificacion: Calificacion): Observable<Calificacion>{
    return this.http.post<Calificacion>(this.baseUrl+'crear', calificacion);
  }

  agregarActualizar(calificacion: Calificacion):Observable<Calificacion>{
    return this.http.post<Calificacion>(this.baseUrl+'crearActualizar',calificacion)
  }

  actaulizar(id:any,calificacion: Calificacion):Observable<Calificacion>{
    console.log("ruta " + this.baseUrl+'/'+id)
    return this.http.put<Calificacion>(this.baseUrl+'actualizar/'+id,calificacion)
  }

 

  





}
