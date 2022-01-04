import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MessageModel} from "../models/message.model";
import {SendMsgService} from "../services/send-msg.service";

@Component({
  selector: 'app-msg-list',
  templateUrl: './msg-list.component.html',
  styleUrls: ['./msg-list.component.css']
})
export class MsgListComponent implements OnInit, OnDestroy {
  @Input()currentConversationMessages: MessageModel[] = [];

  constructor(private msgReceiver:SendMsgService) { }

  ngOnInit(): void {
      this.msgReceiver.send.subscribe(
        msg=>this.currentConversationMessages.push(msg)
      )
  }

  ngOnDestroy(): void {
    this.msgReceiver.send.unsubscribe()
  }

}
