import {Component, Input, OnInit} from '@angular/core';
import {productListData} from "./data";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input()
  productList=productListData;
  constructor() { }

  ngOnInit(): void {
  }

}
