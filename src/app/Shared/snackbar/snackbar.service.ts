import { InputSnackbarComponent } from './inputsnackbar.component';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import{YesNoSnackBarComponent} from './yesNoSnackbar.component'
@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) {}

  openYesNoSnackbar(message: string, callback: () => void) {
    const snackBarRef = this.snackBar.openFromComponent(YesNoSnackBarComponent, {
      data: { message }
    });

    snackBarRef.onAction().subscribe(() => {
      callback();
    });
  }

  openCustomSnackbar() {
    const snackBarRef = this.snackBar.openFromComponent(InputSnackbarComponent, {
    });
  }
}
