import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddEmployeeRequest } from '../models/add-employee-request.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  employee: AddEmployeeRequest;

  constructor(private employeeService: EmployeeService, private router: Router, private route: ActivatedRoute) { 
    this.employee={
      id:NaN,
      name:'',
      email:'',
      phone:'',
      address:'',
    }
    this.onload();
  }
  onload(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.employeeService.getEmployeeById(Number(id)).subscribe({
        next: (data) => {
          this.employee= data;
        }
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/admin/employees']);
  }
}
