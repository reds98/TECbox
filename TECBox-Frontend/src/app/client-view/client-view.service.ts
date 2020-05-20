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

  getClients():Observable<any>{
    return this.http.get(this.url);
  }

}
