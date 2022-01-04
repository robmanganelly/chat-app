import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.css']
})
export class RecoverComponent implements OnInit {

  waitingToSendEmail =  true;

  passRecoverForm = new FormGroup({
    email: new FormControl(null,[Validators.required,Validators.email]),
  })


  constructor() {}

  onSubmit(): void {
    // logic here
    this.passRecoverForm.reset()
    this.waitingToSendEmail =  false;
    alert(`values are ${this.passRecoverForm.statusChanges}`); // this is the placeholder for the submit action

  }

  ngOnInit(): void {
  }

}
