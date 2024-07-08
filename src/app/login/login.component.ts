import { errorObject } from './../../../node_modules/inquirer-autocomplete-prompt/node_modules/rxjs/src/internal/util/errorObject';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);

  matcher = new MyErrorStateMatcher();
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.emailFormControl.value == null || this.emailFormControl.value.length == 0) {
      window.alert("Email is Required")
    } else if (this.passwordFormControl.value == null || this.passwordFormControl.value.length == 0) {
      window.alert("Password is Required")
    } else {
      this.loginService.loginWithEmailPassword(this.emailFormControl.value, this.passwordFormControl.value);
    }
  }

}
