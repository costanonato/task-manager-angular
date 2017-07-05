import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";


// TRATANDO ERROS
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/Observable/throw";


@Injectable()

export class LearningObservables {

    public constructor(private http: Http){
      
      // CRIANDO UM OBJETO OBSERVADOR
      let observer = {
        next: function(newData){
          console.log("CHAMOU O METODO NEXT E PASSOU COMO PARAMETRO O 'newData' => ", newData)
        },
        error: function(errorData){
          console.log("CHAMOU O METODO ERROR E PASSOU COMO PARAMETRO O 'errorData' => ", errorData)
        },
        complete: function(){
          console.log("CHAMOU O METODO COMPLETE E ENCERROU")
        },
      };
      
      // CRIANDO UM OBJETO OBSERVADOR (UTILIZANDO ARROW FUNCTIONS)
      // let arrowObserver = {
      //   next: (newData) => {
      //     console.log("CHAMOU O METODO NEXT E PASSOU COMO PARAMETRO O 'newData' => ", newData)
      //   },
      //   error: (errorData) => {
      //     console.log("CHAMOU O METODO ERROR E PASSOU COMO PARAMETRO O 'errorData' => ", errorData)
      //   },
      //   complete: () => {
      //     console.log("CHAMOU O METODO COMPLETE E ENCERROU")
      //   },
      // };


      // CRIANDO UM OBJETO OBSERVADO E PASSANDO UM OBSERVADOR COMO PARAMETRO
      // this.http.get("api/tasks")
      //   .subscribe(observer);

      

      // CRIANDO UM OBJETO OBSERVADO E CRIANDO UM OBSERVADOR NO PARAMETRO
      // this.http.get("api/tasks")
      //   .subscribe({
      //     next: function(newData){
      //       console.log("CHAMOU O METODO NEXT E PASSOU COMO PARAMETRO O 'newData' => ", newData)
      //     },
      //     error: function(errorData){
      //       console.log("CHAMOU O METODO ERROR E PASSOU COMO PARAMETRO O 'errorData' => ", errorData)
      //     },
      //     complete: function(){
      //       console.log("CHAMOU O METODO COMPLETE E ENCERROU")
      //     },
      //   }); 
      
      

      // PASSANDO OS METODOS (NEXT, ERROR, COMPLETE) DIRETAMENTE COMO PARAMETRO
      // this.http.get("api/taSDSsks")
      //   .subscribe(
      //     function(newData){
      //       console.log("CHAMOU O METODO NEXT E PASSOU COMO PARAMETRO O 'newData' => ", newData)
      //     },
      //     function(errorData){
      //       console.log("CHAMOU O METODO ERROR E PASSOU COMO PARAMETRO O 'errorData' => ", errorData)
      //     },
      //     function(){
      //       console.log("CHAMOU O METODO COMPLETE E ENCERROU")
      //     }
      //   ); 
      
      

      // PASSANDO OS METODOS (NEXT, ERROR, COMPLETE) DIRETAMENTE COMO PARAMETRO (USANDO ARROW FUNCTIONS)
      // this.http.get("api/tasks")
      //   .subscribe(
      //     newData => console.log("CHAMOU O METODO NEXT E PASSOU COMO PARAMETRO O 'newData' => ", newData),
      //     errorData => console.log("CHAMOU O METODO ERROR E PASSOU COMO PARAMETRO O 'errorData' => ", errorData),
      //     () => console.log("CHAMOU O METODO COMPLETE E ENCERROU")
      //   ); 

        
      // PASSANDO APENAS O METODO (NEXT) DIRETAMENTE COMO PARAMETRO (USANDO ARROW FUNCTIONS)
      this.http.get("api/tassdsdsks")
        .catch(this.handleErrors)
        .subscribe({
          next: (newData) => {
            console.log("CHAMOU O METODO NEXT E PASSOU COMO PARAMETRO O 'newData' => ", newData)
          },
          error: (errorData) => {
            alert("Ocorreu um erro no servidor, por favor tente mais tarde.")
          },
          complete: () => {
            console.log("CHAMOU O METODO COMPLETE E ENCERROU")
          },
        }); 

    }

    public handleErrors(error: Response){
      console.log("SALVANDO ERRO EM BANCO DE DADOS PARA O DESENVOLVEDOR => ", error);
      return Observable.throw(error);
    }

}