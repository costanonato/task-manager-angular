import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Gerenciador de Tarefas';

  task: Task = {
    id: 21,
    title: 'Enviar orçamento para o cliente X'
  };

  task2: Task = new Task(22, 'Enviar orçamento para o cliente Z')
}


export class Task{
  public id: number;
  public title: string;

  constructor(id: number, title: string){
    this.id = id;
    this.title = title;
  }
}
