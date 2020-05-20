import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'src/app/report-view/reports.service'
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-report-view',
  templateUrl: './report-view.component.html',
  styleUrls: ['./report-view.component.css']
})
export class ReportViewComponent implements OnInit {

  constructor(private reportsService: ReportsService) { }

  startDate = new Date(2000, 0, 1);
  finalDate = new Date(2020, 0, 1);
  items;

  startDateInput = this.startDate;
  endDateInput = this.finalDate;

  emptyField = false;

  category = '';
  data: Array<Object> = [
      {id: "top25", name: "Top 25"},
      {id: "listadoReparto", name: "Listado de Reparto"},
      {id: "paquetesEntregados", name: "Paquetes Entregados"}
  ];

  selected() {
    console.log(this.category);
  }

  /**
   * This method determinate if the user select a report and call reports.service to get the selected report
   */
  generateReport(): void {
    if (this.category != ""){
      this.reportsService.initReport(this.category); // request to get the report
      this.emptyField = false;
    } else {
      this.emptyField = true;
    }
  }


  ngOnInit(): void {
  }

}
