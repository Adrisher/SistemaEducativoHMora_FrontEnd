import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string =  'http://localhost:8080/hmora/usuario';

  constructor(private http: HttpClient) { }
  

  logIn(username: string, password: string): Observable<any> {
    const url = `${this.url}/logIn/${username}/${password}`;
    return this.http.post<any>(url, null);
  }

  // createUser(user: Usuario): Observable<Estudiante> {{
  //   return this.httpClient.post<Estudiante>(this.baseUrl + '/crear', estudiante)
  //     .pipe(
  //       catchError((error) => {
  //         console.error(error);
  //         throw error;
  //       })
  //     );
  // }


}
