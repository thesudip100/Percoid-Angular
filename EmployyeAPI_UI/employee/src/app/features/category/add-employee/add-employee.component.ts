import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddEmployeeRequest } from '../models/add-employee-request.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  model: AddEmployeeRequest;

  constructor(private employeeservice:EmployeeService){
    this.model={
      id:NaN,
      name:'',
      email:'',
      phone:'',
      address:'',
      

    }
  }

  onFormSubmit()
  {
      this.employeeservice.addEmployee(this.model)
      .subscribe({
        next:(response)=>{
          console.log("This was successful");
        }
      })
  }
}
