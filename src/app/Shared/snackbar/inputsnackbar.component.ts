import { LoginService } from './../../login/login.service';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
@Component({
  selector: 'app-custom-snackbar',
  template: `
    <form class="snackbarContainer2">
      <div>
        <input type="email" [formControl]="emailFormControl" placeholder="Enter Email">
      </div>
      <span class="example-spacer"></span>
      <div>
        <button mat-button (click)="onOkClick()">Submit</button>
      </div>
      </form>

  `,
  styles: [
    `
    .snackbarContainer2{
      display:flex;
      flex-direction:row;
      justify-content:center;
      align-items:center;
      gap:2vh;
    }
    `
  ]
})
export class InputSnackbarComponent {

  emailFormControl = new FormControl('',[Validators.required]);
  constructor(
    public snackBarRef: MatSnackBarRef<InputSnackbarComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any, private loginService:LoginService
  ) {}

  onOkClick() {
    this.snackBarRef.dismissWithAction();
    this.loginService.getUserByEmail(this.emailFormControl.value).subscribe((data)=>{
      if(data == undefined || data == null){
        window.alert("User does'nt Exsists")
      }else{
        window.alert("User Exsists")
      }
    })
  }
}
