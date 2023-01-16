import {Component, Input, OnInit} from '@angular/core';
import {IBucket, OrderService} from "../order.service";

@Component({
  selector: 'app-bucket-list',
  templateUrl: './bucket-list.component.html',
  styleUrls: ['./bucket-list.component.scss']
})
export class BucketListComponent implements OnInit {




  bucketList?:IBucket[]

  isCartEmpty?:number ;
  totalList: number =0;


  constructor(private _orderService:OrderService) { }

  ngOnInit(): void {

     this._orderService.bucketSubject.subscribe(data=> {
       this.bucketList = data
       this.isCartEmpty = this.bucketList.length
     })

    this.totalList = 0
    this.bucketList?.map((element)=>{
      this.totalList+= element.price * element.quantity
    })
    console.log('from bucket' , this.bucketList)
  }






}
