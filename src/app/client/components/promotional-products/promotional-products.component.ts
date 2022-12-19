import { Component, OnInit } from '@angular/core';
import { PromotionalProductsInterface } from './promotional-products-interface';

@Component({
  selector: 'app-promotional-products',
  templateUrl: './promotional-products.component.html',
  styleUrls: ['./promotional-products.component.scss'],
})
export class PromotionalProductsComponent implements OnInit {
  listOfProducts: PromotionalProductsInterface[] = [
    {
      name: 'Incidid Tongue Bar',
      discount: -9,
      principaleImage: '/assets/images/post-3.jpg',
      otherImages: [
        '/assets/images/post-3.jpg',
        '/assets/images/post-4.jpg',
        '/assets/images/post-6.jpg',
      ],
      rating: 5,
      oldPrice: 89,
      newPrice: 81,
    },
    {
      name: 'Incidid Tongue Bar',
      discount: -9,
      principaleImage: '/assets/images/post-3.jpg',
      otherImages: [
        '/assets/images/post-6.jpg',
        '/assets/images/post-4.jpg',
        '/assets/images/post-6.jpg',
      ],
      rating: 0,
      oldPrice: 89,
      newPrice: 81,
    },
    {
      name: 'Incidid Tongue Bar',
      discount: -9,
      principaleImage: '/assets/images/post-3.jpg',
      otherImages: [
        '/assets/images/post-3.jpg',
        '/assets/images/post-4.jpg',
        '/assets/images/post-6.jpg',
      ],
      rating: 5,
      oldPrice: 89,
      newPrice: 81,
    },
    {
      name: 'Incidid Tongue Bar',
      discount: -9,
      principaleImage: '/assets/images/post-6.jpg',
      otherImages: [
        '/assets/images/post-3.jpg',
        '/assets/images/post-4.jpg',
        '/assets/images/post-6.jpg',
      ],
      rating: 2,
      oldPrice: 89,
      newPrice: 81,
    },
  ];

  stars=[1,2,3,4,5];
  constructor() {
  }
  images:string[]=[]
  ngOnInit(): void {
    //saving the pricipale images of each product
    for(var product of this.listOfProducts){
      this.images.push(product.principaleImage)
    }
  }

  
  imageChange(event: any,product:PromotionalProductsInterface) {
    
    if (event.target.src) {
      product.principaleImage = event.target.src;
    }
  }
  getFirstImage(product:PromotionalProductsInterface){
    product.principaleImage=this.images[this.listOfProducts.indexOf(product)];
  }
}
