import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './features/category/add-employee/add-employee.component';
import { CategoryListComponent } from "./features/category/category-list/CategoryListComponent";
import { UpdateEmployeeComponent } from './features/category/update-employee/update-employee.component';

export const routes: Routes = [
    {
        path:'admin/employees',
        component:CategoryListComponent
    },

    {
        path:'admin/employees/add',
        component:AddEmployeeComponent
    },
    {
        path:'admin/employees/update/:id',
        component:UpdateEmployeeComponent
    },
];
