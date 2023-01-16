import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplay:true,
    autoplayHoverPause:true,
    autoplayTimeout:1000,
    autoplaySpeed:800,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      300: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: false
  }

  partnersArray:any=[
    {
      imgName:"/assets/images/partners/partner-1.jpg"
    },
    {
      imgName:"/assets/images/partners/partner-2.webp"
    },
    {
      imgName:"/assets/images/partners/partner-3.jpeg"
    },
    {
      imgName:"/assets/images/partners/partner-4.webp"
    },
    {
      imgName:"/assets/images/partners/partner-5.webp"
    },
    {
      imgName:"/assets/images/partners/partner-6.webp"
    },
    {
      imgName:"/assets/images/partners/partner-7.png"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
