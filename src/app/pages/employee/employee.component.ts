import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from "../../models/employee.model";
import { EmployeeService } from "../../services/employee.service";
import { RouterModel } from 'src/app/constants/route.module';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  public employees: EmployeeModel[]=[];

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.initializeData();
  }

  private initializeData(): void{
    this.getEmployees();
  }

  private getEmployees(): void{
    this.employeeService.getEmployees()
    .subscribe((result) => {
      this.employees = result;
    }, error => {
      console.log(error)
    });
  }

}
