import { Injectable } from '@angular/core';
import {HttpRequest, HttpHeaders, HttpParams, HttpClient, } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  private apiUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  // Assigns the report type requested by the user
  initReport(type){

    let parameters = new HttpParams();
    let headers = new HttpHeaders();

    parameters = parameters.set('type', type);
    this.httpGet(parameters, headers);
    console.log(type);
  }

  // Gets the report from the server and displays it on a different window
  httpGet(httpParams: HttpParams, httpHeaders: HttpHeaders) {
    const responseType = 'arraybuffer';
    const mediaType = 'application/pdf';
    const url = this.apiUrl + 'report';
    this.http.get(url, { headers: httpHeaders , params: httpParams , responseType } )
      .subscribe(content => {
        const blob = new Blob([content], {type: mediaType});
        const fileURL = URL.createObjectURL(blob);
        window.open(fileURL);
      });
  }
}
