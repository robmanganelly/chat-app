import {Component, OnInit} from '@angular/core';
import {SendMsgService} from "../services/send-msg.service";

@Component({
  selector: 'app-bottom-toolbar',
  templateUrl: './bottom-toolbar.component.html',
  styleUrls: ['./bottom-toolbar.component.css']
})
export class BottomToolbarComponent implements OnInit {


  constructor(private msgSender: SendMsgService) { }

  ngOnInit(): void {
  }


  postMessage(msgcontent: HTMLTextAreaElement): void {
    this.msgSender.send.next({
      owner:true,
      text:msgcontent.value,
      sent: new Date().toUTCString()
    });
    msgcontent.value = "";
  }

}
