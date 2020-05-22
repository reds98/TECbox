import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'src/app/report-view/reports.service'

@Component({
  selector: 'app-report-view',
  templateUrl: './report-view.component.html',
  styleUrls: ['./report-view.component.css']
})
export class ReportViewComponent implements OnInit {
  

  constructor(private reportsService: ReportsService) { }

  // Attributes
  startDate = new Date(2000, 0, 1);
  finalDate = new Date(2020, 0, 1);

  startDateInput = this.startDate;
  endDateInput = this.finalDate;
  
  emptyField = false;

  category="";
  data:Array<Object> = [
      {id: "1", name: "Top 25"},
      {id: "2", name: "Listado de Reparto"},
      {id: "3", name: "Paquetes Entregados"}
  ];

  // Calls initReport to receive data from server, as long as a type of report has been selected
  generateReport(): void {
    if(this.category != ""){
      this.reportsService.initReport(this.category);
      this.emptyField = false;
    }
    else{
      this.emptyField = true;
    }
  }

  
  ngOnInit(): void {
  }

  
}

