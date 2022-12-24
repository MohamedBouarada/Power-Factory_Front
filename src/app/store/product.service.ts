import { Injectable } from '@angular/core';
import {productListData} from "./product-list/data";


export interface IProduct {
  id:number,
  name:string,
  brand:string,
  description:string,
  price:number,
  availability:string,
  number:number,
  photos:string[]

}

export interface IStoreData {
  data:IProduct[],
  total:number,
  page:number,
  numberOfPages:number
}
export enum oderSortEnum {
  'ASC' = 'ASC',
  'DESC' = 'DESC'
}
export enum orderCriteriaEnum {
  'PRICE'='price',
  'NAME' = 'name',
  'BRAND' = 'brand'
}

export interface IOrderOptions {
  sort : oderSortEnum,
  page: number,
  perPage:number ,
  orderBy:orderCriteriaEnum
}







@Injectable({
  providedIn: 'root'
})
export class ProductService {

  _storeData : IStoreData = {
    data:productListData,
    total:productListData.length,
    page:1,
    numberOfPages:1
  }

  _order : IOrderOptions = {
    sort :oderSortEnum.ASC,
    page:1,
    perPage:10,
    orderBy:orderCriteriaEnum.PRICE
  }
  constructor() { }

  get storeData(){
    return this._storeData;
  }
  get order (){
    return this._order;
  }

  set order( order:IOrderOptions){
    this._order = order
  }
  getAllData(){
    //TODO : send get request , update store data
    console.log('getting data from DB')
    console.log(this.order)
  }

  handleNextPage() {
    if(this.storeData.page < this.storeData.numberOfPages) {
      this.order.page +=1 ;
      this.getAllData()
    }
  }
  handlePreviousPage (){
    if(this.storeData.page >1) {
      this.order.page -=1 ;
      this.getAllData()
    }

  }

  handleOrderCriteriaChange(criteria:orderCriteriaEnum) {
    this.order.orderBy = criteria
    this.getAllData()
  }

  handleSortOrderChange(sort:oderSortEnum) {
    this.order.sort =sort;
    this.getAllData()

  }




}
