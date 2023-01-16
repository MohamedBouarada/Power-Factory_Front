import { Component, OnInit } from '@angular/core';
import {IUser, UserService} from "../user.service";



@Component({
  selector: 'app-admin-client',
  templateUrl: './admin-client.component.html',
  styleUrls: ['./admin-client.component.scss'],
})
export class AdminClientComponent implements OnInit {
  displayedColumns: string[] = ['id', 'username', 'telephone', 'delete', 'edit'];
  dataSource:IUser[]=[];
  constructor( private _userService:UserService) {}

  ngOnInit(): void {
    this._userService.getAllUsers().subscribe({
      next: data =>{
        console.log("aaaaaaaaaaaaaaaaa")
       this.dataSource= data

      },
      error :err => console.log(err)
    })
  }
  deleteElement(elemnt: any) {
    console.log('here');
  }
  editElement(elemnt: any) {
    console.log('here');
  }
}
