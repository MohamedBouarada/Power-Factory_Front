import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {
  title: string = 'Programs';
  subTitle: string = 'Health Is Wealth';
  description: string =
    'Professional guidance, personal attention and training in an inspiring training environment, with results that matter.';

  constructor() { }

  ngOnInit(): void {
  }

}
