import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';
import { LoginComponent } from './login/login.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { MainPageComponent } from './main-page/main-page.component';
import { OrderCreationComponent } from './order-creation/order-creation.component';

const routes: Routes = [
  // {path:'order',component:OrderListComponent},
  {path:'login',component:LoginComponent},
  {path: 'create-employee', component: CreateEmployeeComponent},
  {path: 'create-order', component: OrderCreationComponent},
  // {path: 'main-page', component: MainPageComponent},
  {
    path: 'main-page',
    component: MainPageComponent,
    children: [
      { path: 'order', component: OrderListComponent } // 👈 Nested child route
    ]
  },
  {path:'',redirectTo:'login',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
