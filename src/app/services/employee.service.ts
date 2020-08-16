import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { EmployeeModel } from "../models/employee.model";
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private URL_BASE = environment.url_base;

  constructor(private http: HttpClient) { }

  /**
   * getEmployees
   */
  public getEmployees(): Observable<EmployeeModel[]> {
    return this.http.get<EmployeeModel[]>(`${this.URL_BASE}/employee`);
  }

  /**
   * getEmployeeById
  */
  public getEmployeeById(id: number): Observable<EmployeeModel>{
    return this.http.get<EmployeeModel>(`${this.URL_BASE}/employee/${id}`);
  }

  /**
   * postEmployee
   */
  public postEmployee(employee: EmployeeModel) :Observable<EmployeeModel>{
    return this.http.post<EmployeeModel>(`${this.URL_BASE}/employee`,employee);
  }
}
