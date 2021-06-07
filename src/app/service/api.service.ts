import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  readonly BaseURI = 'http://localhost:8080/api';

  login(profileForm:FormGroup):Observable<any> {
    return this.http.post(this.BaseURI + '/login', profileForm);
  }

}
