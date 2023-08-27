import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
    selector: 'app-edit',
    templateUrl: 'edit.component.html',
    styleUrls: ['edit.component.scss']
})

export class EditComponent implements OnInit {
    constructor(public dialogRef: MatDialogRef<EditComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { todoText: string, updateFunction: (newText: string) => void },
        private _snackBar: MatSnackBar) { }

    ngOnInit() { }
    updateTodo() {
        if (!this.data.todoText || this.data.todoText.trim().length === 0) {
            return
        } else {
            this.data.updateFunction(this.data.todoText);
            this.dialogRef.close('');
            this._snackBar.open("Updated successfully");
        }
    }
    clearText() {
        this.data.todoText = '';
    }
}