import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  imports: [],
  templateUrl: './keyboard.component.html',
  styleUrl: './keyboard.component.css'
})
export class KeyboardComponent {
  @Output() onClickEvent = new EventEmitter<string | number>();  
  onClick(value: string | number){
    console.log(value)
    this.onClickEvent.emit(value)
  }
}
