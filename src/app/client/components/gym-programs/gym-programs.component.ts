import { Component, OnInit } from '@angular/core';
import { GymProgramsInterface } from './gym-programs-interface';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-gym-programs',
  templateUrl: './gym-programs.component.html',
  styleUrls: ['./gym-programs.component.scss'],
})
export class GymProgramsComponent implements OnInit {
  listOfPrograms: GymProgramsInterface[] = [
    {
      title: 'essentials',
      description:
        'Change course in twelve weeks! With this program you will change your body and your health in a short time. We set your personal goals and work towards them.',
      image: '/assets/images/programs/essentials.jpg',
      methods: [
        'personal assessment',
        'Targeted personal training',
        'Nutritional advice',
        'Weekly evaluation',
      ],
    },
    {
      title: 'Fundamentals',
      description:
        'With this program you work on creating a powerful mindset and changing your behavior. By working on your eating, living and exercise habits, you develop a healthy lifestyle that you can fall back on.',
      image: '/assets/images/programs/Fundamentals.jpg',
      methods: [
        'Intensive guidance for six months',
        'personal assessment',
        'The Fundamentals Handbook and Workbook',
        'Targeted personal training',
        'Nutritional advice and guidance',
      ],
    },
    {
      title: 'GO Together',
      description:
        'Do you like exercising together more than alone? Then GO2gether is the program for you. Work on your personal goals in a group of up to eight people.',
      image: '/assets/images/programs/go2gether.jpg',
      methods: [
        'personal assessment',
        'Three, six or twelve months of personal training in a small group',
        'Nutritional advice',
        'Monthly themed sessions and group coaching',
      ],
    },
    {
      title: 'Adaptable',
      description:
        'By creating a vital and resilient lifestyle, we work on the sustainable employability of your employees. This program has been developed to turn the culture within your company 180 degrees.',
      image: '/assets/images/programs/adaptable.jpg',
      methods: [
        'Personal assessment and kick-off',
        'Six or twelve months of personal training in a small group',
        'The Fundamentals handbook and workbook',
        'Weekly evaluation',
      ],
    },
    {
      title: 'digital coaching',
      description:
        'With a personal training plan you work remotely towards a fitter and more vital life. Thanks to the weekly contact with your coach and our useful tools, you can work towards your goals in a good way.',
      image: '/assets/images/programs/digitalCoaching.jpg',
      methods: [
        'personal assessment',
        'A personal training plan, suitable for your training location',
        'Nutritional advice',
        'Weekly contact with your personal coach',
      ],
    },
  ];

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    dotsSpeed:1000,
    navSpeed: 700,
    navText: [
      '<i class="fa fa-caret-left"></i>',
      '<i class="fa fa-caret-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: false,
  };
  constructor() {}

  ngOnInit(): void {}
}
