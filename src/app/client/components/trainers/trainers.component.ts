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
      image: '/assets/images/coaches/med-2.jpg',
      name: 'Bo31',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ab! Quas illum doloribus eius, sint nobis perspiciatis mollitia fugiat at nam, iste quasi distinctio. Fugit, laboriosam! Unde quidem incidunt accusamus?',
    },
    {
      image: '/assets/images/coaches/med-2.jpg',
      name: 'Bo32',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ab! Quas illum doloribus eius, sint nobis perspiciatis mollitia fugiat at nam, iste quasi distinctio. Fugit, laboriosam! Unde quidem incidunt accusamus?',
    },
    {
      image: '/assets/images/coaches/med-2.jpg',
      name: 'Bo33',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ab! Quas illum doloribus eius, sint nobis perspiciatis mollitia fugiat at nam, iste quasi distinctio. Fugit, laboriosam! Unde quidem incidunt accusamus?',
    },
    {
      image: '/assets/images/post-4.jpg',
      name: 'Bo34',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ab! Quas illum doloribus eius, sint nobis perspiciatis mollitia fugiat at nam, iste quasi distinctio. Fugit, laboriosam! Unde quidem incidunt accusamus?',
    },
    {
      image: '/assets/images/post-4.jpg',
      name: 'Bo35',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ab! Quas illum doloribus eius, sint nobis perspiciatis mollitia fugiat at nam, iste quasi distinctio. Fugit, laboriosam! Unde quidem incidunt accusamus?',
    },
    {
      image: '/assets/images/post-4.jpg',
      name: 'Bo36',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ab! Quas illum doloribus eius, sint nobis perspiciatis mollitia fugiat at nam, iste quasi distinctio. Fugit, laboriosam! Unde quidem incidunt accusamus?',
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
    Aos.init()
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
