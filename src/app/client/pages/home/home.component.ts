import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  videoName: string = 'bg.mp4';
  listOfTitles: string[] = ['Be Stronger','Fitness First', 'Make It Happen ', 'Shock Everyone'];
  subTitle: string = 'Never give up';
  description: string =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,exercitationem. Sequi alias iusto minus dicta enim vitae accusantium quas obcaecati qui odit quod error quam, illum quisquam explicabo, inventore tenetur.';

  constructor() {}

  ngOnInit(): void {
    Aos.init()
    // var textarr = ['Be Stronger','Fitness First', 'Make It Happen ', 'Shock Everyone'];
    // var index = 0;

    // setInterval(() => {
    //   this.title = textarr[index];
    //   if (index != textarr.length) {
    //     index++;
    //   }
    //   if (index == textarr.length) {
    //     index = 0;
    //   }
    // }, 1500);
  }
}
