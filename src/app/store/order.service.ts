import { Injectable } from '@angular/core';
import {IProduct} from "./product.service";
import {Observable, Subject} from "rxjs";



export interface IBucket {
  id:number ,
  name:string,
  quantity:number,
  price:number,
  total:number
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {


  private _bucket : IBucket[] = []



  get bucketSubject() {
    return new Observable<IBucket[]>((subscriber => {
      subscriber.next(this._bucket)
    }))
  }

  get bucket(){
    return this._bucket
  }
  constructor() { }

  add(product:IProduct , quantity:number) {
    this._bucket.push({
      id:product.id ,
      name: product.name,
      quantity :quantity,
      price:product.price,
      total: product.price * quantity
    })





  }
}
