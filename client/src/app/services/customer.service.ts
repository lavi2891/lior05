import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // Method to fetch all customers with name, nickname, and ID
  getCustomers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/customers`);
  }
}