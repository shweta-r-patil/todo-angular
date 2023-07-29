import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todo-app';
  todoVal!: string | undefined;
  pressedKey!: string;
  constructor() { }

  ngOnInit() { }
   onKeyPress(event: KeyboardEvent) {
     this.pressedKey = (event.target as HTMLInputElement).value;
   }
   addTodo(ev: any) {
     let clickVal = this.pressedKey;
   }
}

