import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeViewService {

  private url: string = "http://localhost:53572/api/Products";

  constructor(private http: HttpClient) {
  }

  getProducts():Observable<any>{
    return this.http.get(this.url);
  }

}