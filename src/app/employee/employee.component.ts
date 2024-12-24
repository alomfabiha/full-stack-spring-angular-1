import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import {Employee} from "../employee";


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[] = [];
  selectedEmployee: Employee = { name: '', email: '', position: '' };
  isEditing = false;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
    });
  }

  selectEmployee(employee: Employee) {
    this.selectedEmployee = { ...employee };
    this.isEditing = true;
  }

  addOrUpdateEmployee() {
    if (this.isEditing) {
      this.employeeService.updateEmployee(this.selectedEmployee.id!, this.selectedEmployee)
        .subscribe(() => this.loadEmployees());
    } else {
      this.employeeService.addEmployee(this.selectedEmployee)
        .subscribe(() => this.loadEmployees());
    }
    this.resetForm();
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(() => this.loadEmployees());
  }

  resetForm() {
    this.selectedEmployee = { name: '', email: '', position: '' };
    this.isEditing = false;
  }
}
