import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule
import { FormsModule } from '@angular/forms';   // ✅ Import FormsModule for ngModel

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css'
})
export class OrderListComponent  implements OnInit {
  orders = [
    { orderId: '102IH', orderName: 'testUI9', status: 'In Progress', taskName: 'Order Assignment', orderCreationDate: '09 Jan 2025', processName: 'IPDataSiteSurvey' },
    { orderId: '102HN', orderName: 'testUI', status: 'Completed', taskName: 'Planning Review', orderCreationDate: '08 Jan 2025', processName: 'IPDataSiteSurvey' },
    { orderId: '102JP', orderName: 'testUI', status: 'In Progress', taskName: 'Order Assignment', orderCreationDate: '10 Jan 2025', processName: 'IPDataSiteSurvey' },
    { orderId: '102JQ', orderName: 'test UI 10', status: 'Draft', taskName: 'Order Assignment', orderCreationDate: '10 Jan 2025', processName: 'IPDataSiteSurvey' },
    { orderId: '102JK', orderName: 'test UI 11', status: 'Delayed', taskName: 'Order Processing', orderCreationDate: '11 Jan 2025', processName: 'IPDataSiteSurvey' },
    { orderId: '102JL', orderName: 'test UI 12', status: 'Assigned Tasks', taskName: 'Verification', orderCreationDate: '12 Jan 2025', processName: 'IPDataSiteSurvey' },
  ];

  orderStatuses = [
    { key: 'Draft', label: 'Draft', color: 'gray' },
    { key: 'In Progress', label: 'In Progress', color: 'blue' },
    { key: 'Delayed', label: 'Delayed', color: 'red' },
    { key: 'Completed', label: 'Completed', color: 'green' },
    { key: 'Assigned Tasks', label: 'Assigned Tasks', color: 'purple' }
  ];

  activeTab: string = 'In Progress';

  get filteredOrders() {
    return this.orders.filter(order => order.status === this.activeTab);
  }

  getOrdersCount(status: string) {
    return this.orders.filter(order => order.status === status).length;
  }

  get totalOrders() {
    return this.orders.length;
  }

  getCircleProgress(status: string) {
    const count = this.getOrdersCount(status);
    return (count / this.totalOrders) * 283;
  }

  getOffset(index: number) {
    let offset = 0;
    for (let i = 0; i < index; i++) {
      offset += this.getCircleProgress(this.orderStatuses[i].key);
    }
    return -offset;
  }

  setTab(tab: string) {
    this.activeTab = tab;
  }

  constructor() {}

  ngOnInit(): void {}
}
