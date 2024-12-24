import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Patient} from "../model/patient";


@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private apiUrl = 'http://localhost:8080/patient';

  constructor(private http: HttpClient) { }


  create(obj: Patient): Observable<any> {
    return this.http.post(this.apiUrl, obj);
  }

  update(obj: Patient): Observable<any> {
    // return this.http.put(`${this.apiUrl}/${id}/test/${empName}`, employee);
    // return this.http.put(this.apiUrl + '/' + id, employee);
    return this.http.put(this.apiUrl, obj);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getAll(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getById(id: number): Observable<Patient> {
    return this.http.get<Patient>(`${this.apiUrl}/${id}`);
  }

}
