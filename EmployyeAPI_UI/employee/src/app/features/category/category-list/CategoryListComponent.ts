import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AddEmployeeRequest } from '../models/add-employee-request.model';
import { EmployeeService } from '../services/employee.service';


@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})

export class CategoryListComponent {

  employees: AddEmployeeRequest[] = [];
  

  constructor(private employeeService: EmployeeService) { 
    this.onload();
  }
  onload(): void{
    this.employeeService.getAllEmployees().subscribe({
      next: (data: AddEmployeeRequest[]) => {
        this.employees = data;
      }});
  }

  onDelete(id: number):void{
    this.employeeService.deleteEmployee(id)
    .subscribe({
      next:(response)=>{
        console.log("Delete was successful");
        this.onload();
      }
    })
    }
  }

