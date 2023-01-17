import { Injectable } from '@angular/core';
import {productListData} from "./product-list/data";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";


export interface IProduct {
  id:number,
  name:string,
  brand:string,
  description:string,
  price:number,
  availability:string,
  number:number,
  photos:IProductPhoto[],
  createdAt:string,
  updatedAt:string,
  deletedAt:string|null

}
export interface IProductPhoto {
  id:number,
  createdAt:string,
  updatedAt:string,
  deletedAt:string|null,
  url:string
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

 private _storeData : IStoreData |undefined

  private _order : IOrderOptions = {
    sort :oderSortEnum.ASC,
    page:1,
    perPage:10,
    orderBy:orderCriteriaEnum.PRICE
  }
  constructor(private http:HttpClient) { }

  get storeData(){
    return this._storeData!;
  }
  set storeData(data:IStoreData) {
   this._storeData= data
  }
  get order (){
    return this._order;
  }

  set order( order:IOrderOptions){
    this._order = order
  }
  getAllData() {

   // console.log('getting data from DB')
    //console.log(this.order)

     return this.http.get<IStoreData>(environment.apiBaseUrl + "/product",{
       params :{
         ...this.order
       }
     })


  }

  handleNextPage(numberOfPages:number) {
    if(this.order.page < numberOfPages) {
      this.order.page +=1 ;
     //this.getAllData()
    }
  }
  handlePreviousPage (){
    if(this.order.page >1) {
      this.order.page -=1 ;
      //this.getAllData()
    }

  }

  handleOrderCriteriaChange(criteria:orderCriteriaEnum) {
    this.order.orderBy = criteria
   // this.getAllData()
  }

  handleSortOrderChange(sort:oderSortEnum) {
    this.order.sort =sort;
   // this.getAllData()

  }

  getOneProduct(id:number) {
    return this.http.get<IProduct>(environment.apiBaseUrl + "/product/" +id)
  }

  addProduct(body:FormData | Object) {
   return this.http.post(environment.apiBaseUrl + '/product',body , {
     headers : {
       'admin-flag' : 'true'
     }
   })
  }

  editProduct(id:number,body:Object) {
   return this.http.patch(environment.apiBaseUrl + '/product/'+ id ,body , {
     headers : {
       'admin-flag' : 'true'
     }
   })
  }


}
