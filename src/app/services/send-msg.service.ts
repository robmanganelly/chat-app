import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {MessageModel} from "../models/message.model";

@Injectable({
  providedIn: 'root'
})
export class SendMsgService {

  send: Subject<MessageModel> = new Subject<MessageModel>()

  constructor() { }
}
