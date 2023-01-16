import { Component, OnInit } from '@angular/core';
import {IProduct, IStoreData, ProductService} from "../../store/product.service";

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss']
})
export class AdminProductComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'price', 'delete', 'edit'];
  dataSource: IProduct[] = []

  constructor(private _productService:ProductService) { }

  ngOnInit(): void {
    this._productService.getAllData().subscribe({
      next:value => {
        this.dataSource=value.data
      }
    })
  }
  deleteElement(elemnt: any) {
    console.log('here');
  }
  editElement(elemnt: any) {
    console.log('here');
  }
}
