import {Component, Input, OnInit} from '@angular/core';
import {ProductClass} from "./productClass";
import {environment} from "../../../environments/environment";
import {IProduct} from "../product.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input()
  product!:IProduct


  productImage = environment.apiBaseUrl

  isHovering = false

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigateToDetails(){
this.router.navigate(['product',this.product.id],)
  }

}
