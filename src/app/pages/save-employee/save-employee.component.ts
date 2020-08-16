import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators , FormBuilder } from '@angular/forms';
import { EmployeeModel } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-save-employee',
  templateUrl: './save-employee.component.html',
  styleUrls: ['./save-employee.component.scss']
})
export class SaveEmployeeComponent implements OnInit {

  public employeeForm:FormGroup;
  public employees: EmployeeModel[]=[];

  constructor(private employeerService: EmployeeService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
    this.getEmployees();
  }

  public saveEmployee(): void {
    const employee: EmployeeModel = this.employeeForm.value;

    this.employeerService.postEmployee(employee).subscribe((result) => {
      console.log(result);
    });
  }

  private createForm(): void {
    this.employeeForm = this.formBuilder.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      position: ['', [Validators.required]],
      salary: ['', [Validators.required]],
      boss_id: ['',[Validators.required]],
    });
  }

  private getEmployees(): void{
    this.employeerService.getEmployees()
    .subscribe((result) => {
      this.employees = result;
    }, error => {
      console.log(error)
    });
  }
}
