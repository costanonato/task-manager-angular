import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";

import "rxjs/add/operator/switchMap";

import { Task } from '../shared/task.model';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'task-detail',
  templateUrl: './task-detail.component.html'
})

export class TaskDetailComponent implements OnInit{
  public task: Task;

  public constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private location: Location
  ){ }

  public ngOnInit(){
    this.route.params
      .switchMap((params: Params) => this.taskService.getById(+params['id']))
      .subscribe(
        task => this.task = task,
        error => alert("Ocorreu um no servidor, tente mais tarde.")
      )
  }

  public goBack() {
    this.location.back();
  }

  public updateTask(){
    if(!this.task.title){
      alert("A tarefa deve ter um título!")
    }else{
      this.taskService.update(this.task)
        .subscribe(
          () => alert("Tarefa atualizada com sucesso!"),
          () => alert("Ocorreu um no servidor, tente mais tarde.")
        )
    }
  }
}