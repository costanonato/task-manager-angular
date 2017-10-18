import { Response } from "@angular/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";

import { Angular2TokenService } from "angular2-token";
import { Task } from "./task.model";


@Injectable()

export class TaskService{
  public tasksUrl = "tasks";

  public constructor(private tokenHttp: Angular2TokenService){}


  public getAll(): Observable<Task[]>{
    let url = `${this.tasksUrl}?q[s]=updated_at+DESC`;
    
    return this.tokenHttp.get(url)
      .catch(this.handleErrors)
      .map((response: Response) => this.responseToTasks(response));
  }

  
  public getImportant(): Observable<Task[]>{
    let url = `${this.tasksUrl}?q[s]=deadline+ASC`;
    
    return this.tokenHttp.get(url)
      .catch(this.handleErrors)
      .map((response: Response) => this.responseToTasks(response));
  }


  public getById(id: number): Observable<Task> {
    let url = `${this.tasksUrl}/${id}`;

    return this.tokenHttp.get(url)
      .catch(this.handleErrors)
      .map((response: Response) => this.responseToTask(response));
  }


  public create(task: Task): Observable<Task> {
    let url = this.tasksUrl;
    let body = JSON.stringify(task);

    return this.tokenHttp.post(url, body)
      .catch(this.handleErrors)
      .map((response: Response) => this.responseToTask(response));
  }


  public update(task: Task): Observable<Task> {
    let url = `${this.tasksUrl}/${task.id}`;
    let body = JSON.stringify(task);

    return this.tokenHttp.put(url, body)
      .catch(this.handleErrors)
      .map(() => task)
  }


  public delete(id: number): Observable<null> {
    let url = `${this.tasksUrl}/${id}`;

    return this.tokenHttp.delete(url)
      .catch(this.handleErrors)
      .map(() => null)
  }


  public searchByTitle(term: string): Observable<Task[]> {
    let url = `${this.tasksUrl}?q[title_cont]=${term}`;

    return this.tokenHttp.get(url)
      .catch(this.handleErrors)
      .map((response: Response) => this.responseToTasks(response));
  }


  private handleErrors(error: Response){
    console.log("SALVANDO O ERRO NUM ARQUIVO DE LOG - DETALHES DO ERRO => ", error);
    return Observable.throw(error);
  }


  private responseToTasks(response: Response): Task[]{
    let collection = response.json().data as Array<any>;
    let tasks: Task[] = [];

    collection.forEach(item => {
      let task = new Task(
        item.id,
        item.attributes.title,
        item.attributes.description,
        item.attributes.done,
        item.attributes['deadline-to-br']
      )

      tasks.push(task)
    })
    
    return tasks;
  }


  private responseToTask(response: Response): Task {
    return new Task(
      response.json().data.id,
      response.json().data.attributes.title,
      response.json().data.attributes.description,
      response.json().data.attributes.done,
      response.json().data.attributes['deadline-to-br'],
    )
  }
}