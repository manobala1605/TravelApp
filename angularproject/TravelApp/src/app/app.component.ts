import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { AboutUsComponent, DialogContentExampleDialog } from './about-us/about-us.component';
import { UserFeedbackComponent } from './user-feedback/user-feedback.component';
import { BottomSheetOverviewSheet, UserProfileComponent } from './user-profile/user-profile.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TravelApp';
  panelOpenState = false;
  showFiller = false;
  myimage:string ="assets/travelslogo.jpeg";

  constructor(private _bottomSheet: MatBottomSheet,public dialog: MatDialog) {}

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewSheet);
  }

  openDialog() {
    this.dialog.open(AboutUsComponent);
  }
  openDialogBox() {
    this.dialog.open(UserFeedbackComponent);
  }
}




