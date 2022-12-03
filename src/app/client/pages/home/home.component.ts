import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  videoName: string="bg.mp4";
  title: string="Be Stronger";
  subTitle: string="Never give up";
  description:string="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,exercitationem. Sequi alias iusto minus dicta enim vitae accusantium quas obcaecati qui odit quod error quam, illum quisquam explicabo, inventore tenetur."
  constructor() { }

  ngOnInit(): void {
  }

}
