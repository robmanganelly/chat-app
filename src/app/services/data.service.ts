import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {ContactModel, UserModel} from "../models/user.model";

@Injectable({providedIn: "root"})
export class DataService {

  // subscribe to this properties on ngOnInit to keep fields updated
  // use a subscription object to avoid memory leaks

  user: Subject<UserModel> = new Subject<UserModel>();
  contacts: Subject<ContactModel[]> = new Subject<ContactModel[]>();
}
