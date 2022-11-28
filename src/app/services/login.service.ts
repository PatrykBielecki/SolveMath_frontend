import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(username: string, team_name: string) {
    return this.http.post(`http://localhost:8080/api/login_to_home/${username}/${team_name}`, '');
  }
}
