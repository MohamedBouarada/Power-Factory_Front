import {Component, Input, OnInit} from '@angular/core';
import {ProductClass} from "./productClass";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input()
  product!:ProductClass

  constructor() { }

  ngOnInit(): void {
  }

}
