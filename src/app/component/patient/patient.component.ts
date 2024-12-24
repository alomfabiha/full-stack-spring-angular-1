import { Component, OnInit } from '@angular/core';
import {PatientService} from "../../service/patient.service";
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {Patient} from "../../model/patient";



@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  formGroup: FormGroup | undefined;

 /* employees: Employee[] = [];
  selectedEmployee: Employee = { name: '', email: '', position: '' };
  isEditing = false;*/

  constructor(private patientService: PatientService,
              private formBuilder : FormBuilder) {

  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      id: ['', Validators.required],
      name: "",
      mobile: "",
      bloodgroup: '',
      address: "",
      hospital: ""
    });
    // this.loadEmployees();
  }

  saveData() {
    console.log("start")
    const patient = new Patient();
    patient.id = this.formGroup?.get('id')?.value;
    patient.name = this.formGroup?.get('name')?.value;
    patient.mobile = this.formGroup?.get('mobile')?.value;
    patient.bloodgroup = this.formGroup?.get('bloodgroup')?.value;
    patient.address = this.formGroup?.get('address')?.value;
    patient.hospital = this.formGroup?.get('hospital')?.value;
    this.patientService.create(patient)
      .subscribe(() => {
        console.log("save")
        // alert('data save');
      });
    console.log("end")
    /*if (this.isEditing) {
      this.employeeService.updateEmployee(this.selectedEmployee.id!, this.selectedEmployee)
        .subscribe(() => this.loadEmployees());
    } else {

    }
    this.resetForm();*/
  }

 /* loadEmployees() {
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
  }*/
}
