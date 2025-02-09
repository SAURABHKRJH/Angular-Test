import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OrderListComponent } from "./order-list/order-list.component";
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { MainPageComponent } from './main-page/main-page.component';
import { OrderCreationComponent } from './order-creation/order-creation.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateEmployeeComponent,
    MainPageComponent,
    OrderCreationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    OrderListComponent,
    CommonModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
