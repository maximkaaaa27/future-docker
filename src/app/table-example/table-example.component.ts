import { Component, OnInit } from '@angular/core';
import { EmployerService, IEmployer } from '../employer.service';

@Component({
  selector: 'app-table-example',
  templateUrl: './table-example.component.html',
  styleUrls: ['./table-example.component.css'],
})
export class TableExampleComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email'];
  dataSource: IEmployer[] = [];

  constructor(public employerService: EmployerService) {}

  ngOnInit(): void {
    this.employerService.getAll().subscribe((res) => {
      this.dataSource = res;
    });
  }
}
