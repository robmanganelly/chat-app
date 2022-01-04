import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  /*todo  form fields must take initial values from user values*/

  user = {
    username: 'BOB',
    photo: 'assets/user-default.png',
    email: 'email'
  }

  profileForm: FormGroup = new FormGroup({
    username: new FormControl(null,[Validators.required,Validators.pattern(/^\w{5,40}$/)]),
    photo: new FormControl(null,[Validators.required]),
    email: new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null,[Validators.required,Validators.pattern(/^\S{12,}$/)]),
    passwordRepeat: new FormControl(null,[Validators.required,Validators.pattern(/^\S{12,}$/)]),
    currentPasswordForChangeEmail: new FormControl(null,[Validators.required,Validators.pattern(/^\S{12,}$/)]),
    currentPasswordForChangePassword: new FormControl(null,[Validators.required,Validators.pattern(/^\S{12,}$/)])

  });
  usernameOnEdition = false;
  imageOnEdition =  false;
  photoPreview = "";
  emailOnEdition = false;
  passwordOnEdition = false;

  onPickedImage(e: Event): void{
    // @ts-ignore
    const file: File = e.target.files[0]
    console.log(file)
    this.profileForm.patchValue({photo: file});
    this.profileForm.get('photo')?.updateValueAndValidity({});
    const reader = new FileReader()
    reader.onload = (ev)=>{
      this.photoPreview = reader.result as string;
    }
    reader.readAsDataURL(file)
  }

  constructor() { }

  ngOnInit(): void {
    //load this data from service
    this.photoPreview = this.user.photo
    this.profileForm.setValue({
      username: 'some',
      email: 'some',
      photo: 'user-default.png',
      password: null,
      passwordRepeat: null,
      currentPasswordForChangeEmail: null,
      currentPasswordForChangePassword: null,

    });
  }

  onSubmitProfile():void { }




}
