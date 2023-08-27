import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { EditComponent } from './edit-component/edit.component';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';

type Todo = {
  value: string,
  isChecked: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todo-app';
  todoVal: string | undefined;
  todoArr: Todo[] = [];
  constructor(public dialog: MatDialog) { }

  ngOnInit() { }
  addTodo() {
    if (!this.todoVal || this.todoVal.trim().length == 0) {
      return
    } else {
      let todoObj = { value: this.todoVal, isChecked: false };
      this.todoArr.push(todoObj);
    }
  }
  clearAll() {
    this.todoVal = '';
  }
  deleteItem(i: number) {
    this.todoArr.splice(i, 1);
  }
  changeEvent(event: MatCheckboxChange, i: number) {
    this.todoArr[i].isChecked = event.checked;
  }
  openDialog(i: number): void {
    const dialogRef = this.dialog.open(EditComponent, {
      data: {
        todoText: this.todoArr[i].value,
        updateFunction: (newText: string) => {
          this.todoArr[i].value = newText;
        }
      }
    })
  }
}

