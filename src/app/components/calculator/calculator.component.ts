import { Component } from '@angular/core';
import { DisplayComponent } from "./calculator/display/display.component";
import { KeyboardComponent } from "./calculator/keyboard/keyboard.component";
enum State{
  INIT,
  FIRST_FIGURE,
  SECOND_FIGURE,
  RESULT
}

@Component({
  selector: 'app-calculator',
  imports: [DisplayComponent, KeyboardComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {

  display:string =''
  currentState =State.INIT;
  firstFigure=0;
  secondFigure=0;
  operator='';
  result:number = 0;
   

  onClick(valor: string | number){
    if (typeof valor === 'string'){
      this.handleSymbol(valor)
    }else if(typeof valor === 'number'){
      this.handleNumber(valor)
    }

  }
  isoperator(value: string): boolean{
    return value === '+' || value === '-' || value === '*' || value === '/';
  }
  clear(){
    this.display = '';
    this.currentState = State.INIT;
    this.firstFigure = 0;
    this.secondFigure = 0;
    this.operator = '';
    this.result = 0;
  }

  handleNumber(value:number){
    switch(this.currentState){
      case State.INIT: 
        this.firstFigure=value;
        this.display+=value.toString();
        this.currentState = State.FIRST_FIGURE
        break;
      case State.FIRST_FIGURE:
        this.firstFigure= this.firstFigure * 10 + value
        this.display+=value.toString();
        break;
      case State.SECOND_FIGURE:
        this.secondFigure = this.secondFigure * 10 + value;
        this.display += value.toString();
        break;
      case State.RESULT:
        this.firstFigure = value;
        this.secondFigure = 0;
        this.result = 0;
        this.operator = '';
        this.display = value.toString();  
        this.currentState = State.FIRST_FIGURE;
        break;
    }
  }

  handleSymbol(value:string){
    if(value === 'c'){ 
      this.clear();
    }
    switch(this.currentState){
      case State.INIT:
        break;
      case State.FIRST_FIGURE:
        if(this.isoperator(value)){
          this.operator = value;
          this.display+=value;
          this.currentState = State.SECOND_FIGURE;
        }
        break;
      case State.SECOND_FIGURE:
      if  (value === '='){
        this.result = this.calcular();
        this.display += value + this.result.toString();
        this.currentState = State.RESULT;
      }
        break;
      case State.RESULT:
        if(this.isoperator(value)){
          this.firstFigure = this.result;
          this.secondFigure = 0;
          this.operator = value;
          this.result = 0;
          this.display = this.firstFigure.toString() + value;
          this.currentState = State.SECOND_FIGURE;
        }
        break;
    }
  }
  calcular(): number{
    switch(this.operator){
      case '+':
        return this.firstFigure + this.secondFigure;
      case '-':
        return this.firstFigure - this.secondFigure;
      case '*':
        return this.firstFigure * this.secondFigure;
      case '/':
        return this.firstFigure / this.secondFigure;
      default:
        return 0;
    }
  }
}
