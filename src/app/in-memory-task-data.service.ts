import { Injectable } from "@angular/core";

import { InMemoryDbService } from "angular-in-memory-web-api";

@Injectable()

export class InMemoryTaskDataService implements InMemoryDbService {

  public createDb(){
    let tasks = [
      { id: 1, title: 'Comprar um celular novo' },
      { id: 2, title: 'Pagar boleto' },
      { id: 3, title: 'Pagar Internet' },
      { id: 4, title: 'Assistir aula sobre Rails' },
      { id: 5, title: 'Assistir aula sobre Angular' },
      { id: 6, title: 'Comprar Pizza' },
      { id: 7, title: 'Pagar Aluguel' },
    ];

    return { tasks }
  }

}