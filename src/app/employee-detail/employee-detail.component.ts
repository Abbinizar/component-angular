import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee-list/employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
})
export class EmployeeDetailComponent implements OnInit {
  public employees = [];

  constructor(private _employeeService: EmployeeService) {}

  ngOnInit(): void {
    this._employeeService.getEmployee().subscribe(data => this.employees = data);
  }
}
