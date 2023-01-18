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
    'Born Fitness is a big source for health and fitness. The blog aims to take the stress out of health, fitness, and nutrition. They have a no-hype, straightforward tone that delivers informative yet engaging content. Founder of Born Fitness Adam Bornstein works with world-class fitness experts to deliver clear and helpful answers.';

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
