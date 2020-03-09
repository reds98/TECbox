import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-cellar-view',
  templateUrl: './cellar-view.component.html',
  styleUrls: ['./cellar-view.component.css']
})
export class CellarViewComponent implements OnInit {

  constructor(private httpService: HttpClient) { }

  productArray;

  ngOnInit(): void {
    this.httpService.get('assets/TestJson.json').subscribe(
      data => {
        this.productArray = data;	 // FILL THE ARRAY WITH DATA.
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

}
