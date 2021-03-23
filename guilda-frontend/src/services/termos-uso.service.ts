import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TermosUsoService {
  
  constructor(private http: HttpClient) { }
  
  obterTermosUso(): Observable<string> {
    return this.http.get<any>('/api/randomString')
      .pipe(
        pluck('log')
      );
  }

}
