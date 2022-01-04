import {Component, OnDestroy} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnDestroy {
  isLogin = true;
  isRequesting = false;
  hidePass = true;  // for implementing visibility icon on password
  retrySubmit = false;
  bannerMessage = "";
  subscription: Subscription = new Subscription();

  authForm = new FormGroup({
    username: new FormControl(null ),
    email: new FormControl(null, [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^\S{12,}$/)]
    ),
    passwordRepeat: new FormControl(null)
  }, {validators: this.comparePasswordsValidator().bind(this)})

  constructor(
    private router: Router,
    private authService: AuthService,
    private dataService: DataService,
  ) {
  }

  onSubmit(): void {
    this.isRequesting = true;

    if (this.isLogin) {
      this.onLogin()
      // if login, steps are
      // submit the login information
      // await for the answer
      // if success
      // navigate to main page (and store the cookie
      // if failed
      // shows an alert with an error message
      // finally resets the world.
    } else {
      // if create account, steps are:
      // submit the account
      // await for the answer,
      // if created shows a dialog sending to email
      // if not shows an alert with an error message
      // finally resets the form.
      this.onSignUp()
    }
    this.authForm.reset()

  }

  onLogin() {
    if (!this.authForm.valid) {
      return alert('invalid form todo: switch to dialog');
    }
    this.isRequesting = true;
    this.subscription = this.authService.loginRoutine({
      email: this.authForm.value.email,
      password: this.authForm.value.password
    }).subscribe(
      () => {
      },
      this.updateUIonError(),
      () => {
      }
    )
  }

  onSignUp() {
    this.isLogin = false;
    if (!this.authForm.valid) {
      return alert('invalid form todo: switch to dialog');
    }
    this.isRequesting = true;

  }

  // ui methods
  changeTab(): void {
    this.isLogin = !this.isLogin
    this.retrySubmit = false;
    if(this.isLogin){
      this.authForm.controls.username.clearValidators();
      this.authForm.controls.passwordRepeat.clearValidators();
    }
    else{
      this.authForm.controls.username.setValidators([
        Validators.required,
        Validators.pattern(/\w{5,50}/)
      ])
      this.authForm.controls.passwordRepeat.setValidators([
        Validators.required,
        Validators.pattern(/^\S{12,}$/)
      ])
    }
    this.authForm.reset();
  }

  updateUIonError() {
    return (e: string) => {
      this.bannerMessage = e
      this.authForm.reset()
      this.isRequesting = false;
      this.retrySubmit = true;
    }
  }

  //custom form validators

  comparePasswordsValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (this.isLogin) {
        return null
      } else if (control.get('password')?.value !== control.get('passwordRepeat')?.value) {
        return {'passwordDoesNotMatchError': true}
      }
      return null
    }
  }


  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
