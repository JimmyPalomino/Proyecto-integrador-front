import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class HttpService<T>{

  constructor(private http: HttpClient) {
  }

  public getOne(url: string): Observable<T> {
    return this.http.get<T>(url);
  }

  public getAll(url: string): Observable<T[]> {
    return this.http.get<T[]>(url);
  }

  public postOne(url:string, body: T): Observable<T> {
    return this.http.post<T>(url, body);
  }
}
