import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  standalone: false,
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  constructor(private router :Router){}

  logout()
  {
    console.log("logoutt")
    console.log(localStorage.getItem('token'))
    this.goToEmployeeList();
    localStorage.removeItem('token')

  }
  goToEmployeeList(){
    this.router.navigate(['/login']);
  }

}
