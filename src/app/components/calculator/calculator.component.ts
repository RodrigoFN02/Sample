import { Component } from '@angular/core';
enum State{
  INIT,
  FIRST_FIGURE,
  SECOND_FIGURE,
  RESULT
}

@Component({
  selector: 'app-calculator',
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  display =''
  currentState =State.INIT;
  firstFigure=0;
  secondFigure=0;
  operator='';
  result = 0;
   

  onClick(valor: string | number){
    if (typeof valor === 'string'){
      this.handleSymbol(valor)
    }else if(typeof valor === 'number'){
      this.handleNumber(valor)
    }

  }

  handleNumber(value:number){
    switch(this.currentState){
      case State.INIT:
        this.firstFigure=value;
        this.display+=value.toString();
        this.currentState = State.FIRST_FIGURE
        break;
      case State.FIRST_FIGURE:
        this.firstFigure= this.firstFigure = 10 +value
        break;
      case State.SECOND_FIGURE:
        break;
      case State.RESULT:
        break;
    }
  }

  handleSymbol(value:string){
    switch(this.currentState){
      case State.INIT:
        break;
      case State.FIRST_FIGURE:
        break;
      case State.SECOND_FIGURE:
        break;
      case State.RESULT:
        break;
    }
  }
  calcular(){

  }
}
