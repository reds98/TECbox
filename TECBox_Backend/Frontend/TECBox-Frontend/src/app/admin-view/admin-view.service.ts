import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminViewService {

  private url: string = "http://localhost:53572/api/";

  constructor(private http: HttpClient) {
  }

  // Assigns a type to every observable that is received and returns this typified observable.
  getItems(type): Observable<any> {
    let observable;
      observable =  this.httpGet<JSON>(type);
      return observable;
  }

  // Calls http.get() with the corresponding resource url.
  private httpGet<T>(type): Observable<T> {
    return this.http.get<T>(this.url + type);
  }
}


