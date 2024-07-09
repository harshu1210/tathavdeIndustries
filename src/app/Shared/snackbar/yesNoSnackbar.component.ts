import { SnackbarService } from './snackbar.service';
import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'yes-no-snackbar',
  template: `
    <div class="snackbarContainer">
      <div>
      <span>{{ data.message }}</span>
      </div>
      <div class="snackbar-buttons">
        <button mat-button (click)="onYesClick()">Yes</button>
        <button mat-button color="warn" (click)="onNoClick()">No</button>
      </div>
    </div>
  `,
  styles: [
    `
      .snackbarContainer{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
      }
    `
  ]
})
export class YesNoSnackBarComponent {

  constructor(
    public snackBarRef: MatSnackBarRef<YesNoSnackBarComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any, private snackbarService:SnackbarService) {}

  onYesClick() {
    this.snackBarRef.dismissWithAction();
    this.snackbarService.openCustomSnackbar();
  }

  onNoClick() {
    this.snackBarRef.dismiss();
  }
}
