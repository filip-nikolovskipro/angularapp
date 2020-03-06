import { Injectable } from '@angular/core';
import { JwtService } from './jwt.service';
import { HttpClient, HttpParams } from '@angular/common/http'
import { throwError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(
    private http: HttpClient,
    private jwt: JwtService
  ) { }

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams()) : Observable<any> {
    return this.http.get(`${environment.api_url}${path}`, {params})
    .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
        `${environment.api_url}${path}`,
        JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }
  
  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
        `${environment.api_url}${path}`,
        JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  delete(path: string): Observable<any> {
    return this.http.delete(
        `${environment.api_url}${path}`
    ).pipe(catchError(this.formatErrors));
  }

}
