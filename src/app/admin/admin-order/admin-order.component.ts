import { Component, OnInit } from '@angular/core';
import {IUser} from "../user.service";
import {IGetOrders, OrderService} from "../../store/order.service";

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.scss']
})
export class AdminOrderComponent implements OnInit {
  displayedColumns: string[] = ['id', 'address', 'total', 'delete', 'edit'];
  dataSource:IGetOrders[]=[];
  constructor( private _orderService:OrderService) { }

  ngOnInit(): void {
    this._orderService.getAll().subscribe({
      next : data => {
        this.dataSource = data
      },
      error : err =>console.log(err)
    })
  }


  deleteElement(elemnt: any) {
    console.log('here');
  }
  editElement(elemnt: any) {
    console.log('here');
  }

}
