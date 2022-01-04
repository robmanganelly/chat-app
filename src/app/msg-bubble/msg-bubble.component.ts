import {Component, Input, OnInit} from '@angular/core';
import {MessageModel} from "../models/message.model";

@Component({
  selector: 'app-msg-bubble',
  templateUrl: './msg-bubble.component.html',
  styleUrls: ['./msg-bubble.component.css']
})
export class MsgBubbleComponent implements OnInit {

  @Input()data: MessageModel = {text:"", sent: "", owner: true};

  constructor() { }
  ngOnInit(): void {
  }

}
