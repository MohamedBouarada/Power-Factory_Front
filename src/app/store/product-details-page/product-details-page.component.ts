import { Component, OnInit } from '@angular/core';
import {IProduct} from "../product.service";
import {productListData} from "../product-list/data";

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss']
})
export class ProductDetailsPageComponent implements OnInit {


  id:number =1
  product:IProduct = productListData[0]
  currentIndex=0
  quantity=1
  constructor() { }

  ngOnInit(): void {

  }

  handleIndexChange(index:number) {
    this.currentIndex=index
    console.log('changed to index' , this.currentIndex)
  }

}
