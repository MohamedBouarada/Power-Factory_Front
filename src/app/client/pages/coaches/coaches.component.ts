import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.scss']
})
export class CoachesComponent implements OnInit {
  title: string = 'Coaches';
  subTitle: string = 'It’s All About What You Can Achieve';
  description: string =
    'If YOU commit to open, honest communication about your preferences and challenges… Your COACH will outline clear, daily tasks to complete that strike the balance you need to feel supported, accountable, and confident in your own abilities.';

  constructor() { }

  ngOnInit(): void {
  }

}
