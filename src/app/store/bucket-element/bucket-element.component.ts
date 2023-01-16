import {Component, Input, OnInit} from '@angular/core';
import {IBucket, OrderService} from "../order.service";

@Component({
  selector: 'app-bucket-element',
  templateUrl: './bucket-element.component.html',
  styleUrls: ['./bucket-element.component.scss']
})
export class BucketElementComponent implements OnInit {


  @Input()
  bucketElement?:IBucket

  constructor(private  _orderService:OrderService) { }

  ngOnInit(): void {
  }

  remove(){
    this._orderService.remove(this.bucketElement!)

  }

}
