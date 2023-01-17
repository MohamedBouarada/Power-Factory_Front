import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Aos from 'aos';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
  @Input() videoName!: string;
  @Input() title!: string;
  @Input() subTitle!: string;
  @Input() description!: string;
  @Input() joinUs!: boolean;
  @Input() listOfTitles: string[] = [];

  mp4: string = '.mp4';
  defaultVideoName: string = 'bg.mp4';
  observable = new Observable((observer) => {
    let i = 0;
    observer.next(this.listOfTitles[0]);
    setInterval(() => {
      if (i == this.listOfTitles.length) {
        i = 0;
      }
      observer.next(this.listOfTitles[i++]);
    }, 1500);
  });

  constructor(private readonly router: Router) {}
  ngOnInit(): void {}
  logIn() {
    this.router.navigate(['login']);
  }
}
