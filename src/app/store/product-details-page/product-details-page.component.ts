import { Component, OnInit } from '@angular/core';
import { IProduct, IStoreData, ProductService } from '../product.service';
import { productListData } from '../product-list/data';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { OrderService } from '../order.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss'],
})
export class ProductDetailsPageComponent implements OnInit {
  id?: number;
  product?: IProduct;
  currentIndex = 0;
  quantity = 1;
  imageBaseUrl = environment.apiBaseUrl;
  constructor(
    private router: ActivatedRoute,
    private _productService: ProductService,
    private goBackRouter: Router,
    private _orderService: OrderService,
    private toastr: ToastrService
  ) {
    this.router.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this._productService.getOneProduct(this.id!).subscribe({
      next: (data) => {
        this.product = data;
        console.log('====================================');
        console.log(this.product);
        console.log('====================================');
        
      },
      error: (error) => {
        console.log(error);
        this.goBackRouter.navigate(['notfound']);
      },
    });
  }

  handleIndexChange(index: number) {
    this.currentIndex = index;
    console.log('changed to index', this.currentIndex);
  }
  goToStore() {
    this.goBackRouter.navigate(['store']);
  }

  addElementToCart() {
    this._orderService.add(this.product!, this.quantity);
    this.toastr.success('product added to cart');
  }
  setValue(val: string) {
    this.quantity = parseInt(val);
  }
}
