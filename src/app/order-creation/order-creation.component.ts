import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-creation',
  standalone: false,
  templateUrl: './order-creation.component.html',
  styleUrl: './order-creation.component.css'
})
export class OrderCreationComponent {

   formData = {
    processName: 'IPDataSiteSurvey',
    orderId: '',
    orderName: '',
    product: ''
  };

  isOrderDetailsVisible = true;

  constructor(private router: Router) {}

  // Redirect to /main-page on close button click
  closePage() {
    this.router.navigate(['/main-page']);
  }

  toggleOrderDetails() {
    this.isOrderDetailsVisible = !this.isOrderDetailsVisible;
  }
}