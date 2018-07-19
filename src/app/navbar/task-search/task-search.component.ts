import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Task } from "../../tasks/shared/task.model";
import { TaskService } from "../../tasks/shared/task.service";

import { Observable, Subject, of } from "rxjs";
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";

@Component({
  selector: 'task-search',
  templateUrl: './task-search.component.html'
})

export class TaskSearchComponent implements OnInit{
  public searchTerms: Subject<string> = new Subject();
  public tasks: Task[] = [];

  public constructor(private taskService: TaskService, private router: Router){}

  public ngOnInit() {
    this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(
        term => term ? this.taskService.searchByTitle(term) : of<Task[]>([])
      )
    ).subscribe(tasks => this.tasks = tasks)
  }

  public search(term: string){
    this.searchTerms.next(term);
  }

  public gotoTask(task: Task){
    this.tasks = [];
    this.router.navigate(['/tasks', task.id]);
  }

}



