import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientViewService {

  private url: string = "http://localhost:53572/api/clients";

  constructor(private http: HttpClient) {
  }

  // Assigns a type to every observable that is received and returns this typified observable.
  getClients(): Observable<any> {
    let observable;
      observable =  this.httpGet<JSON>();
      return observable;
  }

  // Calls http.get() with the corresponding resource url.
  private httpGet<T>(): Observable<T> {
    return this.http.get<T>(this.url);
  }
}
