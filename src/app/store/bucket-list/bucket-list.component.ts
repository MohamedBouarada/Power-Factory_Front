import {Component, Input, OnInit} from '@angular/core';
import {IBucket, OrderService} from "../order.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-bucket-list',
  templateUrl: './bucket-list.component.html',
  styleUrls: ['./bucket-list.component.scss']
})
export class BucketListComponent implements OnInit {




  bucketList?:IBucket[]


  isCartEmpty?:number ;
  totalList: number =0;
  private _address: string="";


  constructor(private _orderService:OrderService , private _toastr:ToastrService) { }

  ngOnInit(): void {


     this._orderService.bucketListSubject.subscribe({next:data=> {
       console.log("here")
       this.bucketList = data
         console.log('here' , this.bucketList , data)
       this.isCartEmpty = this.bucketList.length
         this.totalList = 0
         this.bucketList?.map((element)=>{
           this.totalList+= element.price * element.quantity
         })
     }
     })


    //console.log('from bucket' , this.bucketList)
  }


  checkout() {
    this._orderService.checkout(this._address , this.bucketList).subscribe({
      next:data => this._toastr.success('products ordered successfully'),
      error : err => this._toastr.error(err.error.message)
    })
  }

  changeAddress(value: string) {
    this._address = value
  }
}
