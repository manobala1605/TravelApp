import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-feedback',
  templateUrl: './user-feedback.component.html',
  styleUrls: ['./user-feedback.component.css']
})
export class UserFeedbackComponent implements OnInit {

  constructor(private snackbar:MatSnackBar) {}

  openSnackBar(message: string,action: string | undefined){
    this.snackbar.open(message,action);
  }

  ngOnInit(): void {
  }

}

export class DialogContentExampleDialog {}


