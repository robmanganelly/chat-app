import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-contact-tile',
  templateUrl: './contact-tile.component.html',
  styleUrls: ['./contact-tile.component.css']
})
export class ContactTileComponent implements OnInit {

  //placeholders temporary
  rooms: { photo: string, username: string, flagged?:boolean }[] = [
    {
      photo:'assets/user-default.png',
      username: '234rfeqwerqwcasdfdas'
    },
    {
      photo:'assets/user-default.png',
      username: '234rqwerqwcasdfdas'
    },
    {
      photo:'assets/user-default.png',
      username: '234rqwerqwcasdfdas'
    }
  ]
  constructor() { }

  ngOnInit(): void {
    this.rooms.forEach(r=>{r.flagged=false})
  }

  onFlagTile(room:{ photo: string, username: string, flagged?:boolean }) {
    room.flagged = !room.flagged;
  }



}
