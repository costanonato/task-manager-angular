import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { TasksComponent } from "./tasks/tasks.component";
import { TaskDetailComponent } from "./tasks/task-detail/task-detail.component";
import { TaskService } from "./tasks/shared/task.service";


const ROUTES = RouterModule.forRoot([
  {
    path: 'tasks/:id',
    component: TaskDetailComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'tasks',
    component: TasksComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
])



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    TasksComponent,
    TaskDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ROUTES
  ],
  providers: [
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
