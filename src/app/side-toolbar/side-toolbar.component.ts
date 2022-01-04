import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-toolbar',
  templateUrl: './side-toolbar.component.html',
  styleUrls: ['./side-toolbar.component.css']
})
export class SideToolbarComponent implements OnInit {
  user = {username: 'placeholder', }; // load from a service
  hideOptions = true;
  AllCardsSelected = false;

  activateSelectFlag():void {
  this.AllCardsSelected = !this.AllCardsSelected;
  }

  deleteFlagged():void {
  }

  viewProfile():void {
  }

  createRoom():void {
  }
  constructor() { }

  ngOnInit(): void {
  }

}
