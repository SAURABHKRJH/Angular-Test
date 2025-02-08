import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  standalone: false,
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
name: any;
password: any;
email: any;
  constructor(private employeeService:EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
  }
    signUp() {
      console.log("Sign Up Clicked!");
      console.log("Name:", this.name);
      console.log("Email:", this.email);
      console.log("Password:", this.password);
  
      alert("Sign Up Successful! Check console for details.");
      localStorage.setItem('token', 'abc');
      this.router.navigate(['/main-page']);

    }
  
    signIn() {
      console.log("Sign In Clicked!");
      alert("Redirecting to Sign In...");
      this.router.navigate(['/login']);
    }
}