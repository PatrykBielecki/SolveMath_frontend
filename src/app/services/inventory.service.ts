import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface ApiResult {
results: any[];
total_pages: number;
total_results: number;
}

@Injectable({
providedIn: 'root',
})

export class InventoryService {
constructor(private http: HttpClient) {}

  getAllEndpoints(): Observable<Array<Object>> {
     return this.http.get<Array<Object>>(
       `http://localhost:8080/api/products/all`
     );
   }

  getEndpointDetails(id: string): Observable<Array<Object>> {
    return this.http.get<Array<Object>>(
      `http://localhost:8080/api/products/id/${id}`
    );
  }

}