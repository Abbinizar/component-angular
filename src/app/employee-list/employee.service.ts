import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor() {}

  getEmployee() {
    return [
      { id: 1, name: 'andre', age: 20 },
      { id: 2, name: 'andy', age: 23 },
      { id: 3, name: 'adi', age: 25 },
      { id: 4, name: 'aldo', age: 24 },
    ];
  }
}
