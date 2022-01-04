import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {UserModel} from "../models/user.model";
import {APIAuthResponseModel, LoginModel} from "../models/auth.model";
import {HttpService} from "./http.service";
import {catchError, tap} from "rxjs/operators";
import {throwError} from "rxjs";

@Injectable({providedIn: "root"})
export class AuthService {
  userSubject = new BehaviorSubject<UserModel|null>(null);
  private tokenExpirationTimer: any;

  constructor(private appHttp: HttpService) {}

  loginRoutine(data: LoginModel): Observable<APIAuthResponseModel|null>{
    return this.appHttp.loginRequest(data).pipe(
      catchError((errorRes)=>{
        console.log(`full error: ${{...errorRes}}`)
        const message = errorRes.message;
        alert(message);
        return throwError(message)
      }));

  }
}
