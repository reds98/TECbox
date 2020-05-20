import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'src/app/report-view/reports.service'

@Component({
  selector: 'app-report-view',
  templateUrl: './report-view.component.html',
  styleUrls: ['./report-view.component.css']
})
export class ReportViewComponent implements OnInit {
  

  constructor(private reportsService: ReportsService) { }

  startDate = new Date(2000, 0, 1);
  finalDate = new Date(2020, 0, 1);

  startDateInput = this.startDate;
  endDateInput = this.finalDate;

  ngOnInit(): void {
  }


  print(prod1, prod2){
    console.log(prod1, prod2);
  }

  generateReport(): void {
    this.reportsService.initReport();
  }
}

