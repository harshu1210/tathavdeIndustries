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
  confirmPasswordFormControl = new FormControl('', [Validators.required]);
  firstNameFormControl = new FormControl('', [Validators.required]);
  lastNameFormControl = new FormControl('', [Validators.required]);
  roleFormControl= new FormControl('',[Validators.required])
  passwordHide: boolean = true;
  confirmPassswordHide:boolean=true;
  matcher = new MyErrorStateMatcher();
  login:boolean=true;
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  enableCreateAccountForm(){
    this.login=false;
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

  createAccount(){
    if(this.firstNameFormControl.value == null || this.firstNameFormControl.value.length == 0){
      window.alert("First Name is Required")
    }else if(this.lastNameFormControl.value == null || this.lastNameFormControl.value.length == 0){
      window.alert("Last Name is Required")
    }else if(this.emailFormControl.value == null || this.emailFormControl.value.length == 0){
      window.alert("Email is Required")
    }else if(this.roleFormControl.value == null || this.roleFormControl.value.length == 0){
      window.alert("Role is Required")
    }else if(this.passwordFormControl.value == null || this.passwordFormControl.value.length == 0){
      window.alert("Password is Required")
    }else if(this.passwordFormControl.value.length<8){
      window.alert("Password should be greater than length of 8")
    }else if(this.confirmPasswordFormControl.value == null || this.confirmPasswordFormControl.value.length == 0){
      window.alert("Confirmation Password is Required")
    }else if(this.confirmPasswordFormControl.value.length<8){
      window.alert("Confirmation Password should be greater than length of 8")
    }else if(this.confirmPasswordFormControl.value != this.passwordFormControl.value){
      window.alert("Confirmation Password and Password does'nt match")
    }else{
      this.loginService.createUser({"firstName":this.firstNameFormControl.value,"lastName":this.lastNameFormControl.value,"email":this.emailFormControl.value,"role":this.roleFormControl.value,"password":this.passwordFormControl.value})
      this.firstNameFormControl.reset();
      this.lastNameFormControl.reset();
      this.emailFormControl.reset();
      this.roleFormControl.reset();
      this.passwordFormControl.reset();
      this.confirmPasswordFormControl.reset();
      this.login=true;
    }
  }

}
