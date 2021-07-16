import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  baseUrl='http://localhost:9093/';
  constructor(private http: HttpClient) { }

  login(data:any):Observable<any>{
    return this.http.post(`${baseUrl}user/signin`, data);
  }
}
