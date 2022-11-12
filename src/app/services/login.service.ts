import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(name: string, team_id: string, score: string) {
    return this.http.post(`http://localhost:8080/api/add_user/${name}/${team_id}/${score}`, '');
  }
}
