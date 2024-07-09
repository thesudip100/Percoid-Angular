import { HttpClient } from '@angular/common/http';
import { Injectable, model } from '@angular/core';
import { Observable } from 'rxjs';
import { AddEmployeeRequest } from '../models/add-employee-request.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  addEmployee(model:AddEmployeeRequest):Observable<void>{
    return this.http.post<void>('https://localhost:7188/api/CustomerAPI/AddCustomer',model);
  }

  getAllEmployees(): Observable<AddEmployeeRequest[]> {
    return this.http.get<AddEmployeeRequest[]>('https://localhost:7188/api/CustomerAPI/GetAllCustomer');
  }

  updateEmployee(model:AddEmployeeRequest):Observable<AddEmployeeRequest> {
    return this.http.post<AddEmployeeRequest>('https://localhost:7188/api/CustomerAPI/UpdateEmployee',model);
  }

  deleteEmployee(id:number):Observable<AddEmployeeRequest[]>{
    return this.http.get<AddEmployeeRequest[]>(`https://localhost:7188/api/CustomerAPI/DeleteEmployee/${id}`)
  }

  getEmployeeById(id: number): Observable<AddEmployeeRequest> {
    return this.http.get<AddEmployeeRequest>(`https://localhost:7188/api/CustomerAPI/GetSingleCustomer/${id}`);
  }
}
