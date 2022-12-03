import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  @Input() videoName!: string;
  @Input() Title!: string;
  @Input() subTitle!: string;
  @Input() description!: string;

  defaultVideoName:string="bg.mp4";
  constructor() { }

  ngOnInit(): void {
  }

}
