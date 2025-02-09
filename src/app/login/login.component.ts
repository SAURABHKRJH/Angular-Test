import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      emailid: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  login() {
    // Statically setting login success
    const mockEmail = 'test@example.com';
    const mockPassword = 'password123';
    // this.router.navigate(['main-page']);
    if (
      this.loginForm.value.emailid === mockEmail &&
      this.loginForm.value.password === mockPassword
    ) {
      alert('Login Success');
      localStorage.setItem('token', 'abc');
      this.loginForm.reset();
      this.router.navigate(['main-page']);
    } else {
      alert('User not found');
      localStorage.removeItem('token')
    }
  }
}
