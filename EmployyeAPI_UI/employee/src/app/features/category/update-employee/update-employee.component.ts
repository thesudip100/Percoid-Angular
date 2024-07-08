import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AddEmployeeRequest } from '../models/add-employee-request.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent {
  model: AddEmployeeRequest;

  constructor(private employeeservice:EmployeeService, private router: Router){
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
      this.employeeservice.updateEmployee(this.model)
      .subscribe({
        next:(response)=>{
          console.log("Update was successful");
          this.router.navigate(['/admin/employees']);
        }
      })
  }
}
