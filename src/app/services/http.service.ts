import {Injectable} from '@angular/core';
import {UserDataAPIResponseModel} from "../models/user.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {
  APIAuthResponseModel,
  LoginModel,
  PatchPasswordModel,
  ResetPasswordModel,
  SignupModel
} from "../models/auth.model";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  // this service contains the possible requests that can be made on the app,


  //portal
  loginRequest(payload: LoginModel): Observable<APIAuthResponseModel | null > {
    return this.http.post<APIAuthResponseModel>('localhost:3000/api/v1/portal/login ', payload,)
  }


  signUpRequest(payload: SignupModel):Observable<APIAuthResponseModel| null>{
    return this.http.post<APIAuthResponseModel>('provide url',payload)
  }

  resetPasswordRequest(payload: ResetPasswordModel): Observable<APIAuthResponseModel|null>{
    return this.http.post<APIAuthResponseModel>('set url',payload)
  }

  resetPasswordEditionRequest(payload: PatchPasswordModel): Observable<APIAuthResponseModel|null>{
    return this.http.patch<APIAuthResponseModel>('set url', payload)
  }


  getUserRequest(token: string| undefined): Observable<UserDataAPIResponseModel>{
    return this.http.get<UserDataAPIResponseModel>(
      'must place a url here',
      {
        responseType: 'json',
        observe: 'body',
        headers: new HttpHeaders({ Authorization: `Bearer ${token}` })
      });
  }
















  //todo
  getRoomsRequest(){}

  addContactRequest(){}
  updateContactRequest(){}
  deleteContactRequest(){}

  //side-bar
  createRoomRequest(){}
  deleteRoomsRequest(){}
  getRoomDetailsRequest(){}
  updateRoom(){}

  //msg
  loadMessagesFromRoomRequest(){}
  sendMessageRequest(){}
  editMessageRequest(){}
  deleteMessageRequest(){}

  //profile
  editProfileRequest(){}
  changeProfilePasswordRequest(){}
  changeProfileEmailRequest(){}
  deleteAccountRequest(){}

}
