import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { TasksComponent } from "./tasks/tasks.component";
import { TaskDetailComponent } from "./tasks/task-detail/task-detail.component";

const ROUTES = RouterModule.forRoot([
  { path: 'tasks/:id', component: TaskDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tasks', component: TasksComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
])


@NgModule({
  imports: [ROUTES],
  exports: [RouterModule]
})

export class AppRoutingModule {

}