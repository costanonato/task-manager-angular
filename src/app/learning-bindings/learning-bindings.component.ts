import { Component } from "@angular/core";

@Component({
  selector: 'learning-bindings',
  templateUrl: './learning-bindings.component.html'
})

export class LearningBindingsComponent {

  public mouseClickCount: number;
  public mouseOverCount: number;
  public userName: string;
  public userEmail: string;

  public constructor(){
    this.mouseClickCount = 0;
    this.mouseOverCount = 0;
    this.userName = "Nome Inicial";
    this.userEmail = "Email Inicial";
  }



  // mouse events
  public onClick(){
    console.log('Evento onClick disparado!');
    this.mouseClickCount++;
  }

  public onMouseOver(){
    console.log('Evento onMouseOver disparado!');
    this.mouseOverCount++;
  }


  // key events
  public onKeyDown(event: any){
    console.log('Evento onKeyDown disparado!');
    console.log(event);
    this.userName = event.target.value;
  }

  public onKeyUp(event: any){
    console.log('Evento onKeyUp disparado!');
    console.log(event);
    this.userEmail = event.target.value;
  }
}