import { Headers, Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/Observable/throw";

import { Task } from "./task.model";


@Injectable()

export class TaskService{
  public tasksUrl = "api/tasks";

  public constructor(private http: Http){}


  public getTasks(): Observable<Task[]>{
    return this.http.get(this.tasksUrl)
      .catch(this.handleErrors)
      .map((response: Response) => response.json().data as Task[])
  }

  
  public getImportantTasks(): Observable<Task[]>{
    return this.getTasks()
      .catch(this.handleErrors)
      .map(tasks => tasks.slice(0, 4));
  }


  public getTask(id: number): Observable<Task> {
    let url = `${this.tasksUrl}/${id}`;

    return this.http.get(url)
      .catch(this.handleErrors)
      .map((response: Response) => response.json().data as Task)
  }


  public createTask(task: Task): Observable<Task> {
    let url = this.tasksUrl;
    let body = JSON.stringify(task);
    let headers = new Headers({'Content-Type': 'application/json'});

    return this.http.post(url, body, { headers: headers })
      .catch(this.handleErrors)
      .map(response => response.json().data as Task)
  }


  public updateTask(task: Task): Observable<Task> {
    let url = `${this.tasksUrl}/${task.id}`;
    let body = JSON.stringify(task);
    let headers = new Headers({'Content-type': 'application/json'});

    return this.http.put(url, body, { headers: headers })
      .catch(this.handleErrors)
      .map(() => task)
  }


  private handleErrors(error: Response){
    console.log("SALVANDO O ERRO NUM ARQUIVO DE LOG - DETALHES DO ERRO => ", error);
    return Observable.throw(error);
  }


}