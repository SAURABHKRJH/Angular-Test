import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule
import { FormsModule } from '@angular/forms';   // ✅ Import FormsModule for ngModel

interface Order {
  orderId: string;
  orderName: string;
  status: string;
  taskName: string;
  orderCreationDate: string;
  processName: string;
}

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css'
})
export class OrderListComponent implements OnInit {
  searchQuery = '';
  displayedOrders: Order[] = [];

  orders: Order[] = [
    { orderId: '102IH', orderName: 'testUI9', status: 'In Progress', taskName: 'Order Assignment', orderCreationDate: '09 Jan 2025', processName: 'IPDataSiteSurvey' },
    { orderId: '103HN', orderName: 'testUI', status: 'Completed', taskName: 'Planning Review', orderCreationDate: '08 Jan 2025', processName: 'IPDataSiteSurvey' },
    { orderId: '104JP', orderName: 'testUI', status: 'In Progress', taskName: 'Order Assignment', orderCreationDate: '10 Jan 2025', processName: 'IPDataSiteSurvey' },
    { orderId: '105JQ', orderName: 'test UI 10', status: 'Draft', taskName: 'Order Assignment', orderCreationDate: '10 Jan 2025', processName: 'IPDataSiteSurvey' },
    { orderId: '106JK', orderName: 'test UI 11', status: 'Delayed', taskName: 'Order Processing', orderCreationDate: '11 Jan 2025', processName: 'IPDataSiteSurvey' },
    { orderId: '107JL', orderName: 'test UI 12', status: 'Assigned Tasks', taskName: 'Verification', orderCreationDate: '12 Jan 2025', processName: 'IPDataSiteSurvey' },
  ];

  orderStatuses = [
    { key: 'Draft', label: 'Draft', color: 'gray' },
    { key: 'In Progress', label: 'In Progress', color: 'blue' },
    { key: 'Delayed', label: 'Delayed', color: 'red' },
    { key: 'Completed', label: 'Completed', color: 'green' },
    { key: 'Assigned Tasks', label: 'Assigned Tasks', color: 'purple' }
  ];

  activeTab: string = 'In Progress';

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

  filterOrders() {
    this.displayedOrders = this.orders.filter(order => {
      const matchesTab = order.status === this.activeTab;
      const matchesSearch = this.searchQuery
        ? order.orderName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          order.orderId.toLowerCase().includes(this.searchQuery.toLowerCase())
        : true;
      return matchesTab && matchesSearch;
    });
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
    this.filterOrders(); // Refresh the displayed list when switching tabs
  }

  constructor() {}

  ngOnInit(): void {
    this.filterOrders(); // Initialize displayedOrders when the component loads
  }
}
