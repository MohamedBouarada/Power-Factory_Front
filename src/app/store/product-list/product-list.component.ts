import {Component, Input, OnInit} from '@angular/core';
import {productListData} from "./data";
import {ProductClass} from "../product/productClass";
import {IProduct} from "../product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input()
  productList?:IProduct[];
  constructor() { }

  ngOnInit(): void {
  }

}
