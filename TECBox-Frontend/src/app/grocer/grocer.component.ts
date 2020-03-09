import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-grocer',
  templateUrl: './grocer.component.html',
  styleUrls: ['./grocer.component.css']
})
export class GrocerComponent implements OnInit {

  constructor(private httpService: HttpClient) { }
  
  productArray: string [];

  ngOnInit () {
    this.httpService.get('./assets/TestJson.json').subscribe(
      data => {
        this.productArray = data as string [];	 // FILL THE ARRAY WITH DATA.
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

}