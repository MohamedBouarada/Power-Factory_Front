import { Component, Input, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  @Input() description: string="";
  @Input() title1: string="";
  @Input() title2: string="";
  constructor() { }

  ngOnInit(): void {
    
  }

}
