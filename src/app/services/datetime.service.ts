import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ApiResult {
  results: any[];
  total_pages: number;
  total_results: number;
}

@Injectable({
  providedIn: 'root'
})
export class DatetimeService {

  constructor(private http: HttpClient) { }

  getOrdersWithGivenCreationRange(dateFrom: string, dateTo: string): Observable<Array<Object>> {
    return this.http.get<Array<Object>>(
      `http://localhost:8080/api/orders/created_between/${dateFrom}/${dateTo}`
    );
  }

  getDetails(id: string): Observable<Array<Object>> {
    return this.http.get<Array<Object>>(
      `http://localhost:8080/api/orders/id/${id}`
    );
  }
}
