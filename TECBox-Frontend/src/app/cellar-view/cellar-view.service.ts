import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CellarViewService {

  private url: string = "http://localhost:53572/api/Packages";

  constructor(private http: HttpClient) {
  }
  
  // Gets package json from server
  getPackage():Observable<any>{
    return this.http.get(this.url);
  }
}
