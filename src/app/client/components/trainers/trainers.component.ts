import { Component, OnInit } from '@angular/core';
import { TrainerInterface } from './trainer-interface';

import * as Aos from 'aos';
@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.scss'],
})
export class TrainersComponent implements OnInit {
  listOfTrainers: TrainerInterface[] = [
    {
      image: '/assets/images/coaches/coach6.jpg',
      name: 'Nick',
      description:
      'Nick is the founder of Ultimate Performance. He’s based in London but with facilities operating on four different continents globally. He’s authored four books on body transformation and runs a team of 250 elite trainers. '
    },
    {
      image: '/assets/images/coaches/coach3.jpg',
      name: 'Matt Roberts',
      description:
      'London based trainer Matt trains a roster of celebrity clients, is a published author and has his own brand of fitness clothing. But despite this borderline celebrity trainer status, he remains grounded. He knows that working with regular people and helping them to achieve the results they’re looking for is what gets referrals, and word of mouth business.'
    },
    {
      image: '/assets/images/coaches/coach8.jpg',
      name: 'Shaun Stafford',
      description:
        'With a Masters degree in strength and conditioning from Oxford University, Shaun left university and went into a bodybuilding career. He followed that with a semi-professional rugby career and more recently focused on personal training.',
    },
    {
      image: '/assets/images/coaches/coach4.jpg',
      name: 'Scott Laidler',
      description:
        'Scott is regularly asked to feature as a consultant in fitness magazines and write a regular column in The Telegraph on maintaining a healthy lifestyle. Scott firmly believes in mastering your craft by honing your understanding of your physiology and how your body works in relation to your mind. ',
    },
    {
      image: '/assets/images/coaches/coach5.jpg',
      name: 'Benjamin Stone',
      description:
        'Los Angeles based personal trainer, Benjamin Stone, works with clients all over the world through his online personal training platform. He describes himself as a personal fitness concierge and supports clients',
    },
    {
      image: '/assets/images/coaches/coach7.jpg',
      name: 'Louise Parker',
      description:
      'Exercise professional Louise has published a number of books which have become Sunday Times bestsellers. This isn’t a common achievement, and is evidence of the relatable and compassionate way that Louise discusses the relationship between nourishing your body with food and staying “lean for life”'
    },
    // {
    //   image: '/assets/images/post-6.jpg',
    //   name: 'Bo37',
    //   description:
    //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ab! Quas illum doloribus eius, sint nobis perspiciatis mollitia fugiat at nam, iste quasi distinctio. Fugit, laboriosam! Unde quidem incidunt accusamus?',
    // },
  ];
  leftList: TrainerInterface[] = [];
  rightList: TrainerInterface[] = [];
  shownList: TrainerInterface[] = [];
  hiddenList: TrainerInterface[] = [];
  showMore: boolean = false;
  numberOfLines: number = 2;

  numberOfRightLinesShown: number = this.numberOfLines;
  numberOfLeftLinesShown: number = this.numberOfLines;
  constructor() {}

  ngOnInit(): void {
    
    this.shownList = this.listOfTrainers.slice(0, this.numberOfLines * 2);
    this.hiddenList = this.listOfTrainers.slice(
      this.numberOfLines * 2,
      this.listOfTrainers.length
    );
    this.leftList = this.shownList.slice(
      0,
      this.shownList.length / 2 + (this.shownList.length % 2)
    );
    this.rightList = this.shownList.slice(
      this.shownList.length / 2 + (this.shownList.length % 2),
      this.shownList.length
    );
  }
  showMoreCoaches() {
    if (this.showMore) {
      this.numberOfRightLinesShown = this.numberOfLines;
      this.numberOfLeftLinesShown = this.numberOfLines;
      this.leftList = this.shownList.slice(
        0,
        this.shownList.length / 2 + (this.shownList.length % 2)
      );
      this.rightList = this.shownList.slice(
        this.shownList.length / 2 + (this.shownList.length % 2),
        this.shownList.length
      );
    } else {
      this.leftList = this.listOfTrainers.slice(
        0,
        this.listOfTrainers.length / 2 + (this.listOfTrainers.length % 2)
      );
      this.rightList = this.listOfTrainers.slice(
        this.listOfTrainers.length / 2 + (this.listOfTrainers.length % 2),
        this.listOfTrainers.length
      );
      this.numberOfRightLinesShown = this.rightList.length;
      this.numberOfLeftLinesShown = this.leftList.length;
    }
    this.showMore = !this.showMore;
  }
}
