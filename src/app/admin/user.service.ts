import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";



export interface IUser {
  id:number,
  username:string,
  firstname:string,
  lastname:string,
  telephone:string,
  role:string,
  salt:string,
  password:string

}
@Injectable({
  providedIn: 'root'
})
export class UserService {
   private _userList:IUser[]=[]


  constructor( private http:HttpClient) { }

  getAllUsers(){
     return this.http.get<IUser[]>(environment.apiBaseUrl + "/user",{
        headers : {
          'admin-flag' : 'true'
        }
     })
  }
}
