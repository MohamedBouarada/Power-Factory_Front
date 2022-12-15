import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promotional-products',
  templateUrl: './promotional-products.component.html',
  styleUrls: ['./promotional-products.component.scss'],
})
export class PromotionalProductsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  url: string = '/assets/images/post-3.jpg';
  imageChange(event: any) {
    if(event.target.src){
      this.url = event.target.src;
    }
  }
}
