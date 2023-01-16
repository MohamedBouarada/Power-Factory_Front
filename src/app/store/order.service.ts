import { Injectable } from '@angular/core';
import {IProduct} from "./product.service";
import {BehaviorSubject, observable, Observable, Subject} from "rxjs";



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

  private _bucketListSubject = new BehaviorSubject<IBucket[]>(this._bucket)


  get bucketListSubject(){

    return this._bucketListSubject
  }


  emitBucketListChange(){

    this.bucketListSubject.next(this.bucket)
  }


  get bucket(){
    return this._bucket
  }

  set bucket(val:IBucket[]){
    this._bucket=val
  }
  constructor() {
    //this.emitBucketListChange()
  }

  add(product:IProduct , quantity:number) {
    this._bucket.push({
      id: product.id,
      name: product.name,
      quantity: quantity,
      price: product.price,
      total: product.price * quantity
    })
    this.emitBucketListChange()
  }

    remove(element:IBucket){
      if(this.bucket.includes(element)){
        this.bucket=this.bucket.filter((elt,index)=>elt.id != element.id || index!=this.bucket.indexOf(element) )
      }
      this.emitBucketListChange()

    }






}
