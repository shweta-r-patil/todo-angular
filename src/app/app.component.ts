import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todo-app';
  todoVal: string | undefined;
  todoArr: string[] = [];
  constructor() { }

  ngOnInit() { }
  addTodo() {
    if (!this.todoVal || this.todoVal.trim().length == 0) {
      return
    } else {
      this.todoArr.push(this.todoVal);
    }
    console.log('this.todoArr', this.todoArr);
  }
  clearAll() {
    this.todoVal = '';
    console.log(this.todoVal);
    
  }
}

