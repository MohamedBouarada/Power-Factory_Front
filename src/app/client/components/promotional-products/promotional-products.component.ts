import { Component, OnInit } from '@angular/core';
import { PromotionalProductsInterface } from './promotional-products-interface';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-promotional-products',
  templateUrl: './promotional-products.component.html',
  styleUrls: ['./promotional-products.component.scss'],
})
export class PromotionalProductsComponent implements OnInit {
  listOfProducts: PromotionalProductsInterface[] = [
    {
      name: 'Whey XT',
      discount: -9,
      principaleImage: '/assets/images/products/prod-1.webp',
      otherImages: [
        '/assets/images/products/prod-5.jpeg',
        '/assets/images/products/prod-6.jpeg',
        '/assets/images/products/prod-4.jpeg',
      ],
      rating: 5,
      oldPrice: 89,
      newPrice: 81,
    },
    {
      name: 'Whey HT 2.0',
      discount: -9,
      principaleImage: '/assets/images/products/prod-2.webp',
      otherImages: [
        '/assets/images/products/prod-1.webp',
        '/assets/images/products/prod-4.jpeg',
        '/assets/images/products/prod-3.webp',
        
      ],
      rating: 0,
      oldPrice: 89,
      newPrice: 81,
    },
    {
      name: 'Whey Blade Pro ',
      discount: -9,
      principaleImage: '/assets/images/products/prod-3.webp',
      otherImages: [
        '/assets/images/products/prod-4.jpeg',
        '/assets/images/products/prod-1.webp',
        '/assets/images/products/prod-2.webp',
        
      ],
      rating: 5,
      oldPrice: 89,
      newPrice: 81,
    },
    {
      name: 'Pack Essentiels',
      discount: -9,
      principaleImage: '/assets/images/products/prod-4.jpeg',
      otherImages: [
        '/assets/images/products/prod-3.webp',
        '/assets/images/products/prod-1.webp',
        '/assets/images/products/prod-2.webp',
      ],
      rating: 2,
      oldPrice: 89,
      newPrice: 81,
    },
    {
      name: '100% Whey Protein Professional',
      discount: -9,
      principaleImage: '/assets/images/products/prod-5.jpeg',
      otherImages: [
        '/assets/images/post-3.jpg',
        '/assets/images/post-4.jpg',
        '/assets/images/post-6.jpg',
      ],
      rating: 2,
      oldPrice: 89,
      newPrice: 81,
    },
    {
      name: 'Twix Hi-Protein Powder',
      discount: -9,
      principaleImage: '/assets/images/products/prod-6.jpeg',
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

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  
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
