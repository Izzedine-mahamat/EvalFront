import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  constructor(private http: HttpClient) { }

  post<T>(endpoint: string, body: Object, params?: HttpParams): Observable<T> {
    const url = `${environment.apiUrl}/${endpoint}`;
    return this.http.post<T>(url, body, { params });
  }
}
